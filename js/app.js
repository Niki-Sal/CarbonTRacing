////////global variables

let tasks = [
    {taskName: "going to work", taskComplete: ["walking","car","bicyle","public transportation"]},
    {taskName: "trip to lA", taskComplete:["airplain","bus"]},
    {taskName: "Reading news", taskComplete:["lightbulb","newspaper"]},
    {taskName: "Watching TV", taskComplete: ["tv"]},
    {taskName: "doing Laundry", taskComplete:["washerwashing machine","dryer","air drying cloth"]},
    {taskName: "cooking", taskComplete: ["refrigerator","stove","animal based products","plant based products"]},
    {taskName: "coffee with a friend", taskComplete: ["walking","car","bicycle","coffee"]}
]

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

let level = 2
let myActivity=[]
let myScore =[]
///////create DOM elements
let toDoListMenu = document.getElementById("random-tasks")
let scoreContainer = document.getElementById("score-container")
let todayScore =document.getElementById("today-score")
let activitySubmitButton = document.getElementById("activity-submit")


// console.log(toDoListMenu)
let activityItem = document.getElementsByClassName("activity-item")
let todayList = document.getElementById ("day-activities")


///////create functions & eventlisteners
const createRandomList = function (){
    let randNum=[]
        if (level === 1){
            let Num = Math.floor(Math.random()* (tasks.length))
            randNum.push(Num)
        } else if (level ===2){
            let Num = Math.floor(Math.random()* (tasks.length))
            randNum.push(Num)
            Num = Math.floor(Math.random()* (tasks.length))
            randNum.push(Num)
        } else if (level ===3){
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
        for (let j=0; j<toDoList.length; j++){
            let listItem = document.createElement("li")
            listItem.innerText=toDoList[j]
            toDoListMenu.appendChild(listItem)
        }
        
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
                    console.log(myScore)
                    console.log(myActivity)

                }
            }
        })
    }
}
console.log (todayScore)
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




//////game logic
createRandomList()
addToUserActivity()


    

    

    
    
    
    