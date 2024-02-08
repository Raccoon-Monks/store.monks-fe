import { ContainerProps } from "@/app/Types/component_types"
import styles from "./container-styles.module.css"

const DivContainer = ({children, style, id} : ContainerProps) => {
    return(
        <div id={id} className={styles[style]}>
            {children}
        </div>
    )
}

export default DivContainer;