const searchBox = document.getElementById("search-user")

searchBox.addEventListener("keyup", async evt => {
    let id = searchBox.value
    let datos = await requestData(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-15&sortBy=publishedAt&apiKey=0fcf4a03858f485eb1ce42351744d64c`)
  //  let fullName = datos.first_name + " " + datos.last_name
    let title = datos[0].title

    renderUserInfo({
        fullName: title
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
    const data = json.articles
    return data
}
