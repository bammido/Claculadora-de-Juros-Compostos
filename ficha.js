function calculaJurosCompostos(valorInicial, ValorDosAportes, taxa , anos){
    let ficha = [];
    let ano = 1;
    let patrimonioFinal = 0;
    for(i = 1; i <= anos; i++){
    
        if(ano == 1 ){
            var valorAno = valorInicial + ValorDosAportes*11;
        } else{
            valorAno = patrimonioFinal;
            valorAno += ValorDosAportes*12;
        }
        let juros = taxa/100 * valorAno;
        
        let mediaGanhosMensais = juros/12;

        patrimonioFinal = valorAno + juros;

        ficha.push(`montante reunido no ano ` + ano +`: ` + Math.round(valorAno) + ` ganhos em juros: ` + Math.round(juros) +` patrimônio final: ` + Math.round(patrimonioFinal) + ` média mensal: ` + Math.round(mediaGanhosMensais) );
        ano++;
    }
    return ficha;
}

console.log(calculaJurosCompostos(100, 1000, 15, 5));