class Color {
  generate() {
    const red = this._random();
    const green = this._random();
    const blue = this._random();
    console.log(`${red}, ${green}, ${blue}`);
  }

  _random() {
    const max = 256;
    const min = 0;
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

const color = new Color();
color.generate();
