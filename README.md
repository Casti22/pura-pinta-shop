# Pura Pinta Shop - Landing Page

Landing responsive para Pura Pinta Shop creada con HTML, CSS y JavaScript.

## Estructura de archivos

```txt
pura-pinta-shop/
├── index.html
├── style.css
├── script.js
├── README.md
└── imgs/
    ├── logo.jpg
    ├── hero-1.jpg
    ├── hero-2.jpg
    ├── product-1.jpg
    ├── product-2.jpg
    └── product-3.jpg
```

## Cómo usar

1. Abre `index.html` en cualquier navegador.
2. Para subirlo a hosting, carga toda la carpeta `pura-pinta-shop` completa.
3. No borres la carpeta `imgs`, porque allí viven las imágenes que usa la landing.

## Cómo cambiar el número de WhatsApp

En `script.js`, cambia esta línea:

```js
const WHATSAPP = '59175693673';
```

Usa el número con código de país y sin signos, espacios ni `+`.

## Cómo agregar una nueva prenda

Abre `script.js` y busca el arreglo:

```js
const products = [
  // prendas aquí
];
```

Copia un bloque de producto existente y pégalo antes del cierre `];`.

Ejemplo:

```js
{
  code: 'PP-016',
  name: 'Hoodie Vintage Negro',
  price: 'Bs. 220',
  size: 'L',
  category: 'Hoodies',
  color: 'Negro',
  material: 'Felpa gruesa',
  condition: 'Muy buen estado',
  fit: 'Oversized',
  tag: 'Nuevo drop',
  description: 'Hoodie negro oversized, ideal para outfit urbano.',
  images: ['imgs/hoodie-negro-1.jpg', 'imgs/hoodie-negro-2.jpg', 'imgs/hoodie-negro-3.jpg']
}
```

Importante: si agregas más de una prenda, cada `code` debe ser único.

## Cómo cargar fotos de prendas

1. Copia tus fotos dentro de la carpeta `imgs`.
2. Usa nombres simples, sin espacios ni acentos. Ejemplo:
   - `hoodie-negro-1.jpg`
   - `hoodie-negro-2.jpg`
   - `sudadera-azul-frente.jpg`
3. En `script.js`, coloca esas rutas dentro de `images`:

```js
images: ['imgs/hoodie-negro-1.jpg', 'imgs/hoodie-negro-2.jpg']
```

La primera imagen será la foto principal de la tarjeta.

## Cómo quitar una prenda

En `script.js`, elimina el bloque completo de esa prenda dentro de `products`.

Cada bloque empieza con `{` y termina con `},`.

Ejemplo de bloque a eliminar:

```js
{
  code: 'PP-001',
  name: 'Sudadera Marant Blanca',
  ...
},
```

Cuida no borrar accidentalmente el `[` inicial ni el `];` final del arreglo.

## Filtros por categoría, color y talla

Los filtros se generan automáticamente a partir de estos campos de cada producto:

```js
category: 'Sudaderas',
color: 'Gris',
size: 'M'
```

Si agregas una prenda con una categoría nueva, por ejemplo:

```js
category: 'Poleras'
```

El filtro mostrará `Poleras` automáticamente.

## Paginación

La landing muestra 12 prendas por página.

Para cambiar ese número, abre `script.js` y modifica:

```js
const PRODUCTS_PER_PAGE = 12;
```

Por ejemplo, para mostrar 8 prendas por página:

```js
const PRODUCTS_PER_PAGE = 8;
```

## Recomendaciones de imágenes

- Usa formato `.jpg` o `.png`.
- Tamaño recomendado: mínimo 900 px de alto.
- Mantén estilo similar para que la tienda se vea profesional.
- La primera imagen de cada producto debe ser la más atractiva.

## Archivos principales

- `index.html`: estructura de la landing.
- `style.css`: colores, diseño responsive, estilos de cards, filtros y popup.
- `script.js`: productos, filtros, paginación, popup y enlaces a WhatsApp.
