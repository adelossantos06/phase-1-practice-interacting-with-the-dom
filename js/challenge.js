const timerText = document.querySelector('#counter')
const pauseBtn = document.querySelector('#pause')
const increment = document.querySelector('#plus')
const decrement = document.querySelector("#minus")
const like = document.querySelector('#heart')
const likesList = document.querySelector('.likes')
const commentsList = document.querySelector('#list')
const submitBtn = document.querySelector("#submit")
const commentTextInput = document.querySelector('#comment-input')
const li = document.createElement('li')
const p = document.createElement('p')



let count = 0;




//starts timer once page is refreshed
addEventListener('DOMContentLoaded', (e) =>{
    intId = setInterval(function (){
        count += 1
        timerText.textContent = count
    }, 1000);
})


//changes pause btn text to resume
function pauseToResume(){
     pauseBtn.textContent = "resume"
 }

 //changes pause btn text from resume back to pause 
 function resumeToPause(){
    pauseBtn.textContent = "pause"
 }

 //pauses counter from original started counter
 //then changes the text on the pause btn to "resume"
  let paused = pauseBtn.addEventListener("click", function(){
     clearInterval(intId);
        pauseToResume()
})

const liked = like.addEventListener("click", function(){
   likesList.appendChild(li).textContent = `${timerText.textContent} has been liked`
   
})

//Leaves a comment in the comment section
submitBtn.addEventListener("click", function(e){
    e.preventDefault()
    let comment = document.createElement('p')
    comment.textContent = `${commentTextInput.value}`
    commentsList.append(comment)
})


// Manually increment the counter using the plus button.
increment.addEventListener("click", function(){
    timerText.textContent ++
})

// Manually  decrement the counter using minus button.
decrement.addEventListener("click", function(){
    timerText.textContent --
})


//function to disable the plus, minus and heart buttons
function disable(){
    document.querySelector('#minus').disabled = true;
    document.querySelector('#plus').disabled = true;
    document.querySelector('#heart').disabled = true;
}

//function to enable the plus, minus and heart buttons
function enable(){
    document.querySelector('#minus').disabled = false;
    document.querySelector('#plus').disabled = false;
    document.querySelector('#heart').disabled = false;
}






//if "resume" button is clicked the counter resumes 
const ifPaused = pauseBtn.addEventListener("click", function(){
   
    if(paused)
    {

       let id = setInterval(function(){
            timerText.textContent ++
        }, 1000)

            

        //the "resume" button text is changed to "pause"
        resumeToPause()

        //pauses the resumed counter
        pauseBtn.addEventListener("click", function(button){
            clearInterval(id)
        })
             
       
    }
    //disables the plus, minus, and heart button if paused 
     disable() 
    

    // makes the opposite true and lets you keep pausing and resuming the counter
     paused = !paused
    
})

//enables the minus, plus, and heart button if resumed
const ifResumed = pauseBtn.addEventListener("click", function(){
    if (!paused){
        enable()
    }
})