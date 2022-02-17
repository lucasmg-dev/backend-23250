export default class Perimetro {
  static square(lado: number): number {
    return lado * 4;
  }

  static rectangle(base: number, altura: number): number {
    return base * 2 + altura * 2;
  }

  static circle(radio: number): number {
    return Math.PI * 2 * radio;
  }
}
