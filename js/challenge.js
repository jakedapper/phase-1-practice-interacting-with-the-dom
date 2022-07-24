document.addEventListener('DOMContentLoaded', () => {

const numberCounts = []
const counter = document.getElementById('counter')
let counterValue = parseInt(counter.textContent)
console.log(counterValue)
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
console.log(plus)
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')

function increment(number){
    return number + 1
}

function decrement(number){
    return number - 1
}

function setCounter(value){
    counter.textContent = value;
}

const autoCounter = setInterval (() => 
    {counterValue = increment(counterValue)
       setCounter(counterValue);
    },1000)
autoCounter

let myInterval = -1

pause.addEventListener('click', (e) => {
    if(pause.textContent === ' pause '){
        clearInterval(autoCounter)
        pause.textContent = "resume"
        plus.setAttribute('disabled', true)
        minus.setAttribute('disabled', true)
        heart.setAttribute('disabled', true)
    }else {
        autoCounter
        pause.textContent = ' pause '
        plus.setAttribute('disbaled', false)     
    }
})



// pause.addEventListener('click', (e)=> {
//     if (pause.textContent = 'resume'){setInterval (() => 
//     {counterValue = increment(counterValue)
//        setCounter(counterValue);
//     },1000)}
// })

plus.addEventListener('click', (e)=>{
   counterValue = increment(counterValue)
   //Console.log(counterValue)
   setCounter(counterValue);
})

minus.addEventListener('click', (e)=>{
   if (counterValue > 0){
    counterValue = decrement(counterValue)
    setCounter(counterValue)
   }
})


//leave comments
const commentForm = document.getElementById('comment-form')
const commentBox = document.getElementById('commentss')
//const comment = document.createElement('p')
const commentList = document.getElementById('list')


function createComment(words){
    const comment = document.createElement('p')
    comment.textContent = words
    commentList.append(comment)

    // console.log(commentBox)
}
commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createComment(e.target.commentss.value)
    //commentBox.reset()
})


heart.addEventListener('click', () => {
    heartLogger(counter.textContent)
})

function heartLogger(number){
    const likess = document.createElement('li')
    const likesList = document.querySelector('.likes')
    //console.log(likesList)
    likess.textContent = number 
    likesList.append(likess)
    numberCounts.push(likess.textContent)
    console.log(numberCounts)
    countElements(likesList, likess.textContent)
    console.log(likess.textContent)
    console.log(likesList)

}


function countElements(array, a){
    let counter = 0
    for(i=0; i < array.length; i++){
      if (a === array[i]){
        counter++
      }
    }
    return counter
  }


})

