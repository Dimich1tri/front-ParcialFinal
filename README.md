# Bodegas y Productos — Frontend (`bodegas-frontend`)

Interfaz web desarrollada en **Angular 20** (TypeScript 5.9, componentes standalone, Signals, `ChangeDetectionStrategy.OnPush`, Reactive Forms y `HttpClient`) para registrar bodegas y consultar la tabla de productos asociados a cada bodega a partir del endpoint `GET /bodegas`.

## Estructura del proyecto

- `src/app/models/`: Interfaces `Bodega`, `BodegaRequest`, `Producto` y `ProductoConBodega`.
- `src/app/services/`: `BodegaService` (consumo HTTP de `GET /bodegas` y `POST /bodegas`).
- `src/app/bodegas/bodega-form/`: `BodegaFormComponent` (formulario reactivo para registrar bodegas con nombre y ubicación).
- `src/app/bodegas/bodega-list/`: `BodegaListComponent` (tabla de productos con su bodega correspondiente y tabla de bodegas registradas).
- `src/app/core/`: `api-error.ts` para extracción de mensajes de error HTTP.

## Requisitos

- **Node.js 20+** y **npm**.
- Backend (`bodegas-backend`) corriendo en `http://localhost:8080`.

## Instalación y ejecución

Desde la carpeta `bodegas-frontend/`:

```bash
npm install
npm start
```

La aplicación queda disponible en `http://localhost:4200` (con proxy de `/bodegas` hacia `http://localhost:8080`).

### Verificación de compilación y linter

```bash
npm run lint
npm run build
```
