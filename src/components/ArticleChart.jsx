import React from 'react'
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


const ArticleChart = ({data}, {title}) => {

  console.log(title)

  const datosGrafico = data.map((dato) => ({
    name: dato.BC,
    price: dato.PRICE, 
  }));

  return (
    <div className="container m-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <h3>{title}</h3>
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