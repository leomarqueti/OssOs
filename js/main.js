class Ossos {
    constructor(nome, url) {
      this.nome = nome;
      this.url = url;
    }
}



//const  = new Ossos("","imagem/cranio/")
const ulna = new Ossos("ulna","imagem/Ulna-3081-500x500.png")
const radio = new Ossos("radio","imagem/radio.png")
const tibia = new Ossos("tibia","imagem/tibia.png")
const femor = new Ossos("femor","imagem/Femur.png")
const cervical = new Ossos("cervical","imagem/cranio/cervical.jpg")
const esfenoide = new Ossos("esfenoide","imagem/cranio/esfenoide.jpg")
const etmoide = new Ossos("etmoide","imagem/cranio/etmoide.jpg")
const hioide = new Ossos("hioide","imagem/cranio/hioide.jpg")
const lacrimal = new Ossos("lacrimal","imagem/cranio/lacrimal.jpg")
const lombares = new Ossos("lombares","imagem/cranio/lombares.jpg")
const colunaVertebral = new Ossos("coluna vertebral","imagem/coluna-vertebral.png")
const costelas = new Ossos("costelas","imagem/costelas.png")
const escapula = new Ossos("escapula","imagem/escapula.png")
const humerus = new Ossos("humerus","imagem/Humerus.png")
const pe = new Ossos("pe","imagem/pe.png")
const sacro = new Ossos("sacro","imagem/sacro.png")


imagens = [ulna,radio,tibia,femor,cervical,esfenoide,etmoide,hioide,lacrimal,lombares,colunaVertebral,costelas,escapula,humerus,pe,sacro]


let tagPontos = document.querySelector(".pontos")

let pontos = 0
let nomeDoOsso



function proximo(){
    let respostaCerta = document.querySelector(".acertou")
    let botaoVerificar = document.querySelector(".perguntas")
    let botaoProximo = document.querySelector(".errou")
    
    let tagImagem = document.querySelector(".ossos")

    let numeroAleatorio = Math.floor(Math.random() * (imagens.length - 0 + 1) + 0)

    tagImagem.src = imagens[numeroAleatorio].url
    nomeDoOsso = imagens[numeroAleatorio].nome

    botaoProximo.style.display = "none"
    respostaCerta.style.display = "none"
    botaoVerificar.style.display = "block"
}


function teste(){
    let respostaCerta = document.querySelector(".acertou")
    let respostaDeErro = document.querySelector(".resposta-com-erro")
    let botaoVerificar = document.querySelector(".perguntas")
    let botaoProximo = document.querySelector(".errou")
    let input = document.querySelector(".resposta-usuario")
    let valorInput = input.value

    if (valorInput == nomeDoOsso){
        respostaCerta.style.display = "block"
        pontos++
        tagPontos.innerHTML = pontos

    } else {
        botaoProximo.style.display = "block"
        botaoVerificar.style.display = "none"
        respostaDeErro.innerHTML = nomeDoOsso
        pontos = 0
        tagPontos.innerHTML = pontos
    }
}