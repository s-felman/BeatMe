import React from 'react';

export default function updateAPI( user){
    return(
      fetch(`http://localhost:3000/users/update?users=${user}`,  { method: "PUT" })
        .then((res) => {res.json(); console.log(res)})
        .then((data) => console.log(data))
        .catch((err) => {
            console.log("error", err);
        })
    );
  }