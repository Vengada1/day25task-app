
const data=[{name:'EARNINGS(MONTHLY)',value:'$40,000',icon:<i class="fas fa-calendar fa-2x text-gray-300"></i>},
{name:'Earnings (Annual)',value:'$215,000',icon:<i class="fas fa-dollar-sign fa-2x text-gray-300"></i>},
{name:'Tasks',value:<div>100%<div class="col"><div class="progress progress-sm mr-2" style={{backgroundColor:'lightblue'}}></div></div>
</div>,icon:<i class="fas fa-dollar-sign fa-2x text-gray-300"></i>},
{name:'Pending Requests',value:'18',icon:<i class="fas fa-dollar-sign fa-2x text-gray-300"></i>}
]
const SmallCards= ()=>{
 return <div className="row">
     {data.map((obj)=>{

  return  <div class="col-xl-3 col-md-6 mb-4" >
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            {obj.name}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{obj.value}</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
 })}
 </div>
}

export default SmallCards ;