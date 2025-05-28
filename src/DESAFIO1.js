let NomeDoHeroi = "Nicolly";
let Experiencia = 15000;
let Nivel;

if (Experiencia <= 1000) {
    Nivel = "Ferro";
}
else if (Experiencia >= 1001 && Experiencia <= 2000) { 
    Nivel = "Bronze";   
}
else if (Experiencia >= 2001 && Experiencia <= 5000) {
    Nivel = "Prata";
}
else if (Experiencia >= 5001 && Experiencia <= 7000) {
    Nivel = "Ouro";
}
else if (Experiencia >= 7001 && Experiencia <= 8000) {
    Nivel = "Platina";
}
else if (Experiencia >= 8001 && Experiencia <= 9000) {
    Nivel = "Ascendente";
}
else if (Experiencia >= 9001 && Experiencia <= 10000) {
    Nivel = "Imortal";
}
else if (Experiencia >= 10001) {
    Nivel = "Radiante";
}
else {
    Nivel = "Heroi não encontrado";
}

console.log(NomeDoHeroi + " tem " + Experiencia + " de experiência e está no nível " + Nivel);