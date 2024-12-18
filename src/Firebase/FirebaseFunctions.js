// FirebaseFunction.js
import { db } from '../FirebaseConfig';
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';








// ---------------------------------------'Flows'------------------------------------------
export const addFlow = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "Flows"), data);
    console.log("Documento agregado con ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error al agregar el documento: ", error);
    throw error;
  }
};

// Función para obtener todos los documentos de 'flow'
export const getAllFlows = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Flows"));
    const flows = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log("Documentos obtenidos: ", flows);
    return flows;
  } catch (error) {
    console.error("Error al obtener documentos: ", error);
    throw error;
  }
};

// Función para eliminar un documento específico
export const deleteFlow = async (id) => {
  try {
    await deleteDoc(doc(db, "Flows", id));
    console.log(`Documento con ID: ${id} eliminado`);
  } catch (error) {
    console.error("Error al eliminar el documento: ", error);
    throw error;
  }
};
// ----------------------------------------------------------------------------------------