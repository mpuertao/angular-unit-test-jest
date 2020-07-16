import { of } from 'rxjs';
import { RecoveredListComponent } from './recovered-list.component';

describe('Pruebas para RecoveredListComponent', () => {
  let component: RecoveredListComponent;
  let recovered;
  let recoveredServiceMock;

  beforeEach(() => {
    recovered = [
      {id: 1, name: 'Mao', age: 5},
      {id: 2, name: 'Danny', age: 5}
    ],
    recoveredServiceMock = {
      getAllRecovered: jest.fn(),
      getRecoveredById: jest.fn(),
      addRecovered: jest.fn(),
      deleteRecovered: jest.fn() };
    component = new RecoveredListComponent(recoveredServiceMock);
  });

  describe( 'Pruebas para el metodo getAllRecovered', () => {
    test( 'Debería devolver la cantidad de recovered de la lista segun el servicio', () => {
        // Arrange
        recoveredServiceMock.getAllRecovered.mockReturnValue(of(recovered));

        // Act
        component.ngOnInit();
        //component.getAllRecovered();

        //Assert
        expect(component.recovered.length).toBe(2);
    });

    test( 'Debería llamar a getAllRecovered como servicio', () => {
        recoveredServiceMock.getAllRecovered.mockReturnValue(of(recovered));
        component.getAllRecovered();
        expect(recoveredServiceMock.getAllRecovered).toHaveBeenCalled();
        expect(recoveredServiceMock.getAllRecovered).toHaveBeenCalledWith();
    });
  });
});
