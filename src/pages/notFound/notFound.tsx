import { useNavigate } from "react-router-dom"
import styles from "./notFound.module.scss"

export const Page404 = () => {

    const navigate = useNavigate();

    return (

        <div className={styles.container}>
            <span className={styles.containerText}>Page not found, :(</span>
            <button className={styles.containerButton} onClick={() => navigate("/")}><span className={styles.containerButtonText}>Back to main</span></button>
        </div>

    )

} 