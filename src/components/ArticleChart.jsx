import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


const ArticleChart = ({data}) => {

  const datosGrafico = data.map((dato) => ({
    name: dato.BC,
    price: dato.PRICE, 
  }));

  return (
    <div className="container border border-4 p-4">
          <ResponsiveContainer width="100%" aspect={2}>
          <BarChart           
          data={datosGrafico}
          width={600} 
          height={400} 
          margin={{
            top:5,
            right:30,
            left:30,
            bottom:5
          }}
          >
           <CartesianGrid strokeDasharray='4 1 2'/>
           <XAxis dataKey="name"/>
           <YAxis />
           <Tooltip />
           <Legend />
           <Bar dataKey='price' barSize={60} fill='#00c097'/>
          </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ArticleChart