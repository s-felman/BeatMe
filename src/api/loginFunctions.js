import React from 'react';

// export default function loginAPI(userName, email, password) {

//   return(

//     fetch(`http://localhost:3000/login?userName=${userName}&email=${email}&password=${password}`)
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => {
//           console.log("error", err);
//       })

//   );

// }

export default function signUpAPI( firstName, lastName, userName, phone, email, password, getEmail ){
  return(
    fetch(`http://localhost:3000/signup?firstName=${firstName}&lastName=${lastName}&userName=${userName}&phone=${phone}&email=${email}&password=${password}&getEmail=${getEmail}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
          console.log("error", err);
      })
  );
}