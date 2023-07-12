import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


const PrixMoyenChart = ({data}) => {  
  const datosGrafico = Object.entries(data).map((dato) => ({
    mkp: dato[0],
    price: parseInt(dato[1].toFixed(0)), 
  }));

  const cleanData = datosGrafico.sort((a, b) => a.price - b.price);
  
  return (
    <div className='container'>
      <h4 className='text-center'>Prix Moyen par Site</h4>
      <ResponsiveContainer aspect={2}>
          <BarChart 
          data={cleanData} 
          margin={{
            top:5,
            right:30,
            left:30,
            bottom:5
          }}
          >
           <CartesianGrid strokeDasharray='4 1 2'/>
           <XAxis dataKey="mkp"/>
           <YAxis dataKey="price"/>
           <Tooltip />
           <Legend />
           <Bar dataKey='price' fill='#1ee3cf'/>
          </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PrixMoyenChart