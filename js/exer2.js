let n= parseFloat(prompt("Digite um número: "))

        document.write("O valor informado foi "+n);
        document.write("<br>");
        if(n>0){
            document.write("O valor "+ n+" é um valor positivo");
        }
        else if(n<0){
            document.write("O valor "+ n+" é um valor negativo");
        }
        else{
            document.write("O valor "+ n+" é igual a zero");
        }