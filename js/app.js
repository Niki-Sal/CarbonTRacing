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
    
    const createRandomList = function (){
        let randNum1 = Math.floor(Math.random()* (tasks.length))
        let randNum2 = Math.floor(Math.random()* (tasks.length))
        let randNum3 = Math.floor(Math.random()* (tasks.length))
    
        toDoList.push(tasks[randNum1].taskName)
        toDoList.push(tasks[randNum2].taskName)
        toDoList.push(tasks[randNum3].taskName)
        console.log(toDoList)
    }
    
    createRandomList()
    
    
    
    // for (let i=0; i<tasks.length; i++){
    //     if tasks[i]
    // }