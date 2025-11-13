// Castear el input a HTMLInputElement
let input = <HTMLInputElement>document.getElementById("input1");

let boton = <HTMLButtonElement>document.getElementById("boton");
boton.addEventListener("click", (e)=> {
    alert(input.value);
});

if (input instanceof HTMLInputElement) {
    console.log("El input es del tipo HTMLInputElement");
} 