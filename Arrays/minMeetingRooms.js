var minMeetingRooms = function(intervals) {
    let start = intervals.slice().sort((a,b) => {
      return a.start - b.start;
    });
    let end = intervals.slice().sort((a,b) => {
      return a.end - b.end;
    })
    let rooms = 0;
    let ends = 0;
    for(let i = 0; i<intervals.length; i++) {
      if(start[i].start < end[ends].end) {
        rooms++
      } else {
        ends++;
      }
    }
    return rooms;
};