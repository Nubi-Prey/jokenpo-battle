'use client'

import style from './Game.module.css'
import Image from 'next/image'
import pedra from '/public/images/pedra.svg'
import papel from '/public/images/papel.svg'
import tesoura from '/public/images/tesoura.svg'
import Game from './game.js'

export default function Window(){

    const game = new Game()

    const playerId = 'Nubi Prey'

    return (
        <div className={style.box}>
            <div id='game_message' className={style.message} >
                <span id={playerId}></span><br/>
            </div>

            <div className={style.buttonsContainer}>
                <Image id='0'   className={style.images} onClick={() => {game.click(0, playerId)}} src={pedra} alt='pedra'/>
                <Image id='1'   className={style.images} onClick={() => {game.click(1, playerId)}} src={papel} alt='papel'/>
                <Image id='2' className={style.images} onClick={() => {game.click(2, playerId)}} src={tesoura} alt='tesoura'/>
            </div>
        </div>
        
    )
}