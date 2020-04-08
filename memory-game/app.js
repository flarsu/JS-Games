document.addEventListener('DOMContentLoaded', ()=>{
    // card options
    var cardArray = [
        {
            name:'img1',
            img : './Images/img1.png'
        },
        {
            name:'img1',
            img : './Images/img1.png'
        },
        {
            name:'img2',
            img : './Images/img2.png'
        },
        {
            name:'img2',
            img : './Images/img2.png'
        },
        {
            name:'img3',
            img : './Images/img3.png'
        },
        {
            name:'img4',
            img : './Images/img4.png'
        },
        {
            name:'img4',
            img : './Images/img4.png'
        },
        {
            name:'img5',
            img : './Images/img5.png'
        },
        {
            name:'img5',
            img : './Images/img5.png'
        },
        {
            name:'img6',
            img : './Images/img6.png'
        },
        {
            name:'img6',
            img : './Images/img6.png'
        },
        {
            name:'img3',
            img : './Images/img3.png'
        }
    ]

    resultDisplay = document.querySelector('#result')
    function shuffle(arra1) {
        var ctr = arra1.length, temp, index;
    
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
    
            ctr--;

            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }
    cardArray = shuffle(cardArray)
    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardChosenId = []
    var cardsWon =[]
    //create your board
    function createBoard(){
        for(let i=0; i<cardArray.length; i++)
        {
            var card = document.createElement('img')
            card.setAttribute('src','./Images/front.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
        }
    }
    //Check for Matches
    function checkForMatch(){
        var cards=  document.querySelectorAll('img')
        const optionOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]
        if(cardsChosen[0] === cardsChosen[1])
        {
            
            cards[optionOneId].setAttribute('src', './Images/bg.png')
            cards[optionTwoId].setAttribute('src', './Images/bg.png')
            cardsWon.push(cardsChosen)
        }
        else{
            cards[optionOneId].setAttribute('src', './Images/front.png')
            cards[optionTwoId].setAttribute('src', './Images/front.png')            
            
        }
        cardChosenId = []
        cardsChosen = []
        resultDisplay.textContent = cardsWon.length*10
        if(cardsWon.length === cardArray.length/2)
        {
            alert('Congratulation you found ALL!!')
        }
    }
    // Flipcard Function
    function flipcard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }



    createBoard()








})