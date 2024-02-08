import { PageProps } from "@/app/Types/component_types";
import styles from "./page-container.module.css"

export default function PageContainer ({id, children, style}: PageProps){

    return(
        <main id={id} className={styles[style]}>
            {children}
        </main>
    )
}