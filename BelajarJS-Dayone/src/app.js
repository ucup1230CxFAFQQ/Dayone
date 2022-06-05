document.addEventListener('DOMContentLoaded', () =>{
    const cardArray = [
        {
            name: 'blank',
            img: 'images/blank.png'
        },
        {
            name: 'cheeseburgers',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'white',
            img: 'images/white.png'
        },
        
    ]
})

const grid = document.querySelector('grid') 

//membuat sebuah fungsi untuk tampilan board
function createBoard(){
    for(let i = 0; i< cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/ukraina.png')
        card.setAttribute('data-id', i)
        //agar bisa di klik
        grid.appendChild(card)
    }
}

createBoard()