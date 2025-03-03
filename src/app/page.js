import Game from '@/components/Game'
import style from './page.module.css'

export default function Home(){
    return(
        <>
            <div className={style.gameContainer}>
                <Game/>
            </div>
        </>
        
    )
}