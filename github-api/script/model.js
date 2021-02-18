
class Model {
    constructor(){
        this._nome = ''
        this._nomeUsuario = ''
        this._perfil = ''
        this._repositorios = ''
    }

    atualiza(dados) {
        this._nome = dados.name;
        this._nomeUsuario = dados.login;
        this._perfil = dados.avatar_url; 
    }

    erro(status){
        let container = document.querySelector("#container");
        container.innerHTML += `<h1>Houve um erro na sua pesquisa</h1>
                                <h2>codigo de erro: ${status}</h2>`
    }
   //requisição para buscar nome, loguin e avatar
    procuraUsuario(usuario){
        let reqUsuario = new XMLHttpRequest()

        reqUsuario.addEventListener('load', () => {
            if(reqUsuario.status == 200){
                let dados = JSON.parse(reqUsuario.responseText);    
                this.atualiza(dados);
            }
            else{
                this.erro(reqUsuario.status);
            }
        })
        reqUsuario.open('GET', `https://api.github.com/users/${usuario}`, false);
        reqUsuario.send();
    }
    // requisiçao para os repositorios
    procuraRepositorios(usuario){
        let reqRepositorios = new XMLHttpRequest()

        reqRepositorios.addEventListener('load', () => {
            if(reqRepositorios.status == 200){
                let dadosRepo = JSON.parse(reqRepositorios.responseText);
                this._repositorios = dadosRepo;           
            }
            else {
                let container = document.querySelector("#container");
                container.innerHTML += `<h1>Houve um erro na busca por repositorio</h1>
                                <h2>codigo de erro: ${reqRepositorios.status}</h2>`
            }
        })
        reqRepositorios.open('GET', `https://api.github.com/users/${usuario}/repos`, false) 
        reqRepositorios.send();
    }   
    retornaNome(){
        return this._nome
    }

    retornaNomeUsuario() {
        return this._nomeUsuario
    }

    retornaFotoPerfil() {
        return this._perfil
    }
}