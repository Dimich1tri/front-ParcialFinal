import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { mensajeDeError } from '../../core/api-error';
import { Bodega } from '../../models/bodega.model';
import { BodegaService } from '../../services/bodega.service';

@Component({
  selector: 'app-bodega-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  templateUrl: './bodega-form.component.html'
})
export class BodegaFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly service = inject(BodegaService);

  readonly creada = output<Bodega>();
  protected readonly error = signal('');

  protected readonly form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.pattern(/\S/)]],
    ubicacion: ['', [Validators.required, Validators.pattern(/\S/)]]
  });

  protected guardar(): void {
    if (this.form.invalid) {
      return;
    }
    this.error.set('');
    const valores = this.form.getRawValue();
    this.service
      .create({
        nombre: valores.nombre.trim(),
        ubicacion: valores.ubicacion.trim()
      })
      .subscribe({
        next: bodega => {
          this.form.reset();
          this.creada.emit(bodega);
        },
        error: err => {
          this.error.set(mensajeDeError(err, 'Error al registrar la bodega'));
        }
      });
  }
}
