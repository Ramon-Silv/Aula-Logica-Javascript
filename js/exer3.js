let n1= parseFloat(prompt("Digite o primeiro valor: "));
        let n2= parseFloat(prompt("Digite o segundo valor: "));
        let n3= parseFloat(prompt("Digite o terceiro valor: "));

        document.write("Os números informados foram "+ n1 + ", " + n2+ " e " +n3+ ".");
        document.write("<br>");
        if(n1>n2 && n1>n3){
            document.write("O maior número entre eles é o número "+ n1+".")
        }
        else if(n2>n3 && n2>n1){
            document.write("O maior número entre eles é o número "+ n2+".")
        }
        else{
            document.write("O maior número entre eles é o número "+ n3+".")
        }