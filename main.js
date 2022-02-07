const promise01 = fetch("https://jsonplaceholder.typicode.com/users")

promise01.then((response)=> { //la methode .then renvois la donnée dans l'argument  en call back response qui renvoie les données dans le console log 
    console.log(response);

    const usersData = response.json();//je prend mes données au format json pour les mettrent dans usersData
    console.log(usersData);

usersData.then((utilisateur)=> {
    console.log(utilisateur[1].address.geo["lat"]);
});
})
.catch((err)=> console.log(err));//la methode .catch il renvois l'erreur s'il y a une erreur l'argument en call back dans le log s'il y a une erreur