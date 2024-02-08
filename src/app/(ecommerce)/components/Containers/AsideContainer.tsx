import { ContainerProps } from "@/app/Types/component_types"
import styles from "./container-styles.module.css"

const AsideContainer = ({children, style, id} : ContainerProps) => {
    return(
        <aside id={id} className={styles[style]}>
            {children}
        </aside>
    )
}

export default AsideContainer;