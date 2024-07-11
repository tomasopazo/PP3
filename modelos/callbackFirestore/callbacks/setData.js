import { doc, setDoc } from "firebase/firestore";
import db from "./firestoreConnect";

async function setData(colors){
    let objectColor = colors.color;
    let textColor = colors.text;
    try {
        let sendData = await setDoc(doc(db, "getColors","objects"), { 
            color: objectColor,
            text: textColor
        })
        console.log(sendData);
        //console.log(`Objeto actualizado: Boton(${objectColor}); Texto(${textColor})`);
    } catch (error) {
        console.error(error);
    }
}

export default setData;