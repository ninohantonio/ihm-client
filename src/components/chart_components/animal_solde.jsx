import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AnimalSoldeChart = () => {

    const data = [
        {name: 'Janvier', uv: 4000},
        {name: 'Février', uv: 3000},
        {name: 'Mars', uv: 2000},
        {name: 'Avril', uv: 2780},
        {name: 'Mai', uv: 1890},
        {name: 'Juin', uv: 2390},
        {name: 'Juillet', uv: 3490},
    ];
    return (
        <>
            <LineChart
                width={900}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
        </>
    )
};

export default AnimalSoldeChart;
