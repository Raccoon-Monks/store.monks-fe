import ImageGalleryCard from '../Cards/ImageGalleryCard'
import style from './image-gallery.module.css'

export default function ImageGallery (){
    return (
        <aside className={style.aside}>
            {[1,2,3].map((item,index) => {
                return (
                    <ImageGalleryCard key={index}/>
                )
            })}
        </aside>
    )
}