const main = document.getElementById('card')
const detail = document.getElementById('details')
const searchButton = () => {
    main.textContent = ''
    detail.textContent = ''
    const inputValue = parseInt(document.getElementById('input').value)
    const error = document.getElementById('error')
    error.innerText = ''
    //error.style.display = 'none'
    if (isNaN(inputValue) || inputValue == '') {
        error.innerText = 'please give a number....'
    }
    else if (inputValue < 0) {
        error.innerText = 'please give positive value.......'
    }
    else if (inputValue > 52) {
        error.innerText = 'please give value within 52.....'
    }
    else {
        const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayCards(data.cards))
    }
}

const displayCards = (cardsData) => {
    main.textContent = ''
    detail.textContent = ''
    for (const card of cardsData) {
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${card.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3>${card.code}</h3>
                <h5 class="card-title">${card.value}</h5>
                <p class="card-text">${card.suit}</p>
                <button onclick="showDetails('${card.image}')"  class="btn btn-primary">Detail info</button>
            </div>
        </div>
        `
        main.appendChild(div)
    }

}
detail.textContent = ''
const showDetails = (images) => {
    console.log(images)
    const detail = document.getElementById('details')
    const div = document.createElement('div')
    div.innerHTML = `
    <img src = "${images}"/>
    `
    detail.appendChild(div)
}