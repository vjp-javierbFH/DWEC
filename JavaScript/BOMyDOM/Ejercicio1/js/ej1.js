// Declaro una variable la cual referencia al primer <li>
let primerLi = document.getElementById("primerElemento");

do {
    alert(`nodeName: ${primerLi.nodeName} \nnodeType: ${primerLi.nodeType}
nodeValue: ${primerLi.nodeValue} \ntextContent: ${primerLi.textContent}`);
    primerLi.nextElementSibling;
} while (primerLi = primerLi.nextElementSibling);
