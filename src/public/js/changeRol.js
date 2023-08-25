const select = document.getElementById("rol-select");

const changeRol = async (uid) => {
    const value = select.value;
    console.log(value);
    let valid = true;
    if(value === "premium"){
        const resp = await fetch(`http://backend-16d8.onrender.com/api/usuarios/${uid}/validateDocuments`, {
            method: "GET"
        })
        let respJson = await resp.json();
        console.log(respJson);
        valid = respJson;
    }
    if(valid){
        const resp = await fetch(`http://backend-16d8.onrender.com/api/usuarios/update/${uid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                role: value
            })
        })
        console.log(resp);
        location.href = `http://backend-16d8.onrender.com/session/logout`;
    } else {
        let h3Warning = document.getElementById("warningDocs");
        h3Warning.innerHTML = "You need to upload the documents first!!";
    }
}