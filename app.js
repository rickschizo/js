var nasc = 2009
let nome = "rick"
const vivo = true

function calcIdade(ano=2026){
    let idade = ano - nasc;
    alert(`Dentro de Função - Idade ${idade}`);
    return idade;
}

calcIdade();
//alert(`Fora da Função : Idade ${Idade}`);
alert(`fora da Função : chamando calcIdade ${calcIdade(2027)}`);