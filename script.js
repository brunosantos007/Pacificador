let video = document.getElementById("video")
let controles = document.getElementById("controles")

function play(){
    video.play()
}
function stop(){
    video.currentTime = 0
}
function pause(){
    video.pause()
}
function diminuir_vel(){
    video.playbackRate -= 0.3
}
function aumentar_vel(){
    video.playbackRate += 0.3
}
function fullScren(){
    video.requestFullscreen()
}
function porDentro(){
    controles.style.display = "block"
}
function porFora(){
    controles.style.display = "none"
}