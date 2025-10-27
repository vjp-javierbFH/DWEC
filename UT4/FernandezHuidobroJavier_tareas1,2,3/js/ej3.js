// Inicializar solicitud AJAX
let peticionAjax = new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange", procesarPeticion);
peticionAjax.open("GET", "https://jsonplaceholder.typicode.com/posts");
peticionAjax.setRequestHeader("Content-Type", "application/json");
peticionAjax.send();

// Procesar la respuesta AJAX
function procesarPeticion(event) {
    if (this.readyState == 4 && this.status == 200) {
        let objetoResultado = JSON.parse(this.responseText);
        procesarResultado(objetoResultado);
    }
}

// Procesar los resultados y crear posts
function procesarResultado(objetoResultado) {
    const postsContainer = document.getElementById("posts");
    for (let post of objetoResultado) {
        crearPost(post, postsContainer);
    }
}

// Crear un elemento para cada post
function crearPost(post, container) {
    let div = document.createElement("div");
    div.classList.add("entrada");
    div.innerHTML = `
        <p><strong class="titulo-label">TITULO</strong>: ${post.title}</p>
        <div>
            <p><strong>Contenido</strong>: ${post.body}</p>
            <button class="mostrarUsuario">Usuario del Post</button>
            <button class="mostrarComentarios">Mostrar comentarios</button>
            <div class="usuario d-none">
                <p><strong>NOMBRE USUARIO: </strong><span id="nombreUser-${post.id}"></span></p>
            </div>
            <div class="comentarios d-none">
                <p><strong>Comentarios: </strong></p>
            </div>
        </div>`;

    // Agregar evento al botón de usuario
    div.querySelector(".mostrarUsuario").addEventListener("click", function () {
        let usuarioDiv = div.querySelector(".usuario");
        if (usuarioDiv.classList.contains("d-none")) {
            cargarUsuario(post.id, div); // Pasamos post.id como userId
        } else {
            usuarioDiv.classList.toggle("d-none");
        }
    });

    // Agregar evento al botón de comentarios
    div.querySelector(".mostrarComentarios").addEventListener("click", function () {
        let comentariosDiv = div.querySelector(".comentarios");
        if (comentariosDiv.classList.contains("d-none")) {
            cargarComentarios(post.id, div);
        } else {
            comentariosDiv.classList.toggle("d-none");
        }
    });

    // Anexar el div al contenedor
    container.appendChild(div);
}

// Obtener y mostrar datos del usuario
function cargarUsuario(userId, div) {
    let userRequest = new XMLHttpRequest();
    userRequest.addEventListener("readystatechange", function () {
        if (this.readyState == 4 && this.status == 200) {
            let user = JSON.parse(this.responseText);
            let userNameSpan = div.querySelector(`#nombreUser-${userId}`); // Usamos userId para el selector
            userNameSpan.textContent = user.name;
            div.querySelector(".usuario").classList.remove("d-none");
        }
    });
    userRequest.open("GET", `https://jsonplaceholder.typicode.com/users/${userId}`);
    userRequest.send();
}

// Obtener y mostrar comentarios
function cargarComentarios(postId, div) {
    let comentariosRequest = new XMLHttpRequest();
    comentariosRequest.addEventListener("readystatechange", function () {
        if (this.readyState == 4 && this.status == 200) {
            let comentarios = JSON.parse(this.responseText);
            let comentariosDiv = div.querySelector(".comentarios");
            comentariosDiv.innerHTML = `<p><strong>Comentarios: </strong></p>`; // Reiniciar contenido
            comentarios.forEach(comentario => {
                let p = document.createElement("p");
                p.textContent = `- ${comentario.name}`;
                comentariosDiv.appendChild(p);
            });
            comentariosDiv.classList.remove("d-none");
        }
    });
    comentariosRequest.open("GET", `https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    comentariosRequest.send();
}