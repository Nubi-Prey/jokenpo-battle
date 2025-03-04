import Game from '@/components/Game'
import style from './page.module.css'

export default function Home(){
    return(
        <>
            <h1 className={style.title}>Bem vindo ao <br/><span>Jokenpo Battle!</span></h1>
            <Game/>
        </>
        
    )
}