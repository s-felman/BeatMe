import React from 'react';

export default function loginAPI(userName,  password) {


  return(



    fetch(`http://localhost:3000/users/login?userName=${userName}&password=${password}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data",data); 
        return data[0]})
      .catch((err) => {
          console.log("error", err);
      })

  );

}

