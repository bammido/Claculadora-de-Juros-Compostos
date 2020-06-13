let valorFuturo;
let ValorDosAportes;
let anos;
let taxa;

function calculaJurosCompostos(valorInicial, ValorDosAportes, taxa , anos){
    const periodo = anos*12;
    let ficha = [];
    let ano = 1;

    for(i = 1; i <= anos; i++){
    
        if(ano == 1 ){
            var valorAno = valorInicial + ValorDosAportes*11;
        } else{
            valorAno += ValorDosAportes*12;
        }

        ficha.push(`montante reunido no ano ` + ano +`: ` + valorAno)
        ano++;
    }
    return ficha;
}

console.log(calculaJurosCompostos(1000, 100, 15, 5));