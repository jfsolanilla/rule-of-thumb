import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Celebrity } from '../../interfaces/celebrity';
import { celebritiesList } from '../../../helpers/celebrity-mock';

@Injectable({
  providedIn: 'root'
})
export class CelebritiesService {

  /**
  * Gets data from celebrities - When service done, remove mocked data
  * @returns observable with mocked data
  */
  get(): Observable<Celebrity[]> {
    return of(celebritiesList);
  }
}
