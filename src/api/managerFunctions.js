
export default function addParticipantAPI(comptitonName,userName, email) {

    return(

      fetch(`http://localhost:3000/addParticipant?comptitonName=${comptitonName}username=${userName}&email=${email}`)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => {
            console.log("error", err);
        })

     );


}