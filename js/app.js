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
let activityNeeded =[]
let acts={}


///////create DOM elements
let toDoListMenu = document.getElementById("random-tasks")
let scoreContainer = document.getElementById("score-container")
let todayScore =document.getElementById("today-score")
let activitySubmitButton = document.getElementById("activity-submit")
let body = document.querySelector("body")
let activityItem = document.getElementsByClassName("activity-item")
let todayList = document.getElementById ("day-activities")


let item;
let item1 = document.createElement("li")

///////create functions & eventlisteners
const createRandomList = function (){ 
    let Num = Math.floor(Math.random()* (tasks.length))
    toDoList=[tasks[Num].taskName]
    
    console.log(toDoList)
       
    for (let n=0; n<tasks.length; n++){
        if (tasks[n].taskName === toDoList[0]){
            acts = tasks[n].taskComplete
        }   
    }                    
        
    console.log(acts)
        
    item = document.createElement("li")
    item.innerText=`${toDoList[0]}`
    item.classList.add("undone")
    toDoListMenu.appendChild(item)   
    
    for (let i=0; i<activityItem.length; i++){
        
        activityItem[i].addEventListener("click", clicki)
        
    }
}

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
    }
    // console.log(myActivity)
    console.log(myScore)
    let myActivityStr = myActivity.toString()
    if(acts[myActivityStr] !== undefined){
        
        console.log("Hurrayyyyyyyy") 
        item.classList.remove("undone")
        item.classList.add("done") 
        myActivity = [] 
    } 
}

activitySubmitButton.addEventListener("click", function(){
    let score = parseInt(myScore[0])
    let scorenumber = document.createElement("p")
    for (let n=1; n<myScore.length; n++){
        score= score + myScore[n]
        console.log(score)
    }
    scorenumber.innertext = score
    todayScore.append(score)
    createRandomList()    
})


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



//////game logic
createRandomList()

// checkmark()

const game = {
    time: 24,
    start(){
        const gameTimer = setInterval(() => {
            
            this.time= this.time -1
            if ( this.time == 0){
                clearInterval (gameTimer)
                this.end()
            } else if (this.time === 18){
                changeToNoon()
            } else if (this.time === 12){
                changeToSunset()
            } else if (this.time === 6){
                changeToNight ()
            }
        }, 1000)
    },
    end() {
        // alert ("gameover!!")
        console.log("gameover")

    }
}
game.start()

    

    

    
    
    
    