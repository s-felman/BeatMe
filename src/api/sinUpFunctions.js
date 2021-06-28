import React from 'react';

export default function signUpAPI( firstName, lastName, userName, phone, email, password, getEmail ){
    return(
      fetch(`http://localhost:3000/users/signup?firstName=${firstName}&lastName=${lastName}&userName=
      ${userName}&phone=${phone}&email=${email}&password=${password}&getEmail=${getEmail}`,  { method: "POST" })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => {
            console.log("error", err);
        })
    );
  }