'use client'

import './main.css'
import { useCallback, useState, useEffect } from 'react'
import useFetchUserData from '../../hooks/useFetchUserData.js'
import { useFetchAPI } from '@/hooks/useFetchApi.js'
import { monthDivider } from '@/js/monthDivider'

import CtaButton from '../buttons/ctaButton/CtaButton'
import TwoSelection from '../selections/twoSelection/TwoSelection'
import MonthFrame from '../monthFrame/MonthFrame'
import InfoFrame from '../infoFrame/InfoFrame'

export default function Main(){

    const [selectedStat, setSelectedStat] = useState("sleep")
    const [selectedUser, setSelectedUser] = useState(null)
    const [selectedDay, setSelectedDay] = useState(null)

    let sortedUserSleepData;
    let sortedUserAnalysisData;


    const { data: userData, loading: userLoading, error: userError } = useFetchUserData();
    const { data: sleepData, loading: sleepLoading, error:sleepError, fetchData: sleepFetch} = useFetchAPI("https://exam-vitalz-backend-8267f8929b82.herokuapp.com/api/getUserSleepMarker") 
    const { data: analysisData, loading: analysisLoading, error:analysisError, fetchData: analysisFetch} = useFetchAPI("https://exam-vitalz-backend-8267f8929b82.herokuapp.com/api/getUserAnalysis") 

    const [selectedStatInfo, setSelectedStatInfo] = useState(null)


    function renderInfo(){
        // console.log(selectedStatInfo)

        if(selectedStatInfo.type == "sleep"){
            try{

                const info = sortedUserSleepData[selectedStatInfo.year][selectedStatInfo.month][selectedStatInfo.day]
    
                return <InfoFrame data={info}></InfoFrame>
            }
            catch(err){

            }
        }
        else if(selectedStatInfo.type == "analysis"){
            try{
                const info = sortedUserAnalysisData[selectedStatInfo.year][selectedStatInfo.month][selectedStatInfo.day]
    
                return <InfoFrame data={info}></InfoFrame>
            }
            catch(err){
                
            }
        }
    }

    function clickSelectionMobile(e){
        if(selectedDay){
            selectedDay.classList.toggle("day-button-selected")
            setSelectedDay(null)
        }
        if(selectedStatInfo){
            setSelectedStatInfo(null)
        }

    }

    function clickUser(e,user){
        if(selectedUser){
            selectedUser.classList.toggle("button-container-click")
            if(selectedDay){
                selectedDay.classList.toggle("day-button-selected")
            }
            setSelectedDay(null)
            setSelectedStatInfo(null)
        }

        const element = e.target;
        element.classList.toggle("button-container-click")
        setSelectedUser(element)

        sleepFetch({userId: user.UserID, userName:user.UserName, type:"sleep"})
        analysisFetch({userId: user.UserID, userName:user.UserName, type:"analysis"})
    }

    function clickDay(e){
        if(selectedDay){
            selectedDay.classList.toggle("day-button-selected")
        }

        const element = e.target;
        element.classList.toggle("day-button-selected")
        setSelectedDay(element)
    }

    function renderCalanders(data, type){
        // console.log(type)
        // console.log(data)
        if(data == null){
            return
        }

        let sortedData;

        if(type == "sleep"){
            sortedUserSleepData = monthDivider(data)
            sortedData = sortedUserSleepData
        }
        else if(type == "analysis"){
            // console.log("ANALYSIS")
            sortedUserAnalysisData = monthDivider(data)
            sortedData = sortedUserAnalysisData
        }

        
        // console.log(sortedData)

        const elements = [];

        elements.push(
            <h3 key="title" className=' text-white text-center'>{type}/</h3>
        )
        // Year
        for(const year in sortedData){
            for(const month in sortedData[year]){
                // render by months   
                elements.push(
                    <MonthFrame
                        key={`${year}-${month}`}
                        year={year}
                        month={month}
                        data={sortedData[year][month]}
                        type={type}
                        setSelectedStatInfo = {setSelectedStatInfo}
                        clickDay = {clickDay}
                    />
                );
            }
        }

        return (elements)
    }

    return (
        <div className='main-container'>
            <div className='container-up'>
                <div className='up-shape'></div>
            </div>

            <div className='title-container'>
                <h2>THE <span className='text-white font-futura-italic-bold'>LAB</span></h2>
                <img className='title-container-image' src='/assets/images/RandomGeometric2.png' width="80px"/>
            </div>

            {/* GRID for tablet above */}
            <div className='main-section-container'>

                <div className='main-section-public user-section'>
                    <h3>1. SELECT USER</h3>

                    <div className='transparent-box'>
                        {
                            userLoading? (<p>Loading</p>):
                            userError? (<p>Error</p>):
                            userData.length == 0 ? (<p>No User</p>):
                            ( 
                                userData.map((user, index) => (
                                    <CtaButton key={user.UserID} onClick={(e)=>clickUser(e,user)} title={user.UserName} subtitle={user.DeviceCompany}></CtaButton>
                                ))
                            )
                        }
                    </div>
                </div>

                <div className='main-section-public select-stat-section'>
                    <h3>2. SELECT STATS</h3>

                    <div className='stat-selection-inner'>
                        <div className='transparent-box'>
                            <TwoSelection state={setSelectedStat} selections = {["sleep data", "user analysis"]} cta={clickSelectionMobile}></TwoSelection>
                            {
                                selectedUser == null ? (
                                    (<div className='h-full flex items-center justify-center'>
                                        <h2 className=' text-white'>No selected user</h2>
                                    </div>)
                                ):
                                selectedStat == "sleep" ? 
                                (renderCalanders(sleepData, "sleep")) :
                                (renderCalanders(analysisData, "analysis"))
                            }
                        </div>

                        <div className='transparent-box hide-mobile'>
                            {
                                selectedUser == null ? 
                                (<div className='h-full flex items-center justify-center'>
                                    <h2 className=' text-white'>No selected user</h2>
                                </div>) :
                                (renderCalanders(analysisData, "analysis"))
                            }
                        </div>
                    </div>


                </div>

                <div className='main-section-public show-stat-section'>
                    <h3>3. THE STATS</h3>

                    <div className='transparent-box'>
                    {
                        selectedStatInfo == null?
                        (<div className='h-full flex items-center justify-center'>
                            <h2 className=' text-white'>No data</h2>
                        </div>):
                        (renderInfo()) 
                    }
                    </div>
                </div>

                <div className='about-btn'>

                </div>

            </div>
        </div>
    )
}