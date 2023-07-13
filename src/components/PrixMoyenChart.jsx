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
      <div className="row">
        <div className="col">
        <h4 className='text-center'>Prix Moyen par Site</h4>
        </div>
      </div>
      <div className="row py-5">
        <div className="col">
        <ResponsiveContainer aspect={2}>
          <BarChart 
          width={150} height={40}
          data={cleanData} 
          >
           <CartesianGrid strokeDasharray='4 1 2'/>
           <XAxis dataKey="mkp"/>
           <YAxis dataKey="price"/>
           <Tooltip />
           <Legend />
           <Bar dataKey='price'  barSize={25} fill='#1ee3cf'/>
          </BarChart>
      </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default PrixMoyenChart