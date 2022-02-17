export default class Superficie {
  static square(lado: number): number {
    return lado ** 2;
  }
  static rectangle(base: number, altura: number): number {
    return base * altura;
  }
  static circle(radio: number): number {
    return Math.PI * radio ** 2;
  }
}
