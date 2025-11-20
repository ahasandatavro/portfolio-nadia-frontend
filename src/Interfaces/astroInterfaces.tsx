
export interface CountdownTimerProps {
    eventDate: string;
}

export interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
}

// types/interfaces.ts

export interface FormValues {
    name: string;
    email: string;
    bio: string;
}

export interface ImageUploadHandler {
    (files: File[]): void;
}

