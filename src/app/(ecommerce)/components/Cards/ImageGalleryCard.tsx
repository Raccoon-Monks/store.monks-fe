import style from './Styles/image-gallery-card.module.css';

export default function ImageGalleryCard(props:{key:number}){
    return (
        <div className={style['image-gallery-card']}>
            PRODUCT IMAGE
        </div>
    )
}