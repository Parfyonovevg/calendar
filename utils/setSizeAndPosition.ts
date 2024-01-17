import { eventType } from '../types';

export const setSizeAndPosition = (arr: eventType[]) => {
  return arr.map((event) => {
    const { start, end } = event;

    const overlappingEvents = arr.filter((el) => {
      return (
        (start >= el.start && start < el.end) ||
        (end > el.start && end <= el.end)
      );
    });

    const numOverlappingEvents = overlappingEvents.length;
    const eventWidth = 200 / numOverlappingEvents;

    overlappingEvents.forEach((el, index) => {
      el.width = eventWidth;
      el.left = 50 + index * eventWidth;
    });

    return event;
  });
};
