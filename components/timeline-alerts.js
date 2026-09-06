import React from 'react';

const TimelineAlerts = ({ alerts }) => {
    return (
        <div className="timeline-alerts">
            <h2>Timeline & Alerts</h2>
            <div className="alerts-list">
                {alerts.map((alert, index) => (
                    <div key={index} className="alert-card">
                        <h3>{alert.title}</h3>
                        <p>{alert.description}</p>
                        <span className="alert-time">{alert.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimelineAlerts;