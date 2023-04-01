import { Apostador } from '../clase-prueba/clase';

describe ( 'Pruebas para la clase Apostador', () => {

  let apostador = new Apostador();

  beforeEach( () => {
    let apostador = new Apostador();
  });

  test( 'Se debe retornar el valor de 80 si la perdida es 20', () => {
      const resultado = apostador.recibePerdida(20);
      expect(resultado).toBe(80);
  });

  test( 'Se debe retornar el valor de 0 si la perdida es >= a 100', () => {
      const resultado = apostador.recibePerdida(100);
      expect(resultado).toBe(0);
  });
});
