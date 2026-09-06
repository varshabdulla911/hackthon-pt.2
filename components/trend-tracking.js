import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import mockData from '../js/data/mock-data';

const TrendTracking = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Trend Growth',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    });

    useEffect(() => {
        const fetchData = () => {
            const trends = mockData.trends; // Assuming mockData has a trends array
            const labels = trends.map(trend => trend.date);
            const trendData = trends.map(trend => trend.value);

            setData({
                labels: labels,
                datasets: [
                    {
                        ...data.datasets[0],
                        data: trendData,
                    },
                ],
            });
        };

        fetchData();
    }, []);

    return (
        <div className="trend-tracking">
            <h2>Trend Tracking</h2>
            <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
    );
};

export default TrendTracking;