// This file contains functions to create and render interactive charts using Chart.js or D3.js for the various sections of the dashboard.

const createSentimentChart = (data) => {
    const ctx = document.getElementById('sentimentChart').getContext('2d');
    const sentimentChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Supportive', 'Against', 'Angry', 'Fear', 'Sarcasm'],
            datasets: [{
                label: 'Sentiment Analysis',
                data: data,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

const createTrendChart = (data) => {
    const ctx = document.getElementById('trendChart').getContext('2d');
    const trendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Trend Tracking',
                data: data.values,
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Volume'
                    }
                }
            }
        }
    });
};

const createDemographicsChart = (data) => {
    const ctx = document.getElementById('demographicsChart').getContext('2d');
    const demographicsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Audience Demographics',
                data: data.values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Audience Demographics'
                }
            }
        }
    });
};

export { createSentimentChart, createTrendChart, createDemographicsChart };