const loadDogs = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => diplayDogs(data))
}
const diplayDogs = (doglists) => {
    //console.log(doglists)
    const main = document.getElementById('main')
    const first10Dogs = doglists.slice(0, 10)
    for (const dog of first10Dogs) {
        const div = document.createElement('div')
        div.className = "col-lg-4"
        //div.classList.add("col-lg-4")
        div.innerHTML = `
            <h4> ${dog.name}</h4>
            <img class ="w-50" src = "${dog.image.url}" />
        `
        main.appendChild(div)
    }
}