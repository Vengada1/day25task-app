import React from 'react'
import {Bar} from 'react-chartjs-2';

// this is one is tried and failed and note implemented in the html
const BarChart = ()=>{
   
    return (
        <div>
          <Bar data={{
            // labels:["Blue","Red"]
          }} 
          height={400}
          width={600}
          />
        </div>
    )
}


export default BarChart