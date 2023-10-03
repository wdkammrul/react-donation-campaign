// import React, { useCallback, useEffect, useState } from "react";

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {

    // step-1 
    const [yourDonation, setYourDonation] = useState([])
    const [totalDonation, setTotalDonation] = useState([])

    // step-3 
   const totalDonationData = useLoaderData()


    // step-4  
    useEffect(() => {

        // step-5 
        const donateItems = JSON.parse(localStorage.getItem('donate'))
        if(donateItems){
            setYourDonation(donateItems)
            setTotalDonation(totalDonationData)
        }
    }, [totalDonationData])

    const yourDonationData = totalDonation.length - yourDonation.length;

    const data = [
        { name: 'Group A', value: yourDonation.length },
        { name: 'Group B', value: yourDonationData }

    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div>
            <div className="flex justify-center">
                <PieChart width={500} height={500}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className="flex justify-center items-center ">
                <div className="flex gap-5 items-center mr-8">
                    <h3>Your Donation</h3><div className="h-1 w-11 bg-[#FF444A]"></div>
                </div>
                <div className="flex gap-5 items-center">
                    <h3>Total Donation</h3><div className="h-1 w-11 bg-[#00C49F]"></div>
                </div>
            </div>
        </div>
      
    );
};

export default Statistics;