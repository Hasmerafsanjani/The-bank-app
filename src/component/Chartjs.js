import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chartjs() {
  const [val,setvalue] = useState(1000)
  const [downpayment,setdownPayment] = useState(500)
  const [loan,setloan] = useState(500)
  const [rate,setRate] = useState(5)
  const [years,setyears] = useState(5)

  // useEffect({
    

  // },[value,loan,downpayment,rate , years ])
console.log(` value of value ${val}`);
console.log(` value of downpayment ${downpayment}`);
console.log(` value of loan amout${loan}`);
console.log(` value of rate${rate}`);
console.log(` value of years${years}`);


    const data = {
        labels: ['Principal', 'Interest'],
        datasets: [
          {
            label: 'Principal , Interest',
            data: [val,(loan*(rate/100)*years)  ],
            
            backgroundColor: [
              'cyan',
              'orange',
            ]
          },
        ],
      }

      // useEffect(()=>{
        
      //   downpat( )

      // },[setRate,setdownPayment,setloan,setvalue,sety])
      const interestrate = e =>{
       setRate(e.target.value)
      }
      const downpat = e =>{
        setdownPayment(e.target.value)
      }
      const toalval = e =>{
        setvalue(e.target.value)
      }
      const handelclick = e =>{
      setloan(e.target.value)
      }
      const intryear  = e =>{
      setyears(e.target.value)
      }
      
  return (
    <div className='flex w-full justify-evenly '>
        <div className='flex  w-1/2 flex-col m-6'>
        <label className='text-2xl'> Total Value 
        <p className=''>${val}</p>
        <input min={1000} step="100" max={10000} value={val} className='w-full text-sm'onChange={toalval } type='range'></input>
        <div className='flex justify-between'>
          <p className='text-lg font-thin'>$1000</p>
          <p className='text-lg font-thin'>$10000</p>
        </div>
        </label>
        
        <label className='text-2xl'> Down Payment 
        <p className=''>$ {downpayment}</p>
        <input min={100} step="100" max={val} value={downpayment} onChange={downpat} className='w-full text-sm' type='range'></input>
        <div className='flex justify-between'>
          <p className='text-lg font-thin'>$0</p>
          <p className='text-lg font-thin'>${val}</p>
        </div>
        </label>

        <label className='text-2xl'>Loan Amount 
        <p className=''>$ {val-downpayment}</p>
        <input min={0} step="100" max={loan} value={(downpayment)} className='w-full text-sm' onChange={handelclick} type='range'></input>
        <div className='flex justify-between'>
          <p className='text-lg font-thin'>$0</p>
          <p className='text-lg font-thin'>${val-downpayment}</p>
        </div>
        </label>


        <label className='text-2xl'> Interest Rate
        <p className=''>{rate} %</p>
        <input min={2} step="1" max={18} className='w-full text-sm'  onChange={interestrate}type='range'></input>
        <div className='flex justify-between'>
          <p className='text-lg font-thin'>2 %</p>
          <p className='text-lg font-thin'>18 %</p>
        </div>
        </label>


        <div className='mt-3'> 
        <label className='' >
         <fieldset className='border rounded border-black m-0 '>
          <p className='font-bold p-2 '> Interest </p>
          <select id="years" className='w-full h-6 ' onChange={intryear} name="cars">
            <option value="5">5 Years</option>
            <option value="10">10 Years</option>
            <option value="15">15 Years</option>
            <option value="20">20 Years</option>
            <option value="25">25 Years</option>
          </select>
          </fieldset>
          </label>
        </div>
      </div>
      
      <div className='w-1/3 m-6'>
        <div className='text-center text-3xl font-bold p-5 '>Monthly Payment: $ {((val*rate)/(years*10000*12)*downpayment).toFixed(2)}</div>
    <Pie data={data} />
    </div>
    </div>
  )
}

export default Chartjs

// (val(1=(rate/100))/(years*12)).toFixed(2)