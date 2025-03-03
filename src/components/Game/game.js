import style from './Game.module.css'

const possible_ends = [[0,1,2],[2,0,1],[1,2,0]] 
const possible_choices = ['pedra','papel','tesoura']

export default class Game{
    constructor(){
        this.players = []

    }

    click(id, player){
        let player_choice = possible_choices[id]

        document.getElementById(player).innerHTML = `${player} jogou <span class=${style.choice}>${player_choice}</span>!`

        //let bot_choice = document.getElementById(Math.floor(Math.random() * 3)) 
        //document.getElementById('game_message').hidden = false
        //document.getElementById('bot_choice').innerHTML = bot_choice.alt

    }

    play(){

    }
}