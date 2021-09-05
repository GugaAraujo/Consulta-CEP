let cep = document.querySelector('#cep')
let estado = document.querySelector('#estado')
let cidade = document.querySelector('#cidade')
let bairro = document.querySelector('#bairro')
let endereco = document.querySelector('#endereco')


cep.addEventListener("focusout",() => {
    fetch(`https://viacep.com.br/ws/${cep.value}/json`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        estado.value = data.uf
        cidade.value = data.localidade
        bairro.value = data.bairro
        endereco.value = data.logradouro
    })
    .catch(function(erro) {
        console.log(erro)
    })
})
