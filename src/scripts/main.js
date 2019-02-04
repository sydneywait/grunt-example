// Some starter code
document.querySelector(".person__save").addEventListener("click", event => {
    const namer = document.querySelector("#name__creator").value
    const ager = document.querySelector("#age__creator").value
    const colorer = document.querySelector("#color__creator").value

    // Once you have collected all the values, build your data structure
    const personToSave = {
        "name": namer,
        "age": ager,
        "favoriteColor": colorer
    }

    fetch("http://localhost:8088/people", {

    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(personToSave)
})
window.alert("preference saved")
})

