/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if(intervals.length < 1) return [];
    intervals = intervals.sort((a,b) => {
        return a.start-b.start;
    });
    let overlap = [];
    
    let interval = intervals[0];
    for(let i = 1; i<intervals.length; i++) {
  
        const current = intervals[i];
        if(interval.end >= current.start) {
            interval.start = Math.min(interval.start, current.start);
            interval.end = Math.max(interval.end, current.end);
        } else {
            overlap.push(interval);
            interval = current;
            if(i === intervals.length -1) {
                overlap.push(interval);
                interval = null;
            }
        }
    }
    if(interval) {
        overlap.push(interval);
    }
    return overlap;
};