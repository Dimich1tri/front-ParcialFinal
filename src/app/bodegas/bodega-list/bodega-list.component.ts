import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  inject,
  signal
} from '@angular/core';
import { mensajeDeError } from '../../core/api-error';
import { Bodega } from '../../models/bodega.model';
import { ProductoConBodega } from '../../models/producto.model';
import { BodegaService } from '../../services/bodega.service';
import { BodegaFormComponent } from '../bodega-form/bodega-form.component';

@Component({
  selector: 'app-bodega-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BodegaFormComponent],
  templateUrl: './bodega-list.component.html'
})
export class BodegaListComponent implements OnInit {
  private readonly service = inject(BodegaService);

  protected readonly bodegas = signal<Bodega[]>([]);
  protected readonly error = signal('');

  protected readonly productosConBodega = computed<ProductoConBodega[]>(() =>
    this.bodegas().flatMap(bodega =>
      (bodega.productos ?? []).map(producto => ({
        ...producto,
        nombreBodega: bodega.nombre
      }))
    )
  );

  ngOnInit(): void {
    this.cargar();
  }

  protected cargar(): void {
    this.error.set('');
    this.service.list().subscribe({
      next: lista => this.bodegas.set(lista),
      error: err => this.error.set(mensajeDeError(err, 'Error al cargar las bodegas'))
    });
  }
}
