import { eventType } from '../types';

export const setSizeAndPosition = (arr: eventType[]) => {
  // Sort events by start time
  const sortedEvents = [...arr].sort((a, b) => a.start - b.start);

  // Group overlapping events
  const overlappingGroups = [];
  for (const event of sortedEvents) {
    let placed = false;
    for (const group of overlappingGroups) {
      if (group.some((el) => 
        (event.start < el.end && event.end > el.start))) {
        group.push(event);
        placed = true;
        break;
      }
    }
    if (!placed) {
      overlappingGroups.push([event]);
    }
  }

  // Calculate width and left position for each event
  return sortedEvents.map((event) => {
    const group = overlappingGroups.find((group) => group.includes(event));
    const eventWidth = 200 / group.length;
    const index = group.indexOf(event);

    return {
      ...event,
      width: eventWidth,
      left: 50 + index * eventWidth,
    };
  });
};