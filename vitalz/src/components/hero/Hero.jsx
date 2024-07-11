"use client"

import './hero.css'
import SplitType from 'split-type'
import { useEffect } from 'react'
import gsap from 'gsap'

export default function Hero(){

    useEffect(()=>{
        const text1 = SplitType.create('#hero-title-one')
        const text2 = SplitType.create('#hero-title-two')
        const text3 = SplitType.create('.title-two')

        gsap.to('.char',{
            y:0,
            stagger:0.05,
            delay: 0.1,
            duration: 0.05
        })

        gsap.to('.info-animate',{
            x:0,
            stagger:0.05,
            delay:1,
            duration: 0.1
        })

        gsap.to('.biostrap-container',{
            y:0,
            stagger:0.05,
            delay: 0.1,
            duration: 0.05
        })

    }, [])


    return(
        <div className='hero-container'>
             <div className='hero-inner-container'>
                <div className='hero-title'>
                    <div className='purple-geo'></div>
                    <div className='yellow-geo'></div>

                    <div className='biostrap-container'>
                        <img className='biostrap-image' src='/assets/images/mockBiostrap.jpg' width='445'/>
                    </div>
                    <div className='title-one'>
                        <h1 id='hero-title-one' className='hero-title-clip'>ONE-STOP</h1>
                        <h1 id='hero-title-two' className='font-futura-italic-bold text-primary hero-title-clip'>STATISTIC</h1>
                    </div>
                    <div className='title-two '>
                        <p className='hero-title-clip'>by Vitalz</p>
                    </div>
                </div>
                <div className='hero-info'>
                    <h3 className='info-animate'>check out all your health statistic (Spo2, HRV, HR etc) detected from \\Vitalz Monitoring System\\</h3>
                    <div className='geometry1-container info-animate'>
                        <img className='geometry1-image' src='/assets/images/randomGeometric1.png' width='100'/>
                    </div>    
                </div>
                
             </div>
            
             <h6 id="scroll-text" className=" text-center py-2 absolute bottom-0">( scroll to start )</h6>
        </div>
    )
}