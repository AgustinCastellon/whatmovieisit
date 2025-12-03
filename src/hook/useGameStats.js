import { useCallback, useState } from "react";

export function useGameStats() {

    const [roundStats, setRoundStats] = useState([]);

    const addRoundStats = useCallback((timeLeftMs, points, opponents, correct) => {
        const stats = {
            time: timeLeftMs / 1000,
            points,
            opponents,
            win: correct
        }
        console.log(stats)
        setRoundStats(prev => [...prev, stats])
    }, [])

    const averageTime = roundStats.length > 0 ?
        roundStats.reduce((a, b) => a + b.time, 0) / roundStats.length
        : 0;

    const bestScore =
        roundStats.length > 0
            ? Math.max(...roundStats.map(r => r.points))
            : 0;

    const totalPoints = roundStats.length > 0 ?
        roundStats.reduce((a, b) => a + b.points, 0)
        : 0;

    const accuracy = roundStats.length > 0
        ? (roundStats.filter(r => r.win).length / roundStats.length) * 100
        : 0;


    const maxStreak = (() => {
        let best = 0;
        let current = 0;

        for (const r of roundStats) {
            if (r.win) {
                current++;
                best = Math.max(best, current);
            } else {
                current = 0;
            }
        }

        return best;
    })();

    const resetStats = useCallback(() => {
        setRoundStats([]);
    }, []);

    return {
        roundStats,
        addRoundStats,
        averageTime,
        bestScore,
        totalPoints,
        accuracy,
        maxStreak,
        resetStats
    };

}