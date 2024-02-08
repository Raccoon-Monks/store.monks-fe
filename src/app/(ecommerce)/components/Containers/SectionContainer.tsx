import { ContainerProps } from "@/app/Types/component_types"
import styles from "./container-styles.module.css"

const SectionContainer = ({children, style, id} : ContainerProps) => {
    return(
        <section id={id} className={styles[style]}>
            {children}
        </section>
    )
}

export default SectionContainer;