const WHATSAPP = '59175693673';
const PRODUCTS_PER_PAGE = 12;

const products = [
  {
    code: 'PP-001', name: 'Sudadera Wego Blanca', price: 'Bs. 75', size: 'M', category: 'Sudaderas', color: 'Blanco', gender: 'Mujer', material: 'Algodón mixto', condition: 'Nuevo', fit: 'Regular / ligeramente oversized', tag: 'Pieza única', description: 'Sudadera blanca con gráfico frontal. Ideal para outfit casual, jeans claros o pantalón cargo.', images: ['imgs/1b.jpg', 'imgs/1.jpg', 'imgs/2.jpg']
  },
  {
    code: 'PP-002', name: 'Sudadera Polham Azul Oscuro', price: 'Bs. 70', size: 'L', category: 'Sudaderas', color: 'Azul', gender: 'Unisex', material: 'Algodón mixto', condition: 'Excelente estado', fit: 'Oversized', tag: 'Nuevo drop', description: 'Polham azul minimalista, perfecto para estilo urbano limpio y zapatillas blancas.', images: ['imgs/3b.jpg', 'imgs/3.jpg', 'imgs/4.jpg']
  },
  {
    code: 'PP-003', name: 'Poleron Sellys Plomo Claro', price: 'Bs. 70', size: 'S / M', category: 'Sudaderas', color: 'Gris', gender: 'Unisex', material: 'Algodón con poliéster', condition: 'Muy buen estado', fit: 'Regular', tag: 'Única', description: 'Diseños que combinan estilo y comodidad, perfectos para cualquier ocasión', images: ['imgs/5b.jpg', 'imgs/5.jpg', 'imgs/6.jpg']
  },
  {
    code: 'PP-004', name: 'Sudadera Básica Saturday Durazno suave', price: 'Bs. 75', size: 'L', category: 'Sudaderas', color: 'Gris', gender: 'Mujer', material: 'Felpa gruesa', condition: 'Muy buen estado', fit: 'Oversized', tag: 'Premium find', description: 'Sudadera básica color durazno suave entero. Una de esas piezas que levantan cualquier outfit.', images: ['imgs/7b.jpg', 'imgs/7.jpg', 'imgs/8.jpg']
  },
  {
    code: 'PP-005', name: 'Sudadera Nike Ploma', price: 'Bs. 65', size: 'S', category: 'Sudaderas', color: 'Gris', gender: 'Unisex', material: 'Algodón ligero', condition: 'Muy buen estado', fit: 'Regular', tag: 'Básico fuerte', description: 'Sudadera Nike plomo simple y versátil. Buena base para looks casuales o minimalistas.', images: ['imgs/9b.jpg', 'imgs/9.jpg', 'imgs/10.jpg']
  },
  {
    code: 'PP-006', name: 'Sudadera Kakau Friends Azul Pizarra', price: 'Bs. 75', size: 'L', category: 'Sudaderas', color: 'Azul Pizarra', gender: 'Mujer', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Relaxed', tag: 'Vintage', description: 'Sudadera azul con vibra vintage y oversize relajado. Perfecta para outfit de día o paseo urbano.', images: ['imgs/11b.jpg', 'imgs/11.jpg', 'imgs/12.jpg']
  },
  {
    code: 'PP-007', name: 'Sudadera Básica Bluesteel Verde Militar', price: 'Bs. 70', size: 'M', category: 'Sudaderas', color: 'Verde', gender: 'Mujer', material: 'Algodón grueso', condition: 'Muy buen estado', fit: 'Oversized', tag: 'Retro', description: 'Sudadera verde con energía noventera. Ideal para un look relajado y diferente.', images: ['imgs/13b.jpg', 'imgs/13.jpg', 'imgs/14.jpg']
  },
  {
    code: 'PP-008', name: 'Poleron And Z Ploma líneas blancas', price: 'Bs. 70', size: 'M', category: 'Sudaderas', color: 'Plomo y blanco', gender: 'Unisex', material: 'Algodón mixto', condition: 'Excelente estado', fit: 'Regular', tag: 'Clean', description: 'Una pieza ploma con franjas blancas. Perfecta para outfit minimalista o streetwear.', images: ['imgs/15b.jpg', 'imgs/15.jpg', 'imgs/16.jpg']
  },
  {
    code: 'PP-009', name: 'Sudadera May * J Básica Negra', price: 'Bs. 70', size: 'L', category: 'Sudaderas', color: 'Negro', gender: 'Unisex', material: 'Algodón', condition: 'Nuevo', fit: 'Regular - Básico', tag: 'Soft', description: 'Tono negro, suave al tacto, sudaderá básica ideal para outfits claros y estilo casual limpio.', images: ['imgs/17b.jpg', 'imgs/17.jpg', 'imgs/18.jpg']
  },
  {
    code: 'PP-010', name: 'Sudadera Oliver in New York Gris Urbano Elite', price: 'Bs. 75', size: 'L', category: 'Sudaderas', color: 'Plomo Azulado', gender: 'Hombre', material: 'Algodón', condition: 'Muy buen estado', fit: 'Oversized', tag: 'Premium', description: 'Sudadera Azul Plomizo. Buena opción para clima frío y look urbano.', images: ['imgs/19b.jpg', 'imgs/19.jpg', 'imgs/20.jpg']
  },
  {
    code: 'PP-011', name: 'Poleron Plomo Winter Town', price: 'Bs. 70', size: 'M', category: 'Poleron', color: 'Gris', gender: 'Unisex', material: 'Algodón', condition: 'Muy buen estado', fit: 'Toon', tag: 'Sport', description: 'Poleron plomo con logo de Winter Town adelante y un diseño moderno de Winter Town en la parte trasera. Va muy bien con jeans y sneakers.', images: ['imgs/21b.jpg', 'imgs/21.jpg', 'imgs/22.jpg']
  },
  {
    code: 'PP-012', name: 'Sudadera Áta Vue Lila', price: 'Bs. 70', size: 'L', category: 'Sudaderas', color: 'Lila', gender: 'Mujer', material: 'Algodón mixto', condition: 'Buen estado', fit: 'Oversized', tag: 'Vintage', description: 'Sudadera lila con estampado en la parte delantera. Para quien quiere que el outfit no pase desapercibido.', images: ['imgs/23b.jpg', 'imgs/23.jpg', 'imgs/24.jpg']
  },
  {
    code: 'PP-013', name: 'Poleron Día Loco Plomo', price: 'Bs. 70', size: 'S', category: 'Poleron', color: 'Plomo', gender: 'Hombre', material: 'Algodón', condition: 'Excelente estado', fit: 'Fit', tag: 'Top drop', description: 'No todos los días salen perfectos… pero tu outfit sí 😎', images: ['imgs/29b.jpg', 'imgs/29.jpg', 'imgs/30.jpg']
  },
  {
    code: 'PP-014', name: 'Flor Rebelde Polerón Negro Floreado (Estilo Vintage)', price: 'Bs. 65', size: 'M', category: 'Sudadera', color: 'Plomo Oscuro', gender: 'Mujer', material: 'Felpa ligera', condition: 'Buen estado', fit: 'Sport', tag: 'Floreado', description: 'No todo lo floral es delicado… esto es actitud con estilo 😏🌸', images: ['imgs/31b.jpg', 'imgs/31.jpg', 'imgs/32.jpg']
  },
  {
    code: 'PP-015', name: 'Polerón JCB Athletic Modo Calle Pro', price: 'Bs. 70', size: 'M', category: 'Poleron', color: 'Plomo', gender: 'Hombre', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Top Drop', description: 'Poleron estilo urbano plomo oscuro con franjas blancas. Directo, limpio y con actitud 😎', images: ['imgs/33b.jpg', 'imgs/33.jpg', 'imgs/34.jpg']
  },
  {
    code: 'PP-016', name: 'Sudadera Disney (Mikey Mouse) Verde Encanto', price: 'Bs. 70', size: 'M', category: 'Sudaderas', color: 'Verde', gender: 'Mujer', material: 'Algodón', condition: 'Muy buen estado', fit: 'Regular', tag: 'Top Drop', description: 'La “Verde Encanto” mezcla lo clásico de Mickey con un estilo oversized que está full tendencia. Ese detalle tipo doble capa le da un look más trabajado sin esfuerzo.', images: ['imgs/35b.jpg', 'imgs/35.jpg', 'imgs/36.jpg']
  },
  {
    code: 'PP-017', name: 'Sudadera L.LAMO Panda Vibe', price: 'Bs. 70', size: 'M', category: 'Sudadera', color: 'Morado', gender: 'Mujer', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Oversized', tag: 'Top Drop', description: 'La “Panda Vibe” es esa prenda que roba miradas sin esfuerzo. Con sus panditas en relieve tipo lana 🐼🔥, mezcla lo tierno con un look urbano relajado.', images: ['imgs/39b.jpg', 'imgs/39.jpg', 'imgs/40.jpg']
  },
  {
    code: 'PP-018', name: 'Polerón NEPA Geo Flow', price: 'Bs. 70', size: 'M / L', category: 'Poleron', color: 'Plomo', gender: 'Hombre', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Premium Find', description: 'El “Geo Flow” es para los que saben que los detalles hacen la diferencia. Diseño limpio con figuras sutiles al frente y un toque inesperado atrás 🔺🔥.', images: ['imgs/41b.jpg', 'imgs/41.jpg', 'imgs/42.jpg']
  },
  {
    code: 'PP-019', name: 'Sudadera Sweetee Verde Rebelde Bart Simpson', price: 'Bs. 70', size: 'M', category: 'Sudadera', color: 'Verde', gender: 'Hombre', material: 'Algodón', condition: 'Muy buen estado', fit: 'Regular', tag: 'Urban', description: 'La “Verde Rebelde” trae a Bart en modo calle. Un diseño que mezcla lo clásico con ese vibe urbano que no pasa desapercibido.', images: ['imgs/47b.jpg', 'imgs/47.jpg', 'imgs/48.jpg']
  },
  {
    code: 'PP-020', name: 'Sudadera TOPTEN Libre Mood', price: 'Bs. 70', size: 'S', category: 'Sudadera', color: 'Plomo Oscuro', gender: 'Mujer', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Sport', tag: 'Vintage', description: 'Simple… pero con mensaje 😎. Ideal para hacer deporte🖤', images: ['imgs/49b.jpg', 'imgs/49.jpg', 'imgs/50.jpg']
  },
  {
    code: 'PP-021', name: 'Sudadera Project M Azul Esencial', price: 'Bs. 70', size: 'M', category: 'Sudadera', color: 'Azul Plomizo', gender: 'Unisex', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Pieza Única', description: 'Lo básico… pero bien hecho 😎', images: ['imgs/51b.jpg', 'imgs/51.jpg', 'imgs/52.jpg']
  },
  {
    code: 'PP-022', name: 'Sudadera FIVE Sugar Drop', price: 'Bs. 70', size: 'M', category: 'Sudadera', color: 'Celeste', gender: 'Mujer', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Sport', tag: 'Básica', description: 'Suave a la vista… pero con flow 🍬🔥', images: ['imgs/53b.jpg', 'imgs/53.jpg', 'imgs/54.jpg']
  },
  {
    code: 'PP-023', name: 'Polerón Rojo Fuego Dorado', price: 'Bs. 65', size: 'L', category: 'Poleron', color: 'Rojo', gender: 'Mujer', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Vintage', description: 'Intenso… con un toque de elegancia 🔥✨', images: ['imgs/55b.jpg', 'imgs/55.jpg', 'imgs/56.jpg']
  },
  {
    code: 'PP-024', name: 'Sudadera Nike Clean Power', price: 'Bs. 65', size: 'XL', category: 'Sudadera', color: 'Plomo Claro', gender: 'Hombre', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Oversized', tag: 'Básica', description: 'Menos es más… y esto lo demuestra 💯', images: ['imgs/57b.jpg', 'imgs/57.jpg', 'imgs/58.jpg']
  },
  {
    code: 'PP-025', name: 'Polerón Anhelon Código BM6', price: 'Bs. 70', size: 'M', category: 'Poleron', color: 'Plomo', gender: 'Unisex', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Vintage', description: 'Minimalista… pero con identidad 😎', images: ['imgs/59b.jpg', 'imgs/59.jpg', 'imgs/60.jpg']
  },
  {
    code: 'PP-026', name: 'Sudadera Snoopy Butter Finger Calma Mode', price: 'Bs. 75', size: 'L', category: 'Sudadera', color: 'Verde Claro', gender: 'Unisex', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Vintage', description: 'Relájate… y fluye con Snoopy 😌🔥', images: ['imgs/63b.jpg', 'imgs/63.jpg', 'imgs/64.jpg']
  },
  {
    code: 'PP-027', name: 'Sudadera Paradise Green Smile', price: 'Bs. 65', size: 'M', category: 'Sudadera', color: 'Verde Claro', gender: 'Mujer', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Sport', tag: 'Vintage', description: 'Sudadera Paradise Green Smile', images: ['imgs/71b.jpg', 'imgs/71.jpg', 'imgs/72.jpg']
  },
  {
    code: 'PP-028', name: 'Sudadera Básica Ploma Kaveri', price: '70', size: 'L', category: 'Sudadera', color: 'Plomo', gender: 'Unisex', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Básica', description: 'Simple… pero con estilo ✨', images: ['imgs/73b.jpg', 'imgs/73.jpg', 'imgs/74.jpg']
  },
  {
    code: 'PP-029', name: 'Sudadera SNS Amarilla Creative Vibes', price: 'Bs. 70', size: 'M', category: 'Sudadera', color: 'Beish', gender: 'Unisex', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Básica', description: 'Creatividad que se nota 🎨🔥', images: ['imgs/75b.jpg', 'imgs/75.jpg', 'imgs/76.jpg']
  },
  {
    code: 'PP-030', name: 'Sudadera Básica by.187 Lima Fresh Verde', price: 'Bs. 70', size: 'M', category: 'Sudadera', color: 'Verde', gender: 'Mujer', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Vintage', description: 'Fresco, limpio y con estilo 🍃🔥', images: ['imgs/77b.jpg', 'imgs/77.jpg', 'imgs/72.jpg']
  },
  {
    code: 'PP-031', name: 'Sudadera B’Concept Cambon Street Plomo', price: 'Bs. 70', size: 'M', category: 'Sudadera', color: 'Plomo', gender: 'Mujer', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Vintage', description: 'Deportivo… pero con estilo 😎', images: ['imgs/78b.jpg', 'imgs/78.jpg', 'imgs/79.jpg']
  },
  {
    code: 'PP-032', name: 'Polerón Sport Blue Layer', price: 'Bs. 70', size: 'M', category: 'Poleron', color: 'Azul', gender: 'Unisex', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Vintage', description: 'Capas sin esfuerzo 😎🔥', images: ['imgs/80b.jpg', 'imgs/80.jpg', 'imgs/81.jpg']
  },
  {
    code: 'PP-033', name: 'Polerón Elle Street Plomo', price: 'Bs. 70', size: 'L', category: 'Sudadera', color: 'Verde', gender: 'Mujer', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Vintage', description: 'Moda, y estilo con mucho flow 🤍🦌', images: ['imgs/82b.jpg', 'imgs/82.jpg', 'imgs/83.jpg']
  },
  {
    code: 'PP-034', name: 'Sudadera light Deer Soul Blanco', price: 'Bs. 70', size: 'M', category: 'Sudadera', color: 'Blanco', gender: 'Mujer', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Vintage', description: 'Conexión con la naturaleza… pero con estilo 🤍🦌', images: ['imgs/80b.jpg', 'imgs/80.jpg', 'imgs/81.jpg']
  },
  {
    code: 'PP-035', name: 'Sudadera Negra Modo Performance', price: 'Bs. 70', size: 'L', category: 'Sudadera', color: 'Negra', gender: 'Unisex', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Oversized', tag: 'Básica', description: 'Deportivo… pero con estilo 😎', images: ['imgs/88b.jpg', 'imgs/88.jpg', 'imgs/89.jpg']
  },
  {
    code: 'PP-036', name: 'Polerón K-Force', price: 'Bs. 70', size: 'M', category: 'Poleron', color: 'Negro', gender: 'Hombre', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Vintage', description: 'Hecho para moverte… y destacar con ese toque militar 💪🔥', images: ['imgs/92b.jpg', 'imgs/92.jpg', 'imgs/93.jpg']
  },
  {
    code: 'PP-036', name: 'Polerón K-Force', price: 'Bs. 70', size: 'M', category: 'Poleron', color: 'Negro', gender: 'Hombre', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Vintage', description: 'Hecho para moverte… y destacar con ese toque militar 💪🔥', images: ['imgs/92b.jpg', 'imgs/92.jpg', 'imgs/93.jpg']
  },
  {
    code: 'PP-037', name: 'Sudadera Floreada', price: 'Bs. 70', size: 'M', category: 'Sudadera', color: 'Verde', gender: 'Mujer', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Vintage', description: 'Ideal para actividades al aire libre con un toque floreado y moderno.', images: ['imgs/94b.jpg', 'imgs/94.jpg', 'imgs/95.jpg']
  },
  {
    code: 'PP-038', name: 'Poleron Supreme Vintage', price: 'Bs. 70', size: 'M', category: 'Poleron', color: 'Negro', gender: 'Hombre', material: 'Algodón mixto', condition: 'Muy buen estado', fit: 'Regular', tag: 'Vintage', description: 'Hecho para moverte… y realizar actividades al aire libre con flow urbano 😎', images: ['imgs/96b.jpg', 'imgs/96.jpg', 'imgs/97.jpg']
  }
];

let currentPage = 1;
let filteredProducts = [...products];

const productGrid = document.getElementById('productGrid');
const pagination = document.getElementById('pagination');
const categoryFilter = document.getElementById('categoryFilter');
const colorFilter = document.getElementById('colorFilter');
const sizeFilter = document.getElementById('sizeFilter');
const genderFilter = document.getElementById('genderFilter');
const resetFilters = document.getElementById('resetFilters');
const resultsCount = document.getElementById('resultsCount');
const modal = document.getElementById('productModal');
const modalMainImage = document.getElementById('modalMainImage');
const modalThumbs = document.getElementById('modalThumbs');
const modalCode = document.getElementById('modalCode');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalInfoList = document.getElementById('modalInfoList');
const modalPrice = document.getElementById('modalPrice');
const modalWhatsapp = document.getElementById('modalWhatsapp');

function uniqueValues(key){
  return [...new Set(products.map(product => product[key]).filter(Boolean))].sort();
}

function fillFilter(select, values){
  values.forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function initFilters(){
  fillFilter(categoryFilter, uniqueValues('category'));
  fillFilter(colorFilter, uniqueValues('color'));
  fillFilter(sizeFilter, uniqueValues('size'));
}

function applyFilters(){
  const category = categoryFilter.value;
  const color = colorFilter.value;
  const size = sizeFilter.value;
  const gender = genderFilter.value;

  filteredProducts = products.filter(product => {
    const matchCategory = category === 'all' || product.category === category;
    const matchColor = color === 'all' || product.color === color;
    const matchSize = size === 'all' || product.size === size;
    const matchGender = gender === 'all' || product.gender === gender;
    return matchCategory && matchColor && matchSize && matchGender;
  });

  currentPage = 1;
  renderProducts();
}

function renderProducts(){
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  if(currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const visibleProducts = filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);

  resultsCount.textContent = filteredProducts.length
    ? `Mostrando ${start + 1}-${Math.min(start + PRODUCTS_PER_PAGE, filteredProducts.length)} de ${filteredProducts.length} prendas`
    : 'No hay prendas con esos filtros';

  productGrid.innerHTML = visibleProducts.length ? visibleProducts.map((product, index) => `
    <article class="product-card reveal" data-index="${start + index}">
      <div class="image-wrap">
        <img src="${product.images[0]}" alt="${product.name}">
        <span class="pill">${product.tag}</span>
      </div>
      <div class="product-body">
        <div class="mini-tags"><span>${product.category}</span><span>${product.color}</span></div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-meta"><span>${product.size}</span><span>${product.price}</span></div>
      </div>
    </article>`).join('') : `<div class="empty-state">No encontramos prendas para esos filtros. Prueba limpiarlos o elige otra categoría.</div>`;

  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => openModal(filteredProducts[card.dataset.index]));
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages){
  if(totalPages <= 1){
    pagination.innerHTML = '';
    return;
  }

  const buttons = [];
  buttons.push(`<button ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">Anterior</button>`);
  for(let page = 1; page <= totalPages; page++){
    buttons.push(`<button class="${page === currentPage ? 'active' : ''}" data-page="${page}">${page}</button>`);
  }
  buttons.push(`<button ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">Siguiente</button>`);

  pagination.innerHTML = buttons.join('');
  pagination.querySelectorAll('button:not([disabled])').forEach(button => {
    button.addEventListener('click', () => {
      currentPage = Number(button.dataset.page);
      renderProducts();
      document.getElementById('productos').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function openModal(product){
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  modalMainImage.src = product.images[0];
  modalMainImage.alt = product.name;
  modalCode.textContent = `${product.code} • ${product.category} • ${product.color}`;
  modalTitle.textContent = product.name;
  modalDescription.textContent = product.description;
  modalPrice.textContent = product.price;

  modalInfoList.innerHTML = `
    <div><span>Talla</span>${product.size}</div>
    <div><span>Color</span>${product.color}</div>
    <div><span>Género</span>${product.gender}</div>
    <div><span>Categoría</span>${product.category}</div>
    <div><span>Material</span>${product.material}</div>
    <div><span>Estado</span>${product.condition}</div>
    <div><span>Fit</span>${product.fit}</div>
  `;

  modalThumbs.innerHTML = product.images.map((img, i) => `<img src="${img}" alt="${product.name} foto ${i+1}" class="${i===0?'active':''}">`).join('');
  modalThumbs.querySelectorAll('img').forEach(thumb => {
    thumb.addEventListener('click', () => {
      modalMainImage.src = thumb.src;
      modalThumbs.querySelectorAll('img').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  const text = `Hola Pura Pinta, quiero pedir la prenda ${product.code} - ${product.name} (${product.price}). Talla: ${product.size}. Color: ${product.color}. ¿Sigue disponible?`;
  modalWhatsapp.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

function closeModal(){
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

[categoryFilter, colorFilter, sizeFilter, genderFilter].forEach(select => select.addEventListener('change', applyFilters));
resetFilters.addEventListener('click', () => {
  categoryFilter.value = 'all';
  colorFilter.value = 'all';
  sizeFilter.value = 'all';
  genderFilter.value = 'all';
  applyFilters();
});

document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('open');
});

document.querySelectorAll('.nav-menu a').forEach(a => {
  a.addEventListener('click', () => document.querySelector('.nav-menu').classList.remove('open'));
});

initFilters();
renderProducts();

if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.reveal').forEach((el) => {
    gsap.from(el, { opacity: 0, y: 44, duration: .85, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' }});
  });
  gsap.from('.hero-card', { opacity: 0, scale: .92, rotate: -2, duration: 1, stagger: .15, ease: 'back.out(1.4)' });
}
