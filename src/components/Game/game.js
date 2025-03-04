import style from './Game.module.css'

const possible_ends = [[0,1,2],[2,0,1],[1,2,0]] 
const possible_choices = ['pedra','papel','tesoura']

export default class Game{
    constructor(){
        this.playerId = 'Jogador'
        this.playerOnePoints = 0
        this.playerTwoPoints = 0

        this.botName = 'Anonymous'
        this.end = true
    }

    set(choice, player){

        if(player == 'Jogador'){
            player = this.playerId
        }

        choice = possible_choices[choice]

        const gameMessage = document.getElementById('game_message')
        
        gameMessage.scrollTop = gameMessage.scrollHeight - gameMessage.clientHeight
        gameMessage.innerHTML += `${player} jogou <span class=${style.yellow}>${choice}</span>!<br/>`

    }

    start(playerId){
        document.getElementById('startBox').style.display = 'none'
        document.getElementById('gameBox').style.justifyContent = 'flex-end'
        document.getElementById('btnContainer').style.display = 'flex'
        document.getElementById('scoreboard').style.display = 'block'


        this.playerId = playerId

        document.getElementById('0').onclick = () => {this.play(0, playerId)}
        document.getElementById('1').onclick = () => {this.play(1, playerId)}
        document.getElementById('2').onclick = () => {this.play(2, playerId)}

    }

    play(player_choice, playerId){

        if(!this.end) return
        this.end = false

        this.set(player_choice, playerId)
        const bot_choice = Math.floor(Math.random() * 3)

        setTimeout(() => {
            
            this.set(bot_choice, this.botName)

            setTimeout(() => {
                this.finish(player_choice, bot_choice)
            }, 300)
        }, 200)

    }

    finish(playerOne, PlayerTwo){

        const winner = possible_ends[playerOne][PlayerTwo]
        const gameMessage = document.getElementById('game_message')
        const pointUp = new Audio('./sounds/point-up.mp3')
        const pointDown = new Audio('./sounds/point-down.mp3')

        switch(winner){
            case 2:
                gameMessage.innerHTML += `<h3 class='${style.win}' >${this.playerId} ganhou um ponto!</h3>`
                this.playerOnePoints++
                pointUp.play()
                break;

            case 1:
                gameMessage.innerHTML += `<h3 class='${style.defeat}' >${this.botName} ganhou um ponto!</h3>`
                this.playerTwoPoints++
                pointDown.play()
                break;

            default:
                gameMessage.innerHTML += `<h3 class='${style.yellow}' >EMPATE ninguém ganhou um ponto!</h3>`
                pointDown.play();
        }

        gameMessage.innerHTML += `<div class='${style.line}'></div>`

        gameMessage.scrollTop = gameMessage.scrollHeight - gameMessage.clientHeight
        
        document.getElementById('playerOnePoints').innerHTML = this.playerOnePoints
        document.getElementById('playerTwoPoints').innerHTML = this.playerTwoPoints
        this.end = true
    }
}