const container = document.querySelector(".container")
const people = [
    { name: "Michelle", image: "/static/img/pexels-michelle-leman-6774871.jpg" },
    { name: "Adam", image: "/static/img/pexels-cottonbro-studio-5018220.jpg" },
    { name: "foto1", image: "/static/img/foto-1.jpg" },
    { name: "foto2", image: "/static/img/foto-2.jpg" },
    { name: "foto3", image: "/static/img/foto-3.jpg" },
    { name: "foto4", image: "/static/img/foto-4.jpg" },
    { name: "foto5", image: "/static/img/foto-5.jpg" },
    { name: "foto6", image: "/static/img/foto-6.jpg" },
    { name: "foto7", image: "/static/img/foto-7.jpg" },
]

const showProfiles = () => {
    let output = ""
    people.forEach(
        ({ name, image }) =>
        (output += `
        <div class="card">
      <div class="face face1">
        <div class="content">
          <div class="icon">
            <img class="profile" src=${image} alt="">
          </div>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <h3>
            ${name}
          </h3>
          <button class="button button3"><img id="icon" src="/static/img/me-gusta.png" alt=""></button>
          <button class="button"><img src="/static/img/charla.png" alt="" id="icon"></button>
          <button class="button button2" id="myBtn"><img src="/static/img/boton-de-informacion.png" alt=""
              id="icon"></button>
        </div>
      </div>
    </div>
        `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showProfiles)

document.addEventListener("DOMContentLoaded", function () {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}