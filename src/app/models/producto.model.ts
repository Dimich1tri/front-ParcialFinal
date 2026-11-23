export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
}

export interface ProductoConBodega extends Producto {
  nombreBodega: string;
}
