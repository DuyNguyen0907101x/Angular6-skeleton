import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor(private http: HttpClient) { }

  getText(): Observable<string> {
    return of('A text value!');
  }
}
