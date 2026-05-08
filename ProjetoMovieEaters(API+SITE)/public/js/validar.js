function conferir() {

    var papel = sessionStorage.getItem("PAPEL");
    if (papel == "diretor") {
        window.location = "./filme_diretor.html";
    } else {
        window.location = "./filme_watcher.html"
    }
}

function sair() {
    sessionStorage.clear();
    window.location = "../login.html";
}

function salvar() {

    


}