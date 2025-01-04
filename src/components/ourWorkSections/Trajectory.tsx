import React from 'react';
interface TrajectoryProps {
    projects: string;
    hours: string;
    satisfaction: string;
}

const Trajectory: React.FC<TrajectoryProps> = ({projects, hours, satisfaction}) => {
    return (
        <>
            <div>
                <span>{projects}</span>
            </div>
            <div className="mt-4">
                <span>{hours}</span>
            </div>
            <div className="mt-4">
                <span>{satisfaction}</span>
            </div>
        </>
    );
}

export default Trajectory;