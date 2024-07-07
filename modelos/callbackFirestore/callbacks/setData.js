import { doc, setDoc } from "firebase/firestore";
import db from "./firestoreConnect";

async function setData(colors){
    let objectColor = colors.color;
    let textColor = colors.text;
    try {
        await setDoc(doc(db, "getColors","objects"), { 
            color: objectColor,
            text: textColor
        })
        console.log("Objeto actualizado");
    } catch (error) {
        console.error(error);
    }
}

export default setData;