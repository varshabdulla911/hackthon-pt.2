import React from 'react';
import { Bar } from 'react-chartjs-2';
import mockData from '../js/data/mock-data';

const AudienceDemographics = () => {
    const data = {
        labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
        datasets: [
            {
                label: 'Age Distribution',
                data: mockData.audienceDemographics.ageDistribution,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Geography Distribution',
                data: mockData.audienceDemographics.geographyDistribution,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Audience Demographics',
            },
        },
    };

    return (
        <div className="audience-demographics">
            <h2>Audience Demographics</h2>
            <Bar data={data} options={options} />
            <div className="demographics-info">
                <h3>Languages</h3>
                <ul>
                    {mockData.audienceDemographics.languages.map((language, index) => (
                        <li key={index}>{language}</li>
                    ))}
                </ul>
                <h3>Interests</h3>
                <ul>
                    {mockData.audienceDemographics.interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AudienceDemographics;