import React, { useState } from 'react'
import '../styles/home.css'
import Data from './Data'
const home = () => {
  return (
<>
<div className='container'>
       <div className='main'>
          <div className='child1'>Science Fiction Stories</div>
          <div className='child2'>
            <div style={{ background:"aqua",padding:"0px 10px", borderRadius:"3px"}}>Clear All</div>
            <div style={{ background:"aqua",padding:"0px 10px", borderRadius:"3px"}}>Completed</div>
            <div style={{ background:"aqua",padding:"0px 10px", borderRadius:"3px"}}>In Progress</div>
            <div style={{ background:"aqua",padding:"0px 10px", borderRadius:"3px"}}>New</div>
          </div>
       </div>
    </div>
    <div>

    </div>
    <Data/>
</>
    )
}

export default home