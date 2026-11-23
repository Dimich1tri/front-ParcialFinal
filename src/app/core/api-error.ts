import { HttpErrorResponse } from '@angular/common/http';

export function mensajeDeError(err: unknown, porDefecto: string): string {
  if (err instanceof HttpErrorResponse) {
    const cuerpo = err.error as { mensaje?: string } | null;
    if (cuerpo && typeof cuerpo.mensaje === 'string' && cuerpo.mensaje.trim()) {
      return cuerpo.mensaje;
    }
  }
  return porDefecto;
}
