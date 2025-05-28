balance(270, 110, "Nicolly");

function balance(wins, losses, username){
    let calculator = wins - losses;
        let rank;
    
            if (calculator <= 10) { rank = "Ferro" }
            else if(calculator >=11 && calculator <= 20) { rank = "Bronze" }
            else if(calculator >=21 && calculator <= 50) { rank = "Prata" }
            else if(calculator >=51 && calculator <= 80) { rank = "Ouro" }
            else if(calculator >=81 && calculator <= 90) { rank = "Diamante" }
            else if(calculator >=91 && calculator <= 100) { rank = "Lendario" }
            else if(calculator >=101) { rank = "Imortal" }
            else { rank = "🐱‍🐉 erroR 404 not found 🐱‍🐉" };

 
                console.log(`O Herói ${username} tem o saldo de ${calculator} e está no nível ${(rank)}`);
        
}

