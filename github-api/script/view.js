class View {
    mostraUsuario(dados){
        let nome = document.querySelector("#nome");
        let nomeUsuario = document.querySelector("#nomeUsuario");
        let img = document.querySelector("#fotoPerfil");

        nome.textContent = dados.retornaNome();
        nomeUsuario.textContent = dados.retornaNomeUsuario();
        img.src = dados.retornaFotoPerfil();
    }

    mostraRepositorios(dados) {
        let repos = dados._repositorios;

        let section = document.querySelector("repo");
        if(section != null) {
            section.parentNode.removeChild(section);
        }
        
        let main = document.querySelector("main");
        let repositorios = document.createElement("section");
        repositorios.id = "repo"
        repositorios.className = "repositorios"
        main.appendChild(repositorios);

        for(let repositorio of repos) {
            let divRepo = document.createElement("div");
            divRepo.className = "div-repositorio";

            let repoName = `<p><strong>${repositorio.name}</strong></p>`
            divRepo.innerHTML += repoName

            if(!repositorio.description){
                repositorio.description = "não há descrição.."
            }
            let repoDescricao = `<p>${repositorio.description}</p>`
            divRepo.innerHTML += repoDescricao;

            if(!repositorio.language){
                repositorio.language = "Linguagem Não Identificada.."
            }
            let repoLinguagem = `<p>${repositorio.language}</p>`
            divRepo.innerHTML += repoLinguagem;

            let repoLink = `<a href="${repositorio.html_url}" target="_blank">link</a>`
            divRepo.innerHTML += repoLink;

            repositorios.appendChild(divRepo);
            
        }
    }

}