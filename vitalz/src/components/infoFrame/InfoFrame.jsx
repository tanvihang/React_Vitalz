import './infoFrame.css'

export default function InfoFrame({data}){
    
    function renderInfos(){
        const elements = []
        
        for(const key in data){
            elements.push(
                <div
                    key={key}
                    className='single-info-container'
                >
                    <h3>{key}</h3>
                    <h4>{data[key]}</h4>
                </div>
            )
        }

        return elements
    }
    
    return (
        <div className='info-frame-container'>
            {data == 'undefined' ?
            (<p>No data</p>):
            (renderInfos())
        }
        </div>
    )
}