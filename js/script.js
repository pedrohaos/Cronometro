function tempoRestante(tempoFinal){
    var t = Date.parse(tempoFinal) - Date.parse(new Date());
    var segundos = Math.floor((t / 1000) % 60);
    var minutos = Math.floor((t / 1000 / 60) % 60);
    var horas = Math.floor((t / (1000 * 60 *60)) % 24);
    var dias = Math.floor(t / (1000 * 60 * 60 *24));
    return{
        'total' : t,
        'dias' : dias,
        'horas' : horas,
        'minutos' : minutos,
        'segundos' : segundos,
    };
}


function iniciaRelogio (classNome, tempoFinal){
    var relogio = document.querySelector(`.${classNome}`);
    var diasSpan = relogio.querySelector('.dias');
    var horasSpan = relogio.querySelector('.horas');
    var minutosSpan = relogio.querySelector('.minutos');
    var segundosSpan = relogio.querySelector('.segundos');

    function atualizacaoDadosRelogio(){
        var t = tempoRestante(tempoFinal);

        diasSpan.innerHTML = t.dias;
        horasSpan.innerHTML = ('0' + t.horas).slice(-2);
        minutosSpan.innerHTML = ('0' + t.minutos).slice(-2);
        segundosSpan.innerHTML = ('0' + t.segundos).slice(-2);

        if(t.total <= 0){
            limparIntevalo(intervaloTempo);
        }
    }

    atualizacaoDadosRelogio();
    var intervaloTempo = setInterval(atualizacaoDadosRelogio, 1000);

}

var prazoDeterminado = new Date(Date.parse(new Date()) + 11 * 24 * 60 * 60 * 1000);
iniciaRelogio ('cronometro', prazoDeterminado);
