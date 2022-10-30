import React, {useState, useEffect} from 'react'
import {fetchData} from '../Utils/fetchData'

function SensorData({interval}) {
    const [data, setData] = useState([])

    const renderData= (data)=>{
        if (data.length==0)return (<div>Loading.............................</div>)
        return data.map((item, index)=>{
            return  (
                    <div className="table-row" key={index}>
                        <div className="table-cell tablet:text-[20px] text-[18px] break-words w-[20%] pl-[3px]">{item.sensor1}</div>
                        <div className="table-cell tablet:text-[20px] text-[18px] break-words w-[20%] pl-[3px]">{item.sensor2}</div>
                        <div className="table-cell tablet:text-[20px] text-[18px] break-words w-[20%] pl-[3px]">{item.sensor3}</div>
                        <div className="table-cell tablet:text-[20px] text-[18px] break-words w-[20%] pl-[3px]">{item.sensor4}</div>
                    </div>
            )
        })
    }

    useEffect(async()=>{
        let response= setInterval(async()=>{
            let response= await fetchData()
            setData(response.results.slice(0,10))
        }, 5000)

        return ()=> clearInterval(response)
    }, [])

    

    return (
    <div>
        <div className="table w-full tablet:w-[60%]">
                <div className="table-header-group">
                    <div className="table-row w-[100%]">
                        <div className="table-cell tablet:text-[20px] font-bold text-[#0E4E48] text-[18px] w-[20%] pl-[3px]">sensor1</div>
                        <div className="table-cell tablet:text-[20px] font-bold text-[#0E4E48] text-[18px] w-[20%] pl-[3px]">sensor2</div>
                        <div className="table-cell tablet:text-[20px] font-bold text-[#0E4E48] text-[18px] w-[20%] pl-[3px]">sensor3</div>
                        <div className="table-cell tablet:text-[20px] font-bold text-[#0E4E48] text-[18px] w-[20%] pl-[3px]">sensor4</div>
                    </div>
                </div>
                {renderData(data)}
        </div>
    </div>
  )
}

export default SensorData