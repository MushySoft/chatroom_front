import { ReactNode } from "react";
import "../config/styles/index.scss"
import styles from "./Layout.module.scss"
interface LayoutProps {
  children?: ReactNode;
}


export const Layout = ({children}: LayoutProps) => (

    <div className={styles.layout}>
        {children}
    </div>

)