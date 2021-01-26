////////global variables

let tasks = [
    {taskName: "going to work", taskComplete: ["walking","car","bicyle","public transportation"]},
    {taskName: "trip to lA", taskComplete:["airplain","bus"]},
    {taskName: "Reading news", taskComplete:["lightbulb","newspaper"]},
    {taskName: "Watching TV", taskComplete: ["TV"]},
    {taskName: "doing Laundry", taskComplete:["washer","dryer","Airdrying cloth"]},
    {taskName: "cooking", taskComplete: ["refrigerator","stove","animal based products","plant based products"]},
    {taskName: "coffee with a friend", taskComplete: ["walking","car","bicycle","coffee"]}
    ]
let todayActivity = []

let commute = ["walking","car","bicycle","public Transportation","airplain","train"]
let energyConsumption = ["light Bulb", "TV", "washer", "dryer", "refrigerator","stove"]
let supplies = ["animal based products", "plant based products", "coffee", "newspaper"]
let energyPositive = ["recycling paper", "compost food", "speed down car","air drying cloth", "unplug unused electrical devices","use product with little package"]

let toDoList=[]

let level = 2
///////create DOM elements
let toDoListMenu = document.getElementById("random-tasks")


// console.log(toDoListMenu)
let activityItem = document.getElementsByClassName("activity-item")
console.log (activityItem)
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
for (let i=0; i<activityItem.length; i++){
    activityItem[i].addEventListener("click", function(e){
        let dailyActivity = document.createElement ("li")
        dailyActivity.innerText = activityItem[i].innerText
        console.log (dailyActivity)
        todayList.appendChild(dailyActivity)
        activityItem[i].classList.add ("chosen")
    })
}


//////game logic
createRandomList()

    

    

    
    
    
    