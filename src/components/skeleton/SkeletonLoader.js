import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = ({ count }) => {
    return (
        <div className="timeline skeleton-timeline">
            {Array.from({ length: count }).map((_, index) => (
                <div className="timeline-container skeleton-container" key={index}>
                    <div className="timeline-date skeleton-date"></div>
                    <div className="timeline-content skeleton-content">
                        <div className="timeline-event skeleton-event"></div>
                        <div className="timeline-arrow skeleton-arrow"></div>
                    </div>
                </div>
            ))}
            <div className="timeline-container skeleton-container">
                <div className="timeline-content skeleton-content">
                    <div className="timeline-event skeleton-event"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
