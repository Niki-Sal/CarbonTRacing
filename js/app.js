////////global variables
//defining an array of objects for each task. including task name and an object of activities 
//that cause that task to be done.
let tasks = [
    {taskName: "going to work", 
    taskComplete: {
        "walking": "going to work",
        "car": "going to work",
        "bicycle":"going to work",
        "public transportation": "going to work"}
    },
    {taskName: "trip to lA", 
    taskComplete:{
        "airplane": "trip to lA",
        "train": "trip to lA"}
    },
    {taskName: "Reading news", 
    taskComplete:{
        "light bulb,newspaper": "Reading news",
        "newspaper,light bulb": "Reading news"}
    },
    {taskName: "Watching TV", 
    taskComplete: {
        "tv":"Watching TV"}
    },
    {taskName: "doing Laundry", 
    taskComplete:{
        "washing machine,dryer": "doing Laundry",
        "dryer,washing machine": "doing Laundry",
        "washing machine,air drying cloth": "doing Laundry",
        "air drying cloth,washing machine": "doing Laundry"}
    },
    {taskName: "cooking", 
    taskComplete: {
        "refrigerator,stove,animal based products": "cooking",
        "refrigerator,stove,plant based products": "cooking"}
    },
    {taskName: "coffee with a friend", 
    taskComplete: {
        "coffee,walking": "coffee with a friend",
        "walking,coffee": "coffee with a friend",
        "coffee,bicycle": "coffee with a friend",
        "bicycle,coffee": "coffee with a friend",
        "coffee,car": "coffee with a friend",
        "car,coffee": "coffee with a friend"}
    },
]
//defining all activities scores
let activities = [
    {name: "walking", score: 50},
    {name: "car", score: -100},
    {name: "bicycle", score: 20},
    {name: "public transportation", score: -20},
    {name: "airplane", score: -200},
    {name: "train", score: -150},
    {name:"light bulb", score: -20 },
    {name:"tv", score: -20 },
    {name:"washing machine", score: -30 },
    {name:"dryer", score: -30 },
    {name:"refrigerator", score: -20 },
    {name:"stove", score:-20},
    {name:"animal based products", score: -20 },
    {name:"plant based products", score: -5  },
    {name:"coffee", score: -10 },
    {name:"newspaper", score: -10 },
    {name:"recycling paper", score: 20},
    {name:"compost extra food", score: 20},
    {name:"speed down car", score: 20},
    {name:"air drying cloth", score: 20},
    {name:"unplug unused electrical devices", score: 20},
    {name:"use products with little packaging", score: 20}

]

let todayActivity = []
let toDoList=[]
let level = 1
let myActivity=[]
let myScore =[]
let score = 0
let activityNeeded =[]
let acts={}
let totalScore = 1000

///////create DOM elements
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

let item;
let item1 = document.createElement("li")

///how game start +game timing and background change
const game = {
    time: 24,
    start(){
        console.log(this.time)
        const gameTimer = setInterval(() => {

            if ( this.time == 0){
                clearInterval (gameTimer)
                this.end()
            } else if (this.time === 18){
                changeToNoon()
            } else if (this.time === 12){
                changeToSunset()
            } else if (this.time === 6){
                changeToNight ()
            } else if (this.time === 24){
                changeToDay()
            }
            this.time= this.time -1
        }, 1000)

    },
    end() {
        // alert ("gameover!!")
        console.log("gameover")
        //put a note somewhere
        //make next task unclickable
        activitySubmitButton.addEventListener("click", function(){
            endDay. innerText= "Day ended! Get some sleep💤"
            
        })
        restartDay()

    }
}

///////create functions & eventlisteners

//create random task in to-do list
const createRandomList = function (){ 
    //generate random number
    let Num = Math.floor(Math.random()* (tasks.length))

    //generate a list of the task (one current task) on hand
    toDoList=[tasks[Num].taskName]
    
    console.log(toDoList)
     //generate an object containing all activities neede to complete the current task  
    for (let n=0; n<tasks.length; n++){
        if (tasks[n].taskName === toDoList[0]){
            acts = tasks[n].taskComplete
        }   
    }                    
        
    console.log(acts)
    // create the list of all task done on the day   
    item = document.createElement("li")
    item.innerText=`${toDoList[0]}`
    item.classList.add("undone")
    //append the list to document
    toDoListMenu.appendChild(item)
    
       
    /////running clicki function below
    for (let i=0; i<activityItem.length; i++){
        
        activityItem[i].addEventListener("click", clicki)
        
    }
}

//The process of choosing an activity on left side, appending it to middle column
//appending the activity's associated score to middle column
const clicki = function (e){
    let dailyActivity = document.createElement ("li")
    dailyActivity.innerText = e.target.innerText
    todayList.appendChild(dailyActivity)
    e.target.classList.add ("chosen")
    for (let j=0; j<activities.length; j++){
        if (activities[j].name === dailyActivity.innerText.toLowerCase()){
            let activityScore = document.createElement ("p")
            activityScore.innerText = activities[j].score
            scoreContainer.appendChild(activityScore)
            activityScore.classList.add("score")
            
            myScore.push(activities[j].score)
            myActivity.push(activities[j].name)

        }
        e.target.removeEventListener("click", clicki)
        e.target.classList.remove("chosen")
    }
    // console.log(myActivity)
    //the process of cheching each task as done if the right activities are chosen
    console.log(myScore)
    let myActivityStr = myActivity.toString()
    if(acts[myActivityStr] !== undefined){
        
        console.log("Hurrayyyyyyyy") 
        item.classList.remove("undone")
        item.classList.add("done") 
        myActivity = [] 
    } 
}
//counting the score of the day
activitySubmitButton.addEventListener("click", function(){
    score = parseInt(myScore[0])
    
    for (let n=1; n<myScore.length; n++){
        score= score + myScore[n]
        console.log(score)
    }
    scoreNumber.innerText = score
    todayScore.append(scoreNumber)
    //creating another task
    createRandomList() 
     
})
// refresh the whole game (new day) +showing the previous day score and footprint

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

        if (totalScore < 0){
            console.log ("YOU LOST")
            if (toDoListMenu.hasChildNodes()) {  
                toDoListMenu.removeChild(toDoListMenu.firstChild);
                toDoListMenu.innerText = "YOU LOST!"
            }

        } else {
            game["time"] = 24
        game.start()
        
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
        endDay. innerText= ""

        } 
        
        myScore =[]
        score =0 
        scoreNumber.innerText = score
    
    })
}


// changing background
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



//////game logic
createRandomList()
game.start()

    

    

    
    
    
    