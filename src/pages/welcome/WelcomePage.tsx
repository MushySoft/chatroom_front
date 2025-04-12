import { GoogleButton } from "../../features/auth/ui/googleButton"
import styles from "./WelcomePage.module.scss"
import mushroomImg from '../../shared/assets/mushroom.png'
export const WelcomePage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.containerBody}>
                <div className={styles.containerBodyImage}>
                    <img src={mushroomImg} alt="mushroom"></img>
                </div>
                <div className={styles.containerBodyAuth}>
                    <div className={styles.containerBodyAuthText}>
                        <span>Chatroom</span>
                        <img className={styles.containerBodyAuthTextLogo} src={mushroomImg} alt="mushroom"></img>
                    </div>
                    <div className={styles.containerBodyAuthButton}>
                        <GoogleButton/>
                    </div>
                </div>
            </div>
        </div>
    )

}