import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Bodega, BodegaRequest } from '../models/bodega.model';

@Injectable({ providedIn: 'root' })
export class BodegaService {
  private readonly http = inject(HttpClient);
  private readonly url = '/bodegas';

  list(): Observable<Bodega[]> {
    return this.http.get<Bodega[]>(this.url);
  }

  create(datos: BodegaRequest): Observable<Bodega> {
    return this.http.post<Bodega>(this.url, datos);
  }
}
