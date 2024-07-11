import './ctaButton.css'

export default function CtaButton({onClick, title, subtitle}){
    return (
        <div className='button-container' onClick={onClick}>
            <h3>{title}</h3>
            {subtitle ? <h4>{subtitle}</h4> : <></>}
        </div>
    )
}