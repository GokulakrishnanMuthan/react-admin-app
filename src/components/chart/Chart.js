import React from 'react'
import './chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {    name: 'Januvary',    amt: 2400  },
  {    name: 'February',      amt: 2210  },
  {    name: 'March',    amt: 2290  },
  {    name: 'April',    amt: 2000  },
  {    name: 'May',    amt: 2181  },
  {    name: 'June',    amt: 2500  },
  {   name: 'July',    amt: 2100  }
];

const Chart = () => {
  return (
    <div className='chart'>
          <div className="title">Last 6 month Revenue</div>
        <ResponsiveContainer width="100%" aspect={3/1}>
          <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Area type="monotone" dataKey="amt" stackId="1" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart