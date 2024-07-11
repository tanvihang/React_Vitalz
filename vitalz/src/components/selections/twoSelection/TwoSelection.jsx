'use client'

import './twoSelection.css'
import { useState } from 'react'

export default function TwoSelection({state, selections, cta}){

    const selectorEle = document.querySelector(".selector")
    const firstEle = document.querySelector(".selection-one")
    const [selectedSelection, setSelectedSelection] = useState(null)
    let flag = 0

    function selectAction(e){

        cta()

        if(flag == 0){
            firstEle.classList.remove("selected")
            flag = 1
        }

       if(selectedSelection){
        selectedSelection.classList.remove("selected")
       } 

       const element = e.target;
       element.classList.add("selected")
       setSelectedSelection(element)

       console.log(e.target.innerHTML)

       const inner = e.target.innerHTML
       if(inner.includes("sleep")){
        state("sleep")
       }else{
        state("analysis")
       }

       selectorEle.classList.toggle("selector-right")
    }

    return (
        <div className='two-selection-container'>
            <div className='selector'>

            </div>

            <div className='selection selection-one selected' onClick={selectAction}>
                <h3>{selections[0]}</h3>
            </div>

            <div className='selection selection-two' onClick={selectAction}>
                <h3>{selections[1]}</h3>
            </div>
        </div>
    )
}