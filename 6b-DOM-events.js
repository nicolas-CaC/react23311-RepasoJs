const boton = document.querySelector('#boton')
const boton2 = document.getElementById('boton2')
const botonId = document.getElementById('divB')

function click() {

    const node = document.getSelection()
    // console.log(node)

    const start = node.anchorOffset
    const end = node.extentOffset

    const selection = node.baseNode.data
    console.log('Seleccion:', selection.substring(start, end))
}

boton.addEventListener('click', click)

const over = () => console.log('estas encima del boton')

// boton.onmouseover = () => console.log('encima')
// boton.onmouseleave = () => console.log('afuera')

// botonId.addEventListener('mouseover', over)

// ==============================================

let myPosition;

const position = (geolocation) => {
    // console.log(geolocation)
    const { longitude, latitude } = geolocation.coords
    myPosition = [longitude, latitude]
}


const so = () => {

    const so = window.navigator
    // console.log('SO', so)

    const {
        geolocation,
        hardwareConcurrency: concurrency,
        hid,
        serial,
        userAgentData,
        language,
        languages,
        windowControlsOverlay,
        mediaDevices,
        bluetooth
    } = so

    // Geolocación
    geolocation.getCurrentPosition(position)
    // array de longitud y latitud
    myPosition && console.log({ myPosition })

    // Hilos
    console.log({ concurrency })

    // Dispositivos de interfaz humana ej: mouses, pantallas táctiles
    hid.getDevices()
        .then(devices => console.log({ devices }))
        .catch(err => console.log(err))

    // Puertos en Serie
    serial.requestPort()
        .then(port => {
            port.open({ baudRate: 9600 })
            console.log({ port })
        })
        .catch(err => console.log('No se permitió conexión'))

    // Lenguajes del usuario, usualmente el del navegador
    console.log({ language })

    // Lenguajes preferidos del usuario
    console.log({ languages })

    // Datos del navegador
    console.log({ userAgentData })

    // Controles del titlebar, sirven para Desktop Apps
    console.log(windowControlsOverlay.getTitlebarAreaRect())

    mediaDevices.enumerateDevices()
        .then(devices => devices.forEach(console.log))

    // bluetooth
    bluetooth.requestDevice({ acceptAllDevices: true })
        .then(device => console.log({ device }))
        .catch(err => console.log('Bluetooth error:', err))
}

boton2.addEventListener('click', so)

// ==============================================

const audioBtn = document.getElementById('audio')
const videoBtn = document.getElementById('video')
const confBtn = document.getElementById('conf')

const media = (video, audio) => {
    navigator.mediaDevices.getUserMedia({ video: video, audio: audio })
        .then(stream => {
            window.localStream = stream
            window[`local${video ? 'Video' : 'Audio'}`].srcObject = stream
            window[`local${video ? 'Video' : 'Audio'}`].autoplay = true
        })
        .catch(err => console.log('Hubo un error:', err))
}

audioBtn.addEventListener('click', () => media(false, true))
videoBtn.addEventListener('click', () => media(true, false))
confBtn.addEventListener('click', () => media(true, true))









// ==============================================
// ==============================================
// ==============================================
// ==============================================
// ==============================================

