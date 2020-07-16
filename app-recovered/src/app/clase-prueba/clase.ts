export class Apostador {
  puntos: number;

  constructor() {
    this.puntos = 100;
  }

  recibePerdida(perdida: number) {
    if (perdida >= this.puntos) {
      this.puntos = 0;
    } else {
      this.puntos = this.puntos - perdida;
    }
    return this.puntos;
  }
}
