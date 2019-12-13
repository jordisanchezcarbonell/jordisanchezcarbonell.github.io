var score = 0
const scoreContainer = document.querySelector('#score')
console.log(scoreContainer.data);

function updateScore(){

    if(score>=0){
        scoreContainer.innerHTML = score
    }else{
        score=0;
        scoreContainer.innerHTML = score
    }
};
