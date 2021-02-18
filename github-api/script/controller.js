class Controller {
    achaUsuario(usuario) {
        let model = new Model 
        model.procuraUsuario(usuario)

        let view = new View
        view.mostraUsuario(model)
    }

    achaRepo(usuario) {
        let model = new Model
        model.procuraRepositorios(usuario);

        let view = new View
        view.mostraRepositorios(model)
    }
}