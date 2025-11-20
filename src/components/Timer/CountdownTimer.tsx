// @ts-nocheck
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconCalendar } from "@tabler/icons-react";
import {CountdownTimerProps, TimeLeft} from "@/Interfaces/astroInterfaces";

const CountdownTimer: React.FC<CountdownTimerProps> = ({ eventDate}) => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(eventDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft(eventDate));
        }, 1000);

        return () => clearInterval(interval);
    }, [eventDate]);

    if (timeLeft.total <= 0) {
        return <div className="text-center text-xl text-green-500">The event has started!</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center h-[50px]  text-white rounded-md p-6 shadow-lg">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="flex items-center  mb-1 gap-2"
            >

            </motion.div>
            <div className="flex gap-4 border-1 rounded-2xl border-indigo-600 p-1">
                <IconCalendar size={25} className="text-indigo-600" />
                {Object.keys(timeLeft).map((unit, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center text-2xl font-bold"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <span>{timeLeft[unit]}</span>
                        <span className="text-sm font-medium ml-1">{unit[0]}</span> {/* Unit abbreviation */}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

function getTimeLeft(eventDate:string):TimeLeft {
    const total = Date.parse(eventDate) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { days, hours, minutes };
}

export default CountdownTimer;
