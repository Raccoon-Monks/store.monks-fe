import styles from './listing.module.css'
import ShelfCard from '../ShelfCard/ShelfCard'
import { ListingProps } from '@/app/Types/component_types'
import DivContainer from '../Containers/DivContainer'


export default function Listing({contents}: ListingProps) {

    return (
        <DivContainer id={'listing'} style={'listing-globals'}>
            <span className={styles.span}>
                CATEGORY LIST
            </span>
            <div className={styles['inside-list']}>
              {contents.map((item,index) => {
                return <ShelfCard 
                    href={contents[index]['href']} 
                    style={'shelf-card-globals'}
                    id={`product-card-${index+1}`} 
                    content={contents[index]['content']}/>
              })}
            </div>
        </DivContainer>
    )
}