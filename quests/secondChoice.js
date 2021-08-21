const Warrior = require("./warrior");
const prompt = require("prompt-sync")();
const UserVsMonster=require("./userVSMonster.js")

class SecondChoice{
    constructor(user){
        this.user= new Warrior();
        this.ifSecondChoice(user)
    }
ifSecondChoice(user){
    console.log('\nAfter walking for a while, you see nearby an injured fox...poor baby!')
        console.log('Is helping the poor fox worth your time? (y/n)')
        let choice2=prompt('> ').toLowerCase()
        if (choice2=='yes'||choice2=='y'){
            // fox is a monster and attacks!!!
            console.log(`You are so naive... that was a trap!!! The fox quickly transforms into a not so good looking monster!!!`)
           
        // put class for encounter with monster
        let fight=new UserVsMonster(user)
        
        }else if (choice2=='no'||choice2=='n'){
                console.log("\nDamn! aren't you just a psychopath? Oh well you do you...")
                console.log('Anyway, you keep walking and go deeper in the forest...')
            }else{
            console.log('What? you are not even capable to type yes or no... ')
            console.log('you should not attempt helping another creature: you would surely kill it!')
            console.log('\nso I choose for you to keep going deeper in the forest...')
        }
}
}
module.exports=SecondChoice