/* Mediterráneo Real Estate — UI + data (single project JS) */

const formatEUR = (value) =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);

const formatNumber = (value) => new Intl.NumberFormat('es-ES').format(value);

const PROPERTIES = [
  {
    id: 'mre-001',
    mode: 'comprar',
    type: 'piso',
    title: 'Ático luminoso con terraza',
    price: 219000,
    location: 'Sueca, Valencia',
    area: 92,
    rooms: 3,
    baths: 2,
    status: 'reformado',
    highlights: ['Terraza privada', 'Ascensor', 'A 10 min del mar'],
    description:
      'Ático cuidado al detalle en una finca tranquila, con terraza orientada a la brisa mediterránea. Salón-comedor con luz natural, cocina independiente, y una distribución pensada para el día a día.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=90',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1600&q=90',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=90',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600&q=90',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600&q=90',
    ],
  },
  {
    id: 'mre-002',
    mode: 'comprar',
    type: 'chalet',
    title: 'Chalet con jardín y porche',
    price: 385000,
    location: 'Sueca, Valencia',
    area: 168,
    rooms: 4,
    baths: 2,
    status: 'muy buen estado',
    highlights: ['Jardín', 'Porche', 'Zona residencial'],
    description:
      'Vivienda independiente con una estética atemporal y espacios amplios. Ideal para quienes buscan privacidad, exterior y una ubicación equilibrada entre centro y costa.',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=90',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=90',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=90',
      'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1600&q=90',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=90',
    ],
  },
  {
    id: 'mre-003',
    mode: 'comprar',
    type: 'local',
    title: 'Local comercial en zona de paso',
    price: 99000,
    location: 'Sueca, Valencia',
    area: 78,
    rooms: 1,
    baths: 1,
    status: 'para actualizar',
    highlights: ['Escaparate', 'Planta calle', 'Versátil'],
    description:
      'Local con buen frente y visibilidad. Perfecto para pequeño comercio, despacho profesional o inversión. Posibilidad de adaptar la distribución a tu actividad.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=90',
      'https://images.unsplash.com/photo-1556911073-52527ac437f5?w=1600&q=90',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=90',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=90',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=90',
    ],
  },
  {
    id: 'mre-004',
    mode: 'alquilar',
    type: 'piso',
    title: 'Piso amueblado, centro',
    price: 900,
    location: 'Sueca, Valencia',
    area: 76,
    rooms: 2,
    baths: 1,
    status: 'listo para entrar',
    highlights: ['Amueblado', 'Céntrico', 'Luz natural'],
    description:
      'Piso funcional y acogedor en el centro de Sueca. Ideal para estancias largas. Buena distribución, dormitorio principal amplio y zona de estar confortable.',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=90',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=90',
      'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=1600&q=90',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600&q=90',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=90',
    ],
  },
  {
    id: 'mre-005',
    mode: 'alquilar',
    type: 'chalet',
    title: 'Chalet en zona residencial',
    price: 1450,
    location: 'Cullera, Valencia',
    area: 125,
    rooms: 3,
    baths: 2,
    status: 'muy buen estado',
    highlights: ['Garaje', 'Terraza', 'Vistas despejadas'],
    description:
      'Chalet confortable para vivir cerca de la costa con tranquilidad. Espacios bien conectados, y exteriores agradables para disfrutar del clima.',
    images: [
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1600&q=90',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1600&q=90',
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1600&q=90',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=90',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=90',
    ],
  },
  {
    id: 'mre-006',
    mode: 'alquilar',
    type: 'local',
    title: 'Local en alquiler, zona comercial',
    price: 650,
    location: 'Sueca, Valencia',
    area: 62,
    rooms: 1,
    baths: 1,
    status: 'buen estado',
    highlights: ['Escaparate', 'A pie de calle', 'Listo para usar'],
    description:
      'Local de tamaño cómodo para negocio de barrio o despacho. Buena iluminación y zona de paso, con facilidad de acceso.',
    images: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=90',
      'https://images.unsplash.com/photo-1556911073-52527ac437f5?w=1600&q=90',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=90',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=90',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600&q=90',
    ],
  },
];

function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav-main');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => nav.classList.toggle('is-open'));
  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => nav.classList.remove('is-open'));
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href.length < 2) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: y, behavior: 'smooth' });
      history.replaceState(null, '', href);
    });
  });
}

function initReveal() {
  const els = Array.from(document.querySelectorAll('.reveal'));
  if (!els.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
  );
  els.forEach((el) => obs.observe(el));
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

function validatePhone(value) {
  const v = String(value || '').replace(/\s+/g, '').trim();
  return /^(\+?\d{9,15})$/.test(v);
}

function setFieldError(input, message) {
  if (!input) return;
  input.classList.add('input-error');
  const wrap = input.closest('.form-group') || input.parentElement;
  if (!wrap) return;
  let err = wrap.querySelector('.field-error');
  if (!err) {
    err = document.createElement('div');
    err.className = 'field-error';
    wrap.appendChild(err);
  }
  err.textContent = message;
}

function clearFieldError(input) {
  if (!input) return;
  input.classList.remove('input-error');
  const wrap = input.closest('.form-group') || input.parentElement;
  const err = wrap ? wrap.querySelector('.field-error') : null;
  if (err) err.remove();
}

function initContactForms() {
  const forms = Array.from(document.querySelectorAll('form[data-validate="contact"], #contact-form'));
  if (!forms.length) return;

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = form.querySelector('input[name="nombre"], #nombre');
      const email = form.querySelector('input[name="email"], #email');
      const telefono = form.querySelector('input[name="telefono"], #telefono');
      const mensaje = form.querySelector('textarea[name="mensaje"], #mensaje');
      const alertBox = form.querySelector('[data-form-alert]');

      [nombre, email, telefono, mensaje].forEach(clearFieldError);
      if (alertBox) alertBox.classList.remove('is-visible');

      let ok = true;
      if (!nombre || !String(nombre.value || '').trim()) {
        ok = false;
        setFieldError(nombre, 'Indica tu nombre.');
      }
      if (!email || !validateEmail(email.value)) {
        ok = false;
        setFieldError(email, 'Introduce un email válido.');
      }
      if (!telefono || !validatePhone(telefono.value)) {
        ok = false;
        setFieldError(telefono, 'Introduce un teléfono válido (9–15 dígitos).');
      }
      if (mensaje && mensaje.hasAttribute('required') && !String(mensaje.value || '').trim()) {
        ok = false;
        setFieldError(mensaje, 'Escribe un mensaje (puede ser breve).');
      }

      if (!ok) return;

      const to = 'mediterraneorealestate24@gmail.com';
      const subject = 'Nuevo mensaje desde la web — Mediterráneo Real Estate';
      const bodyLines = [
        'Nueva consulta desde la web:',
        '',
        `Nombre: ${String(nombre?.value || '').trim()}`,
        `Email: ${String(email?.value || '').trim()}`,
        `Teléfono: ${String(telefono?.value || '').trim()}`,
        `Mensaje: ${String(mensaje?.value || '').trim() || '(sin mensaje)'}`,
        '',
        `Página: ${window.location.href}`,
      ];
      const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        bodyLines.join('\n')
      )}`;

      if (alertBox) {
        alertBox.textContent = 'Perfecto. Se abrirá tu gestor de correo para enviar el mensaje.';
        alertBox.classList.add('is-visible');
      } else {
        // fallback
        form.insertAdjacentHTML(
          'beforeend',
          '<div class="inline-alert is-visible" data-form-alert>Perfecto. Se abrirá tu gestor de correo para enviar el mensaje.</div>'
        );
      }

      form.reset();
      window.location.href = mailto;
    });
  });
}

function estimateValuation({ tipo, ubicacion, metros, habitaciones, estado }) {
  const baseByType = { piso: 1850, chalet: 2350, local: 1250, terreno: 700, atico: 2100 };
  const locFactor =
    /sueca/i.test(ubicacion) ? 1.0 : /cullera/i.test(ubicacion) ? 1.12 : /valencia/i.test(ubicacion) ? 1.18 : 0.96;
  const stateFactor =
    estado === 'nuevo' ? 1.15 : estado === 'reformado' ? 1.08 : estado === 'buen-estado' ? 1.0 : 0.92;
  const roomsFactor = Math.min(1.12, 0.96 + Number(habitaciones || 0) * 0.04);
  const base = (baseByType[tipo] || 1750) * Number(metros || 0) * locFactor * stateFactor * roomsFactor;
  const low = Math.max(55000, Math.round(base * 0.92 / 1000) * 1000);
  const high = Math.max(low + 15000, Math.round(base * 1.08 / 1000) * 1000);
  return { low, high };
}

function initValuationTool() {
  const form = document.getElementById('valuation-form');
  if (!form) return;

  const result = document.getElementById('valuation-result');
  const resultText = document.getElementById('valuation-result-text');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const tipo = form.querySelector('[name="tipo"]').value;
    const ubicacion = form.querySelector('[name="ubicacion"]').value;
    const metros = form.querySelector('[name="metros"]').value;
    const habitaciones = form.querySelector('[name="habitaciones"]').value;
    const estado = form.querySelector('[name="estado"]').value;
    const email = form.querySelector('[name="email"]').value;
    const telefono = form.querySelector('[name="telefono"]').value;

    ['email', 'telefono', 'ubicacion', 'metros'].forEach((name) => clearFieldError(form.querySelector(`[name="${name}"]`)));

    let ok = true;
    if (!String(ubicacion || '').trim()) {
      ok = false;
      setFieldError(form.querySelector('[name="ubicacion"]'), 'Indica una ubicación.');
    }
    if (!(Number(metros) > 0)) {
      ok = false;
      setFieldError(form.querySelector('[name="metros"]'), 'Indica los metros cuadrados.');
    }
    if (!validateEmail(email)) {
      ok = false;
      setFieldError(form.querySelector('[name="email"]'), 'Introduce un email válido.');
    }
    if (!validatePhone(telefono)) {
      ok = false;
      setFieldError(form.querySelector('[name="telefono"]'), 'Introduce un teléfono válido (9–15 dígitos).');
    }
    if (!ok) return;

    const { low, high } = estimateValuation({ tipo, ubicacion, metros, habitaciones, estado });
    if (resultText) {
      resultText.textContent = `Valor estimado: entre ${formatEUR(low)} y ${formatEUR(high)}`;
    }
    if (result) {
      result.classList.add('is-visible');
      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

function renderPropertyCard(p) {
  const priceLabel = p.mode === 'alquilar' ? `${formatEUR(p.price)}/mes` : formatEUR(p.price);
  return `
    <article class="card reveal" data-prop-id="${p.id}">
      <div class="card-image">
        <img src="${p.images[0]}" alt="${p.title}">
      </div>
      <div class="card-body">
        <h3>${p.title}</h3>
        <p>${p.location}</p>
        <div class="meta-row" aria-label="Características">
          <span class="meta-item"><span class="icon" aria-hidden="true"></span>${formatNumber(p.area)} m²</span>
          <span class="meta-item"><span class="icon" aria-hidden="true"></span>${p.rooms} hab.</span>
          <span class="meta-item"><span class="icon" aria-hidden="true"></span>${p.baths} baños</span>
        </div>
        <div class="price">${priceLabel}</div>
        <div class="card-actions">
          <a class="btn-link" href="propiedad.html?id=${encodeURIComponent(p.id)}">Ver propiedad</a>
          <a class="btn btn-outline" href="contacto.html">Contactar</a>
        </div>
      </div>
    </article>
  `;
}

function initValuationWizard() {
  const root = document.getElementById('valuation-wizard');
  const form = document.getElementById('valuation-wizard-form');
  if (!root || !form) return;

  const totalSteps = Number(root.getAttribute('data-total-steps') || 6);
  const progressBar = document.getElementById('wizard-progress-bar');
  const stepLabel = document.getElementById('wizard-step-label');
  const backBtn = document.getElementById('wizard-back');
  const nextBtn = document.getElementById('wizard-next');
  const skipBtn = document.getElementById('wizard-skip');
  const steps = Array.from(form.querySelectorAll('.wizard-step'));

  const state = {
    tipo: '',
    ubicacion: '',
    estado: 'buen-estado',
    metros: '',
    metrosTotal: '',
    habitaciones: 2,
    banos: 1,
    extras: [],
    motivo: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    detalles: '',
  };

  let current = 1;

  const setStep = (n) => {
    current = Math.min(totalSteps, Math.max(1, n));
    steps.forEach((s) => s.classList.toggle('is-active', Number(s.getAttribute('data-step')) === current));
    if (stepLabel) {
      const labelByStep = {
        1: 'Tipo de propiedad',
        2: 'Ubicación',
        3: 'Detalles',
        4: 'Características',
        5: 'Motivo',
        6: 'Datos',
      };
      stepLabel.textContent = `${current} / ${totalSteps} · ${labelByStep[current] || ''}`.trim();
    }
    if (progressBar) progressBar.style.width = `${Math.round(((current - 1) / (totalSteps - 1)) * 100)}%`;
    if (backBtn) backBtn.disabled = current === 1;
    if (nextBtn) nextBtn.style.display = current === totalSteps ? 'none' : 'inline-flex';
    if (skipBtn) skipBtn.style.display = current === totalSteps ? 'none' : 'inline-flex';
    window.scrollTo({ top: root.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' });
  };

  const markSelected = (pick, value) => {
    form.querySelectorAll(`[data-pick="${pick}"]`).forEach((el) => {
      el.classList.toggle('is-selected', el.getAttribute('data-value') === value);
    });
  };

  const validateStep = (step) => {
    if (step === 1) return Boolean(state.tipo);
    if (step === 2) return Boolean(String(state.ubicacion || '').trim());
    if (step === 3) return Number(state.metros) > 0 && state.habitaciones >= 0 && state.banos >= 0;
    if (step === 5) return Boolean(state.motivo);
    if (step === 6) return validateEmail(state.email) && validatePhone(state.telefono);
    return true;
  };

  form.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-pick]');
    if (btn) {
      const pick = btn.getAttribute('data-pick');
      const value = btn.getAttribute('data-value') || '';
      if (pick === 'tipo') state.tipo = value;
      if (pick === 'motivo') state.motivo = value;
      markSelected(pick, value);
      return;
    }

    const counterBtn = e.target.closest('.counter-btn');
    if (counterBtn) {
      const counter = counterBtn.closest('.counter');
      const key = counter?.getAttribute('data-counter');
      const action = counterBtn.getAttribute('data-counter-action');
      const valueEl = counter?.querySelector('.counter-value');
      if (!key || !valueEl) return;

      const currentVal = key === 'habitaciones' ? state.habitaciones : state.banos;
      const nextVal = action === 'inc' ? currentVal + 1 : Math.max(0, currentVal - 1);
      if (key === 'habitaciones') state.habitaciones = nextVal;
      if (key === 'banos') state.banos = nextVal;
      valueEl.value = String(nextVal);
    }
  });

  form.addEventListener('input', (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    const name = t.getAttribute('name');
    if (!name) return;

    if (name === 'ubicacion') state.ubicacion = t.value;
    if (name === 'estado') state.estado = t.value;
    if (name === 'metros') state.metros = t.value;
    if (name === 'metrosTotal') state.metrosTotal = t.value;
    if (name === 'nombre') state.nombre = t.value;
    if (name === 'apellido') state.apellido = t.value;
    if (name === 'email') state.email = t.value;
    if (name === 'telefono') state.telefono = t.value;
    if (name === 'detalles') {
      state.detalles = t.value;
      const count = document.getElementById('w-count');
      if (count) count.textContent = String(t.value.length);
    }
  });

  form.addEventListener('change', (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (t.getAttribute('name') === 'extras') {
      const checked = Array.from(form.querySelectorAll('input[name="extras"]:checked')).map((x) =>
        x.getAttribute('value')
      );
      state.extras = checked.filter(Boolean);
    }
  });

  const goNext = () => {
    if (!validateStep(current)) {
      const alert = document.getElementById('wizard-result');
      if (alert) {
        alert.classList.remove('is-visible');
      }
      return;
    }
    setStep(current + 1);
  };

  const goBack = () => setStep(current - 1);
  const goSkip = () => setStep(current + 1);

  if (nextBtn) nextBtn.addEventListener('click', goNext);
  if (backBtn) backBtn.addEventListener('click', goBack);
  if (skipBtn) skipBtn.addEventListener('click', goSkip);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    state.ubicacion = String(state.ubicacion || '').trim();
    state.email = String(state.email || '').trim();
    state.telefono = String(state.telefono || '').trim();

    if (!validateStep(6)) return;

    const extraFactor = 1 + (state.extras.includes('piscina') ? 0.05 : 0) + (state.extras.includes('terraza') ? 0.03 : 0) +
      (state.extras.includes('jardin') ? 0.04 : 0) + (state.extras.includes('parking') ? 0.02 : 0);

    const motivoFactor =
      state.motivo === 'vender-rapido' ? 0.99 :
      state.motivo === 'vender-despues' ? 1.01 :
      state.motivo === 'valorar-comprar' ? 1.0 :
      0.98;

    const { low, high } = estimateValuation({
      tipo: state.tipo || 'piso',
      ubicacion: state.ubicacion || 'Sueca, Valencia',
      metros: Number(state.metros || 0),
      habitaciones: state.habitaciones,
      estado: state.estado || 'buen-estado',
    });

    const lowAdj = Math.round((low * extraFactor * motivoFactor) / 1000) * 1000;
    const highAdj = Math.round((high * extraFactor * motivoFactor) / 1000) * 1000;

    const result = document.getElementById('wizard-result');
    const resultText = document.getElementById('wizard-result-text');
    if (resultText) resultText.textContent = `Valor estimado: entre ${formatEUR(lowAdj)} y ${formatEUR(highAdj)}`;
    if (result) result.classList.add('is-visible');

    // Prepare a mailto to the company with the lead + answers (static-friendly)
    const to = 'mediterraneorealestate24@gmail.com';
    const subject = 'Lead — Valoración web (wizard)';
    const body = [
      'Solicitud de valoración (wizard):',
      '',
      `Tipo: ${state.tipo || '-'}`,
      `Ubicación: ${state.ubicacion || '-'}`,
      `Estado: ${state.estado || '-'}`,
      `Superficie: ${state.metros || '-'} m²`,
      `Superficie total: ${state.metrosTotal || '-'} m²`,
      `Habitaciones: ${state.habitaciones}`,
      `Baños: ${state.banos}`,
      `Extras: ${(state.extras || []).join(', ') || '-'}`,
      `Motivo: ${state.motivo || '-'}`,
      '',
      `Nombre: ${state.nombre || ''} ${state.apellido || ''}`.trim(),
      `Email: ${state.email || '-'}`,
      `Teléfono: ${state.telefono || '-'}`,
      `Detalles: ${state.detalles || '(sin detalles)'}`,
      '',
      `Rango estimado: ${formatEUR(lowAdj)} - ${formatEUR(highAdj)}`,
      `Página: ${window.location.href}`,
    ].join('\n');

    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Don't force-open the mail client; only set on a data attribute for optional use.
    if (result) result.setAttribute('data-mailto', mailto);
  });

  // Defaults
  markSelected('tipo', state.tipo);
  markSelected('motivo', state.motivo);
  const count = document.getElementById('w-count');
  if (count) count.textContent = '0';

  setStep(1);
}

function initListings() {
  const root = document.getElementById('property-list');
  if (!root) return;

  const mode = root.getAttribute('data-mode') || 'comprar';
  const typeSel = document.getElementById('tipo');
  const locSel = document.getElementById('ubicacion') || document.getElementById('ubicacion-list');
  const roomsSel = document.getElementById('habitaciones');

  function apply() {
    const tipo = typeSel ? typeSel.value : '';
    const ubicacion = locSel ? locSel.value : '';
    const hab = roomsSel ? roomsSel.value : '';

    const items = PROPERTIES.filter((p) => p.mode === mode).filter((p) => {
      if (tipo && p.type !== tipo) return false;
      if (ubicacion) {
        const norm = ubicacion.toLowerCase();
        if (norm === 'otros') return !/sueca|cullera|valencia/i.test(p.location);
        if (!p.location.toLowerCase().includes(norm)) return false;
      }
      if (hab) {
        if (hab === '3') return p.rooms >= 3;
        if (Number(hab) && p.rooms !== Number(hab)) return false;
      }
      return true;
    });

    root.innerHTML = items.map(renderPropertyCard).join('');
    initReveal();
  }

  [typeSel, locSel, roomsSel].filter(Boolean).forEach((el) => el.addEventListener('change', apply));
  apply();
}

function initPropertyDetail() {
  const root = document.getElementById('property-detail');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || '';
  const prop = PROPERTIES.find((p) => p.id === id) || PROPERTIES[0];

  const titleEl = document.getElementById('detail-title');
  const locEl = document.getElementById('detail-location');
  const priceEl = document.getElementById('detail-price');
  const descEl = document.getElementById('detail-description');
  const fArea = document.getElementById('feature-area');
  const fRooms = document.getElementById('feature-rooms');
  const fBaths = document.getElementById('feature-baths');
  const pill = document.getElementById('detail-pill');

  if (titleEl) titleEl.textContent = prop.title;
  if (locEl) locEl.textContent = prop.location;
  if (pill) pill.textContent = `${prop.type} · ${prop.status}`;
  if (priceEl) priceEl.textContent = prop.mode === 'alquilar' ? `${formatEUR(prop.price)}/mes` : formatEUR(prop.price);
  if (descEl) descEl.textContent = prop.description;
  if (fArea) fArea.textContent = `${formatNumber(prop.area)} m²`;
  if (fRooms) fRooms.textContent = `${prop.rooms} hab.`;
  if (fBaths) fBaths.textContent = `${prop.baths} baños`;

  const mainImg = document.getElementById('gallery-main-img');
  const thumbs = document.getElementById('gallery-thumbs');
  const prev = document.getElementById('gallery-prev');
  const next = document.getElementById('gallery-next');
  let idx = 0;

  function setIndex(n) {
    idx = (n + prop.images.length) % prop.images.length;
    if (mainImg) mainImg.src = prop.images[idx];
    if (thumbs) {
      thumbs.querySelectorAll('.thumb').forEach((t, i) => t.classList.toggle('is-active', i === idx));
    }
  }

  if (thumbs) {
    thumbs.innerHTML = prop.images
      .map(
        (src, i) =>
          `<button class="thumb${i === 0 ? ' is-active' : ''}" type="button" aria-label="Ver imagen ${i + 1}">
            <img src="${src}" alt="${prop.title} — imagen ${i + 1}">
          </button>`
      )
      .join('');
    thumbs.querySelectorAll('.thumb').forEach((btn, i) => btn.addEventListener('click', () => setIndex(i)));
  }

  if (mainImg) mainImg.src = prop.images[0];
  if (prev) prev.addEventListener('click', () => setIndex(idx - 1));
  if (next) next.addEventListener('click', () => setIndex(idx + 1));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') setIndex(idx - 1);
    if (e.key === 'ArrowRight') setIndex(idx + 1);
  });
}

function initGAEvents() {
  document.querySelectorAll('[data-ga-event]').forEach((el) => {
    el.addEventListener('click', function () {
      if (typeof window.gtag === 'function') {
        window.gtag('event', this.getAttribute('data-ga-event'), {
          event_category: 'engagement',
          event_label: this.getAttribute('data-ga-label'),
        });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initSmoothScroll();
  initReveal();
  initContactForms();
  initValuationTool();
  initValuationWizard();
  initListings();
  initPropertyDetail();
  initGAEvents();
});

