import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { RecoveredModel } from '../../../recovered/recovered-model/recovered.model';
import { MessageService } from '../messages/message.service';


@Injectable({
  providedIn: 'root',
})
export class RecoveredService {

  private recoveredUrl = '/recovered';

  constructor(
    private http: HttpClient,
    private messageService: MessageService ) {}

  public getAllRecovered(): Observable<RecoveredModel[]> {
    return this.http
      .get<RecoveredModel[]>(this.recoveredUrl)
      .pipe(
        tap(recovered => this.log(`fetched recovered`)),
        catchError(this.handleError('getRecovered', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('RecoveredService: ' + message);
  }
}
