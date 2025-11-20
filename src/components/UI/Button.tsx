import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
            <div className="card-wrapper min-h-[40px] min-w-[70px] my-1">
                <button className="card-content flex items-center justify-center text-sm text-primary-blue border-none">
                    {children}
                </button>
            </div>

    );
};

export default Button;