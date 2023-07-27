function carregar(){
var msg = document.getElementById('msg')
var foto = document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.` 
if(hora >= 6 && hora < 12){
    console.log('Bom Dia!')
    foto.src = 'imagemManha.jpg'
    document.body.style.background = '#b18064'
}else if(hora >= 12 && hora <= 18){
    console.log('Boa Tarde!')
    foto.src = 'imagemTarde.jpg'
    document.body.style.background = '#eb5d26'
}else{
    console.log('Boa Noite!')
    foto.src = 'imagemNoite.jpg'
    document.body.style.background = '#a777ff'
}
}