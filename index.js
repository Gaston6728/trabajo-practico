document.getElementById("Información de Foto").addEventListener("submit", function(event) {
event.preventDefault();

const Fecha = document.getElementById("Fecha").value
const Info = document.getElementById("Info").value;
const Foto = document.getElementById("Foto").value || "https://picsum.photos/200" ;
const Fondo = document.getElementById("Fondo").value;
const Borde = document.getElementById("Borde").value;


console.log({
    Fecha: Fecha,
    Info: Info,
    Foto: Foto,
    Fondo: Fondo,
    Borde: Borde,
});

const Cargarfoto = document.getElementById("Cargar-Foto");
const HopeFest = document.createElement("div")
HopeFest.className = "HopesFest-Foto"
HopeFest.style.backgroundColor = Fondo;
HopeFest.style.borderColor = Borde;


HopeFest.innerHTML = `

<img src="${Foto}" alt="Foto">
<div class="FotoSubida">
    <p>${Fecha}</p>
    <p>${Info}</p>
</div>

`;

Cargarfoto.appendChild(HopeFest)

document.getElementById("Información de Foto").reset();


});
