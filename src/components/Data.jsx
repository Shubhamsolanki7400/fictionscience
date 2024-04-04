import React, { useEffect, useState } from 'react'

const Data = () => {
    const [data,setData]=useState([])
    console.log(data)
    const url = "https://child.onrender.com/api/sciencefiction"

const fetchdata=()=>{
    return fetch(url)
    .then((res)=>res.json())
    .then((d)=>setData(d))
}
useEffect(() => {
    fetchdata();
  }, []);


  return (
    <>
    <div className='main1'>
          {
            data?.map((list,i)=>{
            return(
                <>
                <div className='main-data' key={i}>
                    <div className='main-item'>
                    <img className='main-img' src={list.Image}/>
                    <div className='main-title'>{list.Title}</div>
                    <div className='main-status' style={{ backgroundColor: list.Status === 'In Progress' ? 'yellow' : 'skyblue' }}>
  {list.Status}
</div>                    </div>
                </div>
                </>  
                )
            })
          }
    </div>
    </>
  )
}

export default Data