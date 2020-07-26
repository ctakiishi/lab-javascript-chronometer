class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    setInterval(() => { this.currentTime += 1; }, 1000);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    const remainSeconds = this.currentTime - this.getMinutes() * 60;
    return remainSeconds;
  }

  twoDigitsNumber(number) {
    this.number = number;
    if (number < 10) {
      return `0${String(number)}`;
    }
    return String(number);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`;
  }
}
