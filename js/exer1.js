let numero1 = parseInt(prompt("Informe o primeiro número: "));
let numero2 = parseInt(prompt("Informe o segundo número: "));

document.write("Os números informados foram " + numero1 + " e " + numero2 + ".")
document.write("<br>");

if (numero1 > numero2) {
    document.write("O maior número entre eles é o número " + numero1 + ".")
}
else {
    document.write("O maior número entre eles é o número " + numero2 + ".")
}