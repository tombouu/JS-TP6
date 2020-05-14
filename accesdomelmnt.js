function main(){
    let trait ="################################";
    let title = document.title;
    let link = document.getElementsByClassName("liens")[5];
    console.log(trait);
    console.log("Titre de la page : " + title);
    console.log("Type du contenu de la page : " );
    console.log("La troisième ande annonce est : " + link[4]);
    console.log(trait);
    console.log("Le titre de GONE GIRL est de type : " + document.getElementsByClassName("film-titre"));
}
main();