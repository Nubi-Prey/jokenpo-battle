import style from './Game.module.css'
import Image from 'next/image'
import pedra from '/public/images/pedra.svg'
import papel from '/public/images/papel.svg'
import tesoura from '/public/images/tesoura.svg'

export default function Game(){
    return (
        <div className={style.box}>
            <div className={style.message}>Escolheu: <span className={style.choice}>papel</span>!</div>

            <div className={style.buttonsContainer}>
                <Image id='pedra'   className={style.images} src={pedra} alt='pedra'/>
                <Image id='papel'   className={style.images} src={papel} alt='papel'/>
                <Image id='tesoura' className={style.images} src={tesoura} alt='tesoura'/>
            </div>
        </div>
        
    )
}