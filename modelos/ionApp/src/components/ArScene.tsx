import React, { useState, useEffect, useRef } from "react"
import 'aframe';

import db from "../config/firebaseConfig";
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

const getRandomColor = () => {
    const letters = '0123456789';
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const ArScene: React.FC = () => {
    const sphereRef = useRef<any>(null);

    useEffect(() => {
        const sphereDocRef = doc(db, 'objectos', 'esfera');

        const unsubscribe = onSnapshot(sphereDocRef, (doc) => {
            if (doc.exists()){
                const data = doc.data();
                if (sphereRef.current){
                    sphereRef.current.setAttribute("material", "color", data.color)
                }
            }
        })
        return () => unsubscribe();
    }, [])

    const handleSphereClick = () => {
        const newColor = getRandomColor();
        sphereRef.current.setAttribute('material', 'color', newColor);
        const sphereDocRef = doc(db, 'objects', 'my-sphere');
        setDoc(sphereDocRef, { color: newColor }, { merge: true });
    };
    return (
        <a-scene>
          <a-sphere
            position="0 1.25 -5"
            radius="1.25"
            color="#EF2D5E"
            ref={sphereRef}
            onClick={handleSphereClick}
          ></a-sphere>
          <a-camera></a-camera>
        </a-scene>
    );
}

export default ArScene;