function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }

  const MINUTE = 60;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const YEAR = 365 * DAY;

  const years = Math.floor(seconds / YEAR);
  seconds -= years * YEAR;

  const days = Math.floor(seconds / DAY);
  seconds -= days * DAY;

  const hours = Math.floor(seconds / HOUR);
  seconds -= hours * HOUR;

  const minutes = Math.floor(seconds / MINUTE);
  seconds -= minutes * MINUTE;

  const parts = [];

  if (years > 0) {
    parts.push(`${years} year${years > 1 ? "s" : ""}`);
  }

  if (days > 0) {
    parts.push(`${days} day${days > 1 ? "s" : ""}`);
  }

  if (hours > 0) {
    parts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
  }

  if (minutes > 0) {
    parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
  }

  if (seconds > 0) {
    parts.push(`${seconds} second${seconds > 1 ? "s" : ""}`);
  }

  if (parts.length === 1) {
    return parts[0];
  }

  const last = parts.pop();
  return `${parts.join(", ")} and ${last}`;
}
