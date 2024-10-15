export function formatEventDescription(durationInMinutes: number) {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  const minutesStrirng = `${minutes} ${minutes > 1 ? 'mins' : 'min'}`;
  const hourString = `${hours} ${hours > 1 ? 'hrs' : 'hr'}`;

  if (hours === 0) return minutesStrirng;
  if (minutes === 0) return hourString;
  return `${hourString} ${minutesStrirng}`;
}

export function formatTimezoneOffset(timezone: string) {
  return new Intl.DateTimeFormat(undefined, {
    timeZone: timezone,
    timeZoneName: 'shortOffset',
  })
    .formatToParts(new Date())
    .find((part) => part.type == 'timeZoneName')?.value;
}
