import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import { UserModel } from '../models/user.model';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient, public router: Router) {}

  getNotices(): Observable<any> {
    const url = environment.URL_SERVICES + 'noticias';
    return this.http.get(url);
  }

  getPrograms(): Observable<any> {
    const url = environment.URL_SERVICES + 'programas';
    return this.http.get(url);
  }

  registerUser(user: UserModel): Observable<any> {
    const url = environment.URL_SERVICES + 'registro';
    return this.http.post(url, user).pipe(
      map(() => {
        Swal.fire(
          'Realizado',
          'Usuario ' +
            user.name +
            ' ' +
            user.family_name +
            'Registrado Exitosamente',
          'success'
        );
        return true;
      }),
      catchError((err, caught) => {
        Swal.fire('Error al crear Usuario', '' + err + '', 'error');
        return throwError(err);
      })
    );
  }
}
