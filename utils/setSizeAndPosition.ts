import { eventType } from '../types';

export const setSizeAndPosition = (arr: eventType[]) => {
  const sortedEvents = [...arr].sort((a, b) => {
    if (a.start !== b.start) {
      return +a.start - +b.start;
    } else {
      return +b.duration - +a.duration;
    }
  });

  const overlappingGroups: eventType[][] = [];
  for (const event of sortedEvents) {
    let placed = false;
    for (const group of overlappingGroups) {
      if (group.some((el) => event.start < el.end && event.end > el.start)) {
        group.push(event);
        placed = true;
        break;
      }
    }
    if (!placed) {
      overlappingGroups.push([event]);
    }
  }

  overlappingGroups.forEach((group, i) => {
    for (let j = i + 1; j < overlappingGroups.length; j++) {
      if (
        group.some((event1) =>
          overlappingGroups[j].some(
            (event2) => event1.end > event2.start && event1.start < event2.end
          )
        )
      ) {
        group.push(...overlappingGroups[j]);
        overlappingGroups.splice(j, 1);
        j--;
      }
    }
  });

  // Calculate width and left position for each event
  return sortedEvents.map((event) => {
    const group = overlappingGroups.find((group) => group.includes(event));
    if (group) {
      const eventWidth = 200 / group.length;
      const index = group.indexOf(event);

      return {
        ...event,
        width: eventWidth,
        left: 50 + index * eventWidth,
      };
    }
    return event;
  });
};
