// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Cargar lista desde localStorage al iniciar
window.onload = () => {
    const data = localStorage.getItem("amigos");
    if (data) {
        amigos = JSON.parse(data);
        mostrarLista();
    }
};

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validaciones
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (amigos.some(a => a.toLowerCase() === nombre.toLowerCase())) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    guardarLista();
    input.value = "";
    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botón eliminar
        const btn = document.createElement("button");
        btn.textContent = "❌";
        btn.style.marginLeft = "5px";
        btn.style.cursor = "pointer";
        btn.onclick = () => eliminarAmigo(index);

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    guardarLista();
    mostrarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="ganador">🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}

function guardarLista() {
    localStorage.setItem("amigos", JSON.stringify(amigos));
}
