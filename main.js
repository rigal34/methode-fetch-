const promise01 = fetch("https://jsonplaceholder.typicode.com/users")

promise01.then((response)=> { //la methode .then renvois la donnée dans l'argument  en call back response qui renvoie les données dans le console log 
    console.log(response);

    const usersData = response.json();//je prend mes données au format json pour les mettrent dans usersData
    console.log(usersData);

usersData.then((utilisateur)=> {
    console.log(utilisateur[1].address.geo["lat"]);
});
})
.catch((err)=> console.log(err));//la methode .catch il renvois l'erreur s'il y a une erreur l'argument en call back dans le log s'il y a une erreurpr

//1er requête
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((bruno) => bruno.json())//CONVERTIT au format json pour aller dans mon body
.then((json) => console.log(json));//affiche Object { userId: 1, id: 1, title: "delectus aut autem", completed: false }
//FONCTION DE CALL BACK === .then((bruno) => bruno.json())
//fin de l'adresse de mon fetch j'ajoute ces terminaisons pour accéder à l'API : post,comments,albums,photos,todo,user.