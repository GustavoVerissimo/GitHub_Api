let botao = document.getElementById("buscar");
let controller = new Controller 

botao.addEventListener('click', () => {
    nomeUsuario = document.querySelector("#inputUsuario").value
    controller.achaUsuario(nomeUsuario);
    controller.achaRepo(nomeUsuario);
})