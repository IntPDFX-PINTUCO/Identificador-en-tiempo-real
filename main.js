lista = []
encendido = false
function setup() {
    canvas = createCanvas(640, 480)
    background("blue")
    ia = ml5.objectDetector("cocossd", ia_cargada)
    video = createCapture(VIDEO)
    video.hide()
}
function draw() {
    image(video, 0, 0, width, height)
    if(encendido){
        ia.detect(video, resultado)
        if(lista.length>0){
            textSize(17)
            lista.forEach(element => {
                noFill()
                stroke("#0099f9")
                strokeWeight(5)
                rect(element.x, element.y, element.width, element.height)
                            strokeWeight(3)
                    fill("black")
                    text(element.label, element.x, element.y)
            });
        }
    }
    }
function resultado(error, respuesta) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(respuesta)
        lista = respuesta
    }
}
function ia_cargada() {
    console.log("Ia cargada");
    document.getElementById("detectar").disabled = false
}
function detectar() {
    encendido = true
}