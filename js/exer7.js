let n1= parseFloat(prompt("Digite o primeiro número: "));
        let n2= parseFloat(prompt("Digite o segundo número: "));
        let n3= parseFloat(prompt("Digite o terceiro número: "));
        let n4= parseFloat(prompt("Digite o quarto número: "));
        let n5= parseFloat(prompt("Digite o quinto número: "));
        let n6= parseFloat(prompt("Digite o sexto número: "));

        soma= 0;

        document.write("Os números informados foram "+ n1 + ", " + n2+", " + n3+", "+ n4 + ", " + n5+" e " + n6+".");
        document.write("<br>");
        if(n1<72){
            soma = soma+n1;
        }
        if(n2<72){
            soma = soma+n2;
        }
        if(n3<72){
            soma = soma+n3;
        }
        if(n4<72){
            soma = soma+n4;
        }
        if(n5<72){
            soma = soma+n5;
        }
        if(n6<72){
            soma = soma+n6;
        }

        document.write("A soma dos valores é: " + soma);