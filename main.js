console.log(1 == "1")
console.log(1 === "1")
function demandeprenom(){
    let prenom = prompt("votre prénom:")
    if(prenom < 5){
        console.log("prenom trop court")
    }
    else{
        console.log("tout est ok")
    }
}
function addition(){
    let x = Math.round(Math.random()*100)
    let y = Math.round(Math.random()*100)
    let rep = prompt("quel est la réponse: " + x + " + " + y + " =" )
    if(rep == x + y){
        alert("bien joué!")
    }
    else{
        alert("tu es nul!")
    }
}
function multi(){
    let x = Math.round(Math.random()*100)
    let y = Math.round(Math.random()*100)
    let rep = prompt("quel est la réponse: " + x + " * " + y + " =" )
    if(rep == x * y){
        alert("bien joué!")
    }
    else{
        alert("tu es nul!")
    }
}
function montab(){
    let montableau = []; 
    for(i=0;i<3;i++){
        let y = prompt("introduire un élément dans le tab: ")
        if(y != "" && montableau.length < 3){
            montableau[i] = y
        }
        else if(y == ""){
            i--;
        }
    }
    alert(montableau)
}