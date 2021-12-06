function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        
        /*var img = document.createElement('idade1')
        img.setAttribute('id', 'idade1')*/

        //var img = window.document.getElementsById('idade1')

        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //img.rsc = 'arquivos/homem-bebe.png'
                //criança
                //img.setAttribute('src', 'foto-bebe.png')
            }else if (idade < 21){
                //jovem
            } else if (idade < 50){
                //adulto
            } else{
                //idoso
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
            }else if (idade < 21){
                //jovem
            } else if (idade < 50){
                //adulto
            } else  {
                //idoso
            }
        }
        res.innerHTML = `E ${genero} com idade ${idade} anos`
        //res.appendChild(img)
    }
}