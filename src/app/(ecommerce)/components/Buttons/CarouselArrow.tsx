export default function CarouselArrow ({onClick, orientation}:any){
    return (
        <>
            <button onClick = {onClick}>{orientation}</button>
        </>
    )
}