let n1 = parseFloat(prompt("Digite o primeiro valor: "));
let n2 = parseFloat(prompt("Digite o segundo valor: "));

document.write("Os valores informados foram " + n1 + " e " + n2 + ".");
document.write("<br>");
if (n1 < n2) {
    document.write("Segundo é maior.")
}
else if (n1 > n2) {
    document.write("Primeiro é maior.")
}
else {
    document.write("Os valores " + n1 + " e " + n2 + " são iguais.")
}