import { ContainerProps } from "@/app/Types/component_types"
import styles from "./container-styles.module.css"

const FooterContainer = ({children, style, id} : ContainerProps) => {
    return(
        <footer id={id} className={styles[style]}>
            {children}
        </footer>
    )
}

export default FooterContainer;