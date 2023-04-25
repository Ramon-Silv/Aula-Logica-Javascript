let senha_usu = parseInt(prompt("Digite a senha: "));
senha = 1234;

if (senha_usu == senha) {
    document.write("ACESSO PERMITIDO");
}
else {
    document.write("ACESSO NEGADO, senha inválida");
}