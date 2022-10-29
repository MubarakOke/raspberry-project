import React, {useState, useEffect} from 'react'
import {fetchData} from '../Utils/fetchData'

function SensorData() {
    const [data, setData] = React.useState([])

    const renderData= async()=>{
        return data.results.map((item, index)=>{
            return  (
                    <div className="table-row" key={index}>
                        <div class="table-cell tablet:text-[20px] text-[18px] break-words w-[33.33%] pl-[3px]">{item.sensor1}</div>
                        <div class="table-cell tablet:text-[20px] text-[18px] break-words w-[33.33%] pl-[3px]">{item.sensor2}</div>
                        <div class="table-cell tablet:text-[20px] text-[18px] break-words w-[33.33%] pl-[3px]">{item.sensor3}</div>
                        <div class="table-cell tablet:text-[20px] text-[18px] break-words w-[33.33%] pl-[3px]">{item.sensor4}</div>
                        <div class="table-cell tablet:text-[20px] text-[18px] break-words w-[33.33%] pl-[3px]">{item.sensor5}</div>
                    </div>
            )
        })
    }

    useEffect(async ()=>{
        const response= await fetchData()
        setData(response.results)
      },[data])
    
    return (
    <div>
        <div class="table w-full tablet:w-[60%]">
                <div class="table-header-group">
                    <div class="table-row w-[100%]">
                        <div class="table-cell tablet:text-[20px] font-bold text-[#0E4E48] text-[18px] w-[20%] pl-[3px]">sensor1</div>
                        <div class="table-cell tablet:text-[20px] font-bold text-[#0E4E48] text-[18px] w-[20%] pl-[3px]">sensor2</div>
                        <div class="table-cell tablet:text-[20px] font-bold text-[#0E4E48] text-[18px] w-[20%] pl-[3px]">sensor3</div>
                        <div class="table-cell tablet:text-[20px] font-bold text-[#0E4E48] text-[18px] w-[20%] pl-[3px]">sensor4</div>
                        <div class="table-cell tablet:text-[20px] font-bold text-[#0E4E48] text-[18px] w-[20%] pl-[3px]">sensor5</div>
                    </div>
                </div>
                {renderData()}
        </div>
    </div>
  )
}

export default SensorData