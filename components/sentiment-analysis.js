import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import mockData from '../js/data/mock-data';

const SentimentAnalysis = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const sentimentData = mockData.sentimentAnalysis;
        const chartData = {
            labels: ['Supportive', 'Against', 'Angry', 'Fear', 'Sarcasm'],
            datasets: [
                {
                    label: 'Sentiment Analysis',
                    data: [
                        sentimentData.supportive,
                        sentimentData.against,
                        sentimentData.angry,
                        sentimentData.fear,
                        sentimentData.sarcasm,
                    ],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        };
        setData(chartData);
    }, []);

    return (
        <div className="sentiment-analysis">
            <h2>Sentiment Analysis</h2>
            <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
    );
};

export default SentimentAnalysis;