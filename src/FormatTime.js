export default function FormattedTime() {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minutes = currentTime.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let timeNow = `${hour}:${minutes}`;
    return timeNow;
  }