import { useEffect, useRef, useState, useCallback } from "react";

export function useRoundTimer({
    duration = 10000,
    interval = 100,
    onTimeEnd = () => { }
} = {}) {

    const [timeLeft, setTimeLeft] = useState(duration);
    const [active, setActive] = useState(false);
    const intervalRef = useRef(null);

    // Interval principal
    useEffect(() => {
        if (!active) return;

        intervalRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 0) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    setActive(false);
                    onTimeEnd();
                    return 0;
                }
                return prev - interval;
            });
        }, interval);

        return () => {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        };
    }, [active, interval, onTimeEnd]);

    // Métodos ESTABLES
    const startTimer = useCallback((delay = 50) => {
        setTimeLeft(duration);
        setTimeout(() => {
            setActive(true);
        }, delay);
    }, [duration]);

    const stopTimer = useCallback(() => {
        setActive(false);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }, []);

    const resetTimer = useCallback(() => {
        stopTimer();
        setTimeLeft(duration);
    }, [duration, stopTimer]);

    const calculatePoints = useCallback(() => {
        const base = 100; // por acertar
        const bonus = Math.floor(timeLeft / 100);
        return base + bonus;
    }, [timeLeft]);

    return { timeLeft, startTimer, stopTimer, resetTimer, calculatePoints };
}