
//GLOBAL VARIABLES/////////////////////////////////////////////////////////////////////////////

// all pre-defined variables
let todayActivity = []
let toDoList=[]
let myActivity=[]
let myScore =[]
let score = 0
let activityNeeded =[]
let acts={}
let totalScore = 1000
let restartNum = 0
let numbersArray;
let item;
let activityScore;
let tasks;

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
let item1 = document.createElement("li")

//Defining an object constructor for each task (include name, how activity is done, and related activities)
class Tasks{
    constructor(name, taskComp, taskRela){
        this.name = name
        this.taskComp = taskComp
        this.taskRela = taskRela
    }
    taskDone() {
        //use DOM to cross out the task 
        //But WHEN??
        //when activity.activityCheck() is run
    }
}
class Activities {
    constructor(name, score){
        this.name = name
        this.score = score
    }
    activityCheck(){
        
        //highlight the task and use eventlistener and DOM to pick that activity
        }
    }
}

//instances of Tasks
let goingToWork = new Tasks ("going to work", ["Walking","car","bicycle","public transportation"],["speed down car","speed up car"])
let takeATrip = new Tasks ("take a trip", ["airplane","train"],[])
let ReadingNews = new Tasks ("reading news", ["newspaper"],["recycling paper"])
let watchingTv = new Tasks ("Watching tv", ["tv"],["unplug unused electrical devices"])
let doingLaundry = new Tasks ("doing laundry", ["washing machine"],["airdrying cloth","dryer"])
let cooking = new Tasks ("cooking", ["stove"],["animal based products","plant based products"])
let coffeeWithAFriend = new Tasks ("coffee with a friend", ["coffee"],["bring reusable mug"])

tasks.push(goingToWork, takeATrip, ReadingNews, watchingTv, doingLaundry, cooking, coffeeWithAFriend)

//instances of activities
let walking = new Activities ("walking", 50)
let car = new Activities ("car", -100)
let bicycle = new Activities ("bicycle", 50)
let publicTransportation = new Activities ("public transportation", 50)
let airplane = new Activities ("airplane", -200)
let train = new Activities ("train", -100)
let newspaper = new Activities ("newspaper", -20)
let tv = new Activities ("tv", -20)
let washingMachine = new Activities ("washing machine", -20)
let stove = new Activities ("stove", -20)
let coffee = new Activities ("coffee", -20)
let speedDownCar = new Activities ("speed down car", 50)
let speedUpCar = new Activities ("stove", -20)
let recyclingPaper = new Activities ("recycling paper",  50)
let unplug = new Activities ("unplug unused electrical devices", 50)
let airDryingCloth = new Activities ("air drying cloth", 50)
let dryer = new Activities ("dryer", -50)
let PlantBasedProducts = new Activities ("plant based products", 50)
let AnimalBasedProducts = new Activities ("animal based products", -50)
let bringReusableMug = new Activities ("bring reusable mug", 50)


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

        endDay. innerText= "Day ended! Get some sleep💤"
        document.getElementById("activity-submit").disabled = true 
        restartDay()

    }
}


//FUNCTIONS/////////////////////////////////////////////////////////////////////////////
// function: Background change functions
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


// function: create random number without repeatition
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

// function: create to-do list task
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
    // create the list of all task done on the day   
    item = document.createElement("li")
    item.innerText=`${toDoList[0]}`
    item.classList.add("undone")
    //append the list to document
    toDoListMenu.appendChild(item)       
}

// function: generate an object containing all activities neede to complete the current task 
const taskActivityMatch =function(){
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
}

// function: choosing related activities to task and append to today activity log
    //The process of choosing an activity on left side, appending it to middle column
    //+appending the activity's associated score to middle column
const choosingActivity = function (e){
    for (let i=0; i<activityItem.length; i++){
        
        activityItem[i].addEventListener("click", choosingActivity)
        
    }
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
}
// function: the process of checking each task as done if the right activities are chosen
const checkkkkkk =function(){
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

// function: refresh the whole game (new day) + showing the previous day score and footprint above page

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


//EVENTLISTENER/////////////////////////////////////////////////////////////////////////////

//user name
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let name = document.querySelector("input[type='text']").value
    userDisplay.innerText = `Hi ${name}!`
    document.querySelector("input[type='text']").value = ""
})

//start game and game timeR
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
    

    

    
    
    
    