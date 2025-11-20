import React from "react";

interface SparklingTextProps {
    text: string; // Original text to apply the effect
    className?: string; // Additional classes
}

const SparklingText: React.FC<SparklingTextProps> = ({ text, className = "" }) => {
    return (
        <span className={`text-white ${className}`}>
      {text.split("").map((char, index) => (
          <span
              key={index}
              className={`inline-block sparkle-effect ${char === " " ? "w-4" : ""}`}
              style={{
                  animationDelay: `${index * 0.4}s`, // Adjust delay per character
                  display: char === " " ? "inline" : "inline-block",
              }}
          >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
    );
};

export default SparklingText;
