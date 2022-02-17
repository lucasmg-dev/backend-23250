export default class Colorr {
  generate(max, min) {
    const red = this._random(max, min);
    const green = this._random(max, min);
    const blue = this._random(max, min);
    console.log(`${red}, ${green}, ${blue}`);
  }

  _random(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

const color = new Colorr();
color.generate(255, 0);
