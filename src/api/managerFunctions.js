
export default function addCompetitonAPI(competition) {

    return(
      fetch(`http://localhost:3000/competition/addCompetiton?competition=${competition}`, { method: "POST" })
        .then((res) => {res.json(); console.log(res)})
        .then((data) => console.log(data))
        .catch((err) => {
            console.log("error", err);
        })

     );


}