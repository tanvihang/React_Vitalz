import './dayButton.css'

export default function DayButton({type, year, month, day, setSelectedStatInfo, CTA}){
    
    function onClickFunc(e){
        setSelectedStatInfo({type, year, month, day})
        CTA(e)
    }
    
    return(
        <div className='day-button-container' onClick={(e)=>onClickFunc(e)}>
            <h3>{day}</h3>
        </div>
    )
}