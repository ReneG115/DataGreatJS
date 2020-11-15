const searchBox = document.getElementById("search-user")

searchBox.addEventListener("keyup", async evt => {
    let id = searchBox.value
    let datos = await requestData(`https://reqres.in/api/users/${id}`)
    let fullName = datos.first_name + " " + datos.last_name

    renderUserInfo({
        fullName: fullName
    })
})

const user = {
    fullName: document.getElementById("user-fullname"),
    renderName: function (newName) {
        this.fullName.innerText = newName
    }
}

const renderUserInfo = userData => {
    user.renderName(userData.fullName)
}

const isAvaible = res => res.status == 200 ? res.json() : new Error("Failed to connect to API")

const requestData = async apiURL => {
    const response = await fetch(apiURL)
    const json = await isAvaible(response)
    const data = json.data
    return data
}
