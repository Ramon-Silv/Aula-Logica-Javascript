let n1= parseFloat(prompt("Digite o primeiro número: "));
        let n2= parseFloat(prompt("Digite o segundo número: "));
        let n3= parseFloat(prompt("Digite o terceiro número: "));
        let n4= parseFloat(prompt("Digite o quarto número: "));

        document.write("Os valores informados foram "+ n1 + ", " + n2+", " + n3+", "+ n4);
        document.write("<br>");
        media= (n1+n2+n3+n4)/4;
        
        if(n1 && n2 && n3 && n4 >0 && n1 && n2 && n3 && n4 <10){
            if(media>5){
                document.write("Você passou no teste."); 
                document.write("<br>");
                document.write("A média desses números é "+media);
            }
            else{
            document.write("Tente novamente.");
        }
        }
        else{
            document.write("Tente novamente.");
        }