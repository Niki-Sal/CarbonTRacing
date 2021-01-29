//global variables
//defining an array of tasks including: task name + an object of task-complete that include activities
// cause the task to be done + an object of task-related for environmentally friendly but not require activities
let tasks = [
    {taskName: "going to work", 
    taskComplete: {
        "walking": "going to work",
        "car": "going to work",
        "bicycle":"going to work",
        "public transportation": "going to work"},
    taskRelated: {
        "speed down car": "going to work",
        "speed up car": "going to work",
    }
    },
    {taskName: "take a trip", 
    taskComplete:{
        "airplane": "take a trip",
        "train": "take a trip"},
    taskRelated: {

    }
    },
    {taskName: "Reading news", 
    taskComplete:{
        "newspaper": "Reading news"
    },
    taskRelated: {
        "recycling paper": "Reading news"
    }
    },
    {taskName: "Watching TV", 
    taskComplete: {
        "tv":"Watching TV"},
    taskRelated: {
        "unplug unused electrical devices":"Watching TV"
    }
    },
    {taskName: "doing Laundry", 
    taskComplete:{
        "washing machine": "doing Laundry"
    },
    taskRelated: {
        "dryer": "doing Laundry",
        "air drying cloth": "doing Laundry",
    }
    },
    {taskName: "cooking", 
    taskComplete: {
        "stove": "cooking"
    },
    taskRelated:{
        "animal based products": "cooking",
        "plant based products": "cooking"
    }
    },
    {taskName: "coffee with a friend", 
    taskComplete: {
        "coffee": "coffee with a friend"
    },
    taskRelated: {
        "bring reusable mug": "coffee with a friend",
    }
    },
]
//defining all activities scores
let activities = [
    {name: "walking", score: 50},
    {name: "car", score: -100},
    {name: "bicycle", score: 50},
    {name: "public transportation", score: 40},
    {name: "airplane", score: -200},
    {name: "train", score: -100},
    {name: "newspaper", score: -20 },
    {name: "tv", score: -20 },
    {name: "washing machine", score: -20 },
    {name: "stove", score:-20},
    {name: "coffee", score: -20 },
    {name: "speed down car", score: 50},
    {name: "speed up car", score: -50},
    {name: "recycling paper", score: 50},
    {name: "unplug unused electrical devices", score: 50},
    {name: "air drying cloth", score: 50},
    {name: "dryer", score: -50 },
    {name: "plant based products", score: 50 },
    {name: "animal based products", score: -50 },
    {name: "bring reusable mug", score: 50}
]
// all other variables
let todayActivity = []
let toDoList=[]
let level = 1
let myActivity=[]
let myScore =[]
let score = 0
let activityNeeded =[]
let acts={}
let totalScore = 1000
let restartNum = 0

//DOM elements
let toDoListMenu = document.getElementById("random-tasks")
let scoreContainer = document.getElementById("scoreNum-container")
let todayScore =document.getElementById("today-score")
let activitySubmitButton = document.getElementById("activity-submit")
let body = document.querySelector("body")
let activityItem = document.getElementsByClassName("activity-item")
let todayList = document.getElementById ("day-activities")
let scoreNumber = document.createElement("p")
let totalScoreDisplay = document.getElementById("total-score")
let userDisplay = document.getElementById("user")
let nextButton = document.getElementById("next")
let footPrintSection = document.getElementById ("foot-print")
let endDay = document. getElementById ("end-day")
let startButton = document.getElementById ("start")
let timer = document.getElementById ("timer")

let numbersArray;
let item;
let activityScore;
let item1 = document.createElement("li")


//user name

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let name = document.querySelector("input[type='text']").value
    userDisplay.innerText = `Hi ${name}!`
    document.querySelector("input[type='text']").value = ""
})

///How game start + game timing and background change

const game = {
    time: 24,
    start(){
        console.log(this.time)
        const gameTimer = setInterval(() => {
            console.log (this.time)
            timer.innerText = `${this.time}`
            
            if ( this.time <= 0){
                
                clearInterval (gameTimer)
                this.end()
            }else if (this.time === 24){
                
                changeToDay()
            } else if (this.time === 18){
                
                changeToNoon()
            } else if (this.time === 12){
                
                changeToSunset()
            } else if (this.time === 6){
                
                changeToNight ()
            } 
            this.time= this.time -1
            
        }, 1000)

    },
    end() {
        
        console.log("gameover")
        endDay. innerText= "Day ended! Get some sleep💤"
        document.getElementById("activity-submit").disabled = true 
        restartDay()

    }
}

// Background change functions
const changeToNoon = function(){
    body.classList.remove("day")
    body.classList.add("noon")
}
const changeToSunset = function(){
    body.classList.remove("noon")
    body.classList.add("sunset")
}
const changeToNight = function(){
    body.classList.remove("sunset")
    body.classList.add("night")
}

const changeToDay = function(){
    body.classList.remove("night")
    body.classList.add ("day")
}

//create random number without repeatition
function getRandomNumber (min, max) {
    let step1 = max - min + 1
    let step2 = Math.random() * step1
    let result = Math.floor(step2) +min
    return result
}
function createNumberArray (a,b){
    let myArray = []

    for(let i=a; i<=b; i++){
        myArray.push(i)
    }
    return myArray
}

//other eventListener & functions 

//start game and game timer

startButton.addEventListener ("click",() => {
    game.start()
    numbersArray = createNumberArray (0,6)
})

//counting the score of the day and create next task in to dolist
activitySubmitButton.addEventListener("click", function(){
    // score of day calculation
    score = parseInt(myScore[0])
    for (let n=1; n<myScore.length; n++){
        score= score + myScore[n]
        console.log(score)
    }
    scoreNumber.innerText = score
    todayScore.append(scoreNumber)
    //create next task
    createTaskList()
     
})






//create to-do list task
const createTaskList = function (){ 
    //generate non repetitive random number
    if (numbersArray.length ==0){
        console.log ("no more task!")
    }
    let randomIndex = getRandomNumber (0 , numbersArray.length-1)
    let Num = numbersArray[randomIndex]
    numbersArray.splice(randomIndex,1)

    //generate a list of the task (one current task) on hand
    
    toDoList=[tasks[Num].taskName]
    
    console.log(toDoList)
    //generate an object containing all activities neede to complete the current task  
    for (let n=0; n<tasks.length; n++){
        if (tasks[n].taskName === toDoList[0]){
            acts = tasks[n].taskComplete
        }   
    }

    for (let n=0; n<tasks.length; n++){
        if (tasks[n].taskName === toDoList[0]){
            actsRel = tasks[n].taskRelated
        }   
    }

       
    console.log(acts)
    // create the list of all task done on the day   
    item = document.createElement("li")
    item.innerText=`${toDoList[0]}`
    item.classList.add("undone")
    //append the list to document
    toDoListMenu.appendChild(item)
        
    //choosing related activities to task and append to today activity log
    for (let i=0; i<activityItem.length; i++){
        
        activityItem[i].addEventListener("click", choosingActivity)
        
    }
}

//The process of choosing an activity on left side, appending it to middle column
//+appending the activity's associated score to middle column
const choosingActivity = function (e){
    let dailyActivity = document.createElement ("li")
    dailyActivity.innerText = e.target.innerText
    todayList.appendChild(dailyActivity)
    e.target.classList.add ("chosen")
    for (let j=0; j<activities.length; j++){
        if (activities[j].name === dailyActivity.innerText.toLowerCase()){
            activityScore = document.createElement ("p")
            activityScore.innerText = activities[j].score
            scoreContainer.appendChild(activityScore)
            activityScore.classList.add("score")
            
            myScore.push(activities[j].score)
            myActivity.push(activities[j].name)

        }
        e.target.removeEventListener("click", choosingActivity)
        e.target.classList.remove("chosen")
    }
    //the process of checking each task as done if the right activities are chosen
    console.log(myScore)
    let myActivityStr = myActivity.toString()
    console.log (myActivityStr)
    if(acts[myActivityStr] !== undefined){
        console.log("Hurrayyyyyyyy") 
        item.classList.remove("undone")
        item.classList.add("done") 
        myActivity = []
    } else if (actsRel[myActivityStr] !== undefined){
        console.log("Hurrayyyyyyyy2") 
        myActivity = [] 
    } else {
        console.log ("wrong choice!") 
        myActivity = [] 
       
    }    
}




// refresh the whole game (new day) + showing the previous day score and footprint above page

const restartDay =function (){
    nextButton.addEventListener("click",function(){
        //add scoreNumber to total score
        let totalScore= parseInt(totalScoreDisplay.innerText.slice(21))
        let scoreNumberInt = parseInt(scoreNumber.innerText)
        console.log (scoreNumberInt)
        //total score in real interger
        totalScore = totalScore + scoreNumberInt
        console.log (totalScore)
        //trying to implement the interger in string shown up in page
        let totalSoreArray = totalScoreDisplay.innerText.split (" ")
        totalSoreArray[4]= totalScore.toString()
        console.log(totalSoreArray)
        let finalScore= totalSoreArray.join(" ")
        console.log(finalScore)
        totalScoreDisplay.innerText= finalScore
        // get the footprint to show up based on logic: each 100 less than 1000 cause showing one footprint
        let measurement = 1000 - totalScore
        let scale = Math.round(measurement/100)
        while (footPrintSection.hasChildNodes()) {  
            footPrintSection.removeChild(footPrintSection.firstChild);
        }
        for (let i=0; i<scale; i++){
            let footprint = document.createElement("i")
            footprint.setAttribute ("class","fas fa-shoe-prints")
            console.log(footprint)
            footPrintSection.appendChild(footprint)
        }
///winning and losing logic/////////////
        if (totalScore <= 500){
            console.log ("YOU LOST🙈")
            if (toDoListMenu.hasChildNodes()) {  
                toDoListMenu.removeChild(toDoListMenu.firstChild);
                toDoListMenu.innerText = "YOU LOST🙈"
                document.getElementById("next").disabled = true 
                document.getElementById("start").disabled = true 
                endDay. innerText = ""
            }

        } else if (restartNum>=2 && totalScore> 500){
            console.log ("YOU WON🥂")
            if (toDoListMenu.hasChildNodes()) {  
                toDoListMenu.removeChild(toDoListMenu.firstChild);
                toDoListMenu.innerText = "YOU WON🥂"
                endDay. innerText = ""
            }
        } else {
    
            endDay. innerText= ""
            console.log("resart")

            //clear to-do list
            while (toDoListMenu.hasChildNodes()) {  
                toDoListMenu.removeChild(toDoListMenu.firstChild);
            }
            //clear daylog
        
            while (scoreContainer.hasChildNodes()) {  
                scoreContainer.removeChild(scoreContainer.firstChild);
            } 
            while (todayList.hasChildNodes()) {  
                todayList.removeChild(todayList.firstChild);
            }  
            //refresh the whole page for new day
            document.getElementById("activity-submit").disabled = false
            game["time"] = 24

        } 
        
        myScore =[]
        score =0 
        scoreNumber.innerText = score
        restartNum = restartNum+1
    
    })
}



    

    

    
    
    
    