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
        
        var img = document.querySelector("#idade1")

        //var img = window.document.getElementsById('idade1')

        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'arquivos/homem-bebe.png')
                //criança
                
            }else if (idade < 21){
                img.setAttribute('src', 'arquivos/homem-jovem.png')
                //jovem
            } else if (idade < 50){
                img.setAttribute('src', 'arquivos/homem-adulto.png')
                //adulto
            } else{
                img.setAttribute('src', 'arquivos/homem-velho.png')
                //idoso
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'arquivos/mulher-criança.png')
                //criança
            }else if (idade < 21){
                img.setAttribute('src', 'arquivos/mulher-jovem.png')
                //jovem
            } else if (idade < 50){
                img.setAttribute('src', 'arquivos/mulher-adulto.png')
                //adulto
            } else  {
                img.setAttribute('src', 'arquivos/mulher-velha.png')
                //idoso
            }
        }
        res.innerHTML = `E ${genero} com ${idade} anos de idade!`
        //res.appendChild(img)
    }
}