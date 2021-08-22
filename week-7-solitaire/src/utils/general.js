export const ValueToShow = (value) => {
  switch (value) {
    case "13":
      return "K";
    case "12":
      return "Q";
    case "11":
      return "J";
    case "1":
      return "A";
    default:
      return value;
  }
};
export const TimeConverter = (secs) => { //A random function converts seconds to HH:MM:SS
  const sec_num = parseInt(secs, 10)
  const hours   = Math.floor(sec_num / 3600)
  const minutes = Math.floor(sec_num / 60) % 60
  const seconds = sec_num % 60

  return [hours,minutes,seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v,i) => v !== "00" || i > 0)
      .join(":")
}