import { RecoveredPipe } from './recovered.pipe';

describe ('Pruebas para el pipe de recovered', () => {
test('debería mostrar "no recuperado totalmente" si recovered es =< 5', () => {
    const pipe = new RecoveredPipe();

    expect(pipe.transform(5)).toEqual('5 (no recuperado totalmente)');
  });

test('deberia mostrar "recuperado" si recovered es >= 16', () => {
    const pipe = new RecoveredPipe();

    expect(pipe.transform(17)).toEqual('17 (recuperado)');
  });
});
