import './monthFrame.css'

import DayButton from '../buttons/dayButton/DayButton'

export default function MonthFrame({year, month, data, type, setSelectedStatInfo, clickDay }){
    
    function renderDay(data){

        const elements = []

        for(const day in data){
            elements.push(
                <DayButton
                    key= {`${year}-${month}-${day}`}
                    type = {type}
                    year = {year}
                    month = {month}
                    day = {day}
                    setSelectedStatInfo = {setSelectedStatInfo}
                    CTA = {clickDay}
                >

                </DayButton>
            )
        }

        return elements
    }
    
    return (
        <div className="month-frame-container">
            <h4>{year}/{month}</h4>

            <div className='month-day-container'>
                {
                    data.length == 0 ?
                    (<p>No data</p>):
                    (renderDay(data))
                }
            </div>
        </div>
    )
}