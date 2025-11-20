import React, { ReactNode } from "react";

// Define the props type
interface HeadingProps {
    children: ReactNode;
}

// Functional Component
const Heading: React.FC<HeadingProps> = ({ children }) => {
    return (
        <h2 className="text-4xl font-bold text-white mb-10 text-center font-orbitron">
            {children}
        </h2>
    );
};

export default Heading;
