import { doc, getDoc } from 'firebase/firestore';
import db from './firestoreConfig';

async function readData(){
   try {
    const objectsData = (await getDoc(doc(db,"getColors","objects"))).data();
    console.log(objectsData);
    return objectsData;
   } catch (error) {
    console.error(error);
    return null;
   }
}

export default readData;