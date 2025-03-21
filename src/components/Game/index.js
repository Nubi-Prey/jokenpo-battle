'use client'

import style from './Game.module.css'
import Image from 'next/image'
import pedra from '/public/images/pedra.svg'
import papel from '/public/images/papel.svg'
import tesoura from '/public/images/tesoura.svg'
import Game from './game.js'

export default function Window(){

    const game = new Game()

    let playerId = 'Jogador'

    return (
        <div id='gameBox' className={style.box}>
            
            <div id='startBox' className={style.startBox}>
                
                <form className={style.form}>
                    <h2>Iniciar Batalha!</h2>
                    <div className={style.name_box}>Seu nome: <input className={style.name_input} id='nickname' placeholder='Jogador'></input></div>
                    <div className={style.btn_bottom}>
                        <input type='button' className={style.startBtn} onClick={() => {game.start(document.getElementById('nickname').value || playerId)}} value='Jogar'/>
                    </div>
                </form>
            </div>

            <div id='game_message' className={style.message} ></div>

            <div id='scoreboard' className={style.scoreboard} style={{display: 'none'}}>
                <span id='playerOnePoints' className={style.points}>0</span> <span className={style.cross}>X</span> <span id='playerTwoPoints' className={style.points}>0</span>
            </div>

            <div id='btnContainer' className={style.buttonsContainer} style={{display: 'none'}}>
                <Image id='0' className={style.images} src={pedra} alt='pedra'/>
                <Image id='1' className={style.images} src={papel} alt='papel'/>
                <Image id='2' className={style.images} src={tesoura} alt='tesoura'/>
            </div>
        </div>
        
    )
}