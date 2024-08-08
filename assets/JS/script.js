
/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByname
por Classe: getElementsByClassName()
por Seletor: querySelector() (Queridinho paracessar o Dom)
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mapa = document.querySelector("#mapa")
let nomeOk = false
let emailOk = false
let assuntoOk = false


nome.style.width = "50%"
email.style.width = "50%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}


function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1) {
        txtEmail.innerHTML = "e-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "e-mail inválido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Seu texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true

    }
}

function enviar() {

    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar...")
    }

}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "500px"

}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}