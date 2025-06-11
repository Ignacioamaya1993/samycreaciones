import app from './firebaseConfig.js';
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { query, where } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const db = getFirestore(app);

const contenedor = document.getElementById("productos-destacados");

async function cargarDestacados() {
  const q = query(collection(db, "productos"), where("destacado", "==", true));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(doc => {
    const producto = doc.data();
    const card = document.createElement("div");
    card.classList.add("card-producto");

    card.innerHTML = `
      <img src="${producto.imagenUrl}" alt="${producto.nombre}">
      <div class="contenido">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <div class="precio">$${producto.precio}</div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

cargarDestacados();