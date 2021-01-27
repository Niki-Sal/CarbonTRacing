////////global variables
//defining an array of objects for each task. including task name and an object of activities 
//that cause that task to be done.
let tasks = [
    {taskName: "going to work", 
    taskComplete: {
        "walking": "going to work",
        "car": "going to work",
        "bicyle":"going to work",
        "public transportation": "going to work"}
    },
    {taskName: "trip to lA", 
    taskComplete:{
        "airplane": "trip to lA",
        "bus": "trip to lA"}
    },
    {taskName: "Reading news", 
    taskComplete:{
        "light bulb,newspaper": "Reading news",
        "newspaper,light bulb": "Reading news"}
        // "newspaper": "Reading news"
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
        // "dryer": "doing Laundry",
        // "air drying cloth": "doing Laundry"}
    },
    {taskName: "cooking", 
    taskComplete: {
        "refrigerator,stove,animal based products": "cooking",
        "refrigerator,stove,plant based products": "cooking"}
        // "stove": "cooking",
        // "animal based products": "cooking",
        // "plant based products": "cooking"}
    },
    {taskName: "coffee with a friend", 
    taskComplete: {
        "coffee,walking": "coffee with a friend",
        "walking,coffee": "coffee with a friend",
        "coffee,bicycle": "coffee with a friend",
        "bicycle,coffee": "coffee with a friend",
        "coffee,car": "coffee with a friend",
        "car,coffee": "coffee with a friend"}
        // "walking": "coffee with a friend",
        // "car": "coffee with a friend",
        // "bicycle": "coffee with a friend",}
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
let commute = ["walking","car","bicycle","public Transportation","airplain","train"]
let energyConsumption = ["light Bulb", "TV", "washer", "dryer", "refrigerator","stove"]
let supplies = ["animal based products", "plant based products", "coffee", "newspaper"]
let energyPositive = ["recycling paper", "compost food", "speed down car","air drying cloth", "unplug unused electrical devices","use product with little package"]
let toDoList=[]
let level = 3
let myActivity=[]
let myScore =[]
let activityNeeded =[]
let acts={}
let acti={}

///////create DOM elements
let toDoListMenu = document.getElementById("random-tasks")
let scoreContainer = document.getElementById("score-container")
let todayScore =document.getElementById("today-score")
let activitySubmitButton = document.getElementById("activity-submit")
let body = document.querySelector("body")
let activityItem = document.getElementsByClassName("activity-item")
let todayList = document.getElementById ("day-activities")
let check1 = document. getElementById ("check1")
let check2 = document. getElementById ("check2")
let check3 = document. getElementById ("check3")

let item1 = document.createElement("li")
let item2 = document.createElement("li")
let item3 = document.createElement("li")

let items = []
items.push (item1)
items.push (item2)
items.push (item3)
console.log (items)

///////create functions & eventlisteners
const createRandomList = function (){
    let randNum=[]
        if (level === 1){
            let Num = Math.floor(Math.random()* (tasks.length))
            randNum.push(Num)
        } else if (level === 2){
            let Num = Math.floor(Math.random()* (tasks.length))
            randNum.push(Num)
            Num = Math.floor(Math.random()* (tasks.length))
            randNum.push(Num)
        } else if (level === 3){
            let Num = Math.floor(Math.random()* (tasks.length))
            randNum.push(Num)
            Num = Math.floor(Math.random()* (tasks.length))
            randNum.push(Num)
            Num = Math.floor(Math.random()* (tasks.length))
            randNum.push(Num)
        }
        for (let i=0; i<randNum.length; i++){
            let n= randNum[i]
            toDoList.push(tasks[n].taskName)
        }
        console.log(toDoList)
        for (let i=0; i<toDoList.length; i++ ){
            items[i].innerText=`${toDoList[i]}`
            items[i].classList.add("undone")
            toDoListMenu.appendChild(items[i])
        }
        
        
        for (let i=0; i<toDoList.length; i++){
            for (let n=0; n<tasks.length; n++){
                if (tasks[n].taskName === toDoList[i]){
                    acts[i] = tasks[n].taskComplete
                    // Object.assign(acti, acts[0],acts[1],acts[2])
                }   
            }                    
        }
        console.log(acts)
        addToUserActivity()
         
        
}

const addToUserActivity = function(){
    for (let i=0; i<activityItem.length; i++){
        activityItem[i].addEventListener("click", function(e){
            let dailyActivity = document.createElement ("li")
            dailyActivity.innerText = activityItem[i].innerText
            todayList.appendChild(dailyActivity)
            activityItem[i].classList.add ("chosen")
            for (let j=0; j<activities.length; j++){
                if (activities[j].name === dailyActivity.innerText.toLowerCase()){
                    let activityScore = document.createElement ("p")
                    activityScore.innerText = activities[j].score
                    scoreContainer.appendChild(activityScore)
                    activityScore.classList.add("score")
                    
                    myScore.push(activities[j].score)
                    myActivity.push(activities[j].name)

                }
            }
            // console.log(myActivity)
            console.log(myScore)
            console.log(acts)
            check1.addEventListener ("click", function(){
                let myActivityStr = myActivity.toString()
                let current = acts[0]
                console.log (current)
                if(current[myActivityStr] !== undefined){
                    
                    console.log("Hurrayyyyyyyy") 
                    // alert("you are done for today!")
                    items[0].classList.remove("undone")
                    items[0].classList.add("done") 
                    
                }else{
                    console.log(myActivityStr)
                    console.log(":(")
                } 
                myActivity =[]

            })
            check2.addEventListener ("click", function(){
                let myActivityStr = myActivity.toString()
                let current = acts[1]
                console.log (current)
                if(current[myActivityStr] !== undefined){
                    
                    console.log("Hurrayyyyyyyy") 
                    // alert("you are done for today!")
                    items[1].classList.remove("undone")
                    items[1].classList.add("done") 
                    
                }else{
                    console.log(myActivityStr)
                    console.log(":(")
                }
                myActivity =[] 

            })
            check3.addEventListener ("click", function(){
                let myActivityStr = myActivity.toString()
                let current = acts[2]
                console.log (current)
                if(current[myActivityStr] !== undefined){
                    
                    console.log("Hurrayyyyyyyy") 
                    // alert("you are done for today!")
                    items[2].classList.remove("undone")
                    items[2].classList.add("done") 
                    
                }else{
                    console.log(myActivityStr)
                    console.log(":(")
                } 
                

            })
            
            
        })
    }
}

/////////////////////////////////////////////////////





///////////////////////////////////////////////


activitySubmitButton.addEventListener("click", function(){
    let score = parseInt(myScore[0])
    let scorenumber = document.createElement("p")
    for (let n=1; n<myScore.length; n++){
        score= score + myScore[n]
        console.log(score)
    }
    scorenumber.innertext = score
    todayScore.append(score)    
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

    

    

    
    
    
    