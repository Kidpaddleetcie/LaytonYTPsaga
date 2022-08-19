let struct = " ";


for (let ii = 0; ii < persos.length; ii++) {
    per = persos[ii];
    struct += '<section class="card m-3" style="width:450px"  id="' + per.id + '">';
    struct += '<img class="card-img-top" alt="' + per.nom + '" src="' + per.img + '">';
    struct += '<article class="card-body"><h4 class="card-title">' + per.nom + '</h4><p class="card-text"><ul class="d-flex list-group">';
    struct += '<li class="list-group-item disabled">A pour voix :</li><li class="list-group-item"><a href="' + per.voix_lien + '">' + per.voix + '</a></li>';
    struct += '<li class="list-group-item disabled">A pour métier :</li><li class="list-group-item">' + per.metier + '</li>';
    struct += '<li class="list-group-item disabled">Licence d\'origine :</li><li class="list-group-item">' + per.licence + '</li>';
    struct += '</ul></p></article></section>';
}

document.getElementById("generate").innerHTML = struct;