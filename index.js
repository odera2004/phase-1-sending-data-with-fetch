// Add your code here

// function submitData(name, email) { 
//     let name = "eugene"
//     let Email = "eugeneodera59@gmail.com"
// }
// console.log(submitData(name, email));

// fetch("http://localhost:3000/users", configurationObject);
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//       },
//       body: JSON.stringify({
//         userName: "eugene",
//         userEmail:"eugeneodera59@gmail.com",
//       })
      
//   };

function submitData(name, email) {
return fetch("http://localhost:3000/users",{
    method: 'POST',
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    },
    body: JSON.stringify({
        name, 
        email
    })
    
})

  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    document.body.innerHTML = object[ "id" ]
  })
   .catch(function (error){
    document.body.innerHTML = error.message
   })
  
}