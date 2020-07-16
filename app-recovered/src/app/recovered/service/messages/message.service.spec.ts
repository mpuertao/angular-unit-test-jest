import { MessageService } from './message.service';
describe('Pruebas para messageService', () => {
  test('No deberia tener mensajes al iniciar', () => {
    let service = new MessageService();

    expect(service.messages.length).toBe(0);
  });

  test('Debería agregar mensaje al ser llamado por add', () => {
    let service = new MessageService();

    service.add('RECUPERADO!!!');

    expect(service.messages.length).toBe(1);
    expect(service.messages).toEqual(['RECUPERADO!!!']);
  });

  test('Debería borrar los mensajes al ser llamado por clear', () => {
    let service = new MessageService();

    service.add('RECUPERADO!!!');
    service.clear();

    expect(service.messages.length).toBe(0);
  });
});
