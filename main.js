/* ─── NAVBAR SCROLL ─────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ─── MOBILE MENU ───────────────────────────────────────────── */
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuBtn.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuBtn.textContent = '☰';
  });
});

/* ─── SERVICES DATA ─────────────────────────────────────────── */
const services = [
  {
    icon: '🖥️',
    title: 'Montagem de PC',
    desc: 'Montagem personalizada com peças de alto desempenho, otimizadas para jogos, trabalho ou uso geral.',
    price: 'Sob orçamento',
  },
  {
    icon: '🔧',
    title: 'Manutenção & Reparo',
    desc: 'Diagnóstico completo, limpeza interna, troca de pasta térmica, reparos em hardware e software.',
    price: 'Consulte',
  },
  {
    icon: '💾',
    title: 'Formatação',
    desc: 'Formatação + Windows original + Office + Antivírus. Entrega rápida com dados salvos quando possível.',
    price: 'R$ 100,00',
  },
  {
    icon: '⚡',
    title: 'Upgrade de SSD',
    desc: 'Instale um SSD e deixe seu PC até 10x mais rápido. Parcelamos em até 12x nos cartões.',
    price: 'A partir de R$ 150',
  },
  {
    icon: '🎮',
    title: 'Consoles & Games',
    desc: 'Manutenção e upgrade em videogames. Troca de disco óptico, limpeza interna, melhorias de performance.',
    price: 'Sob orçamento',
  },
  {
    icon: '🔌',
    title: 'Configuração de Rede',
    desc: 'Configuração de roteadores, cabeamento, amplificadores de sinal Wi-Fi e solução de problemas de conexão.',
    price: 'Consulte',
  },
];

const servicesGrid = document.getElementById('servicesGrid');
services.forEach((s, i) => {
  const card = document.createElement('div');
  card.className = 'service-card reveal';
  card.style.transitionDelay = `${i * 0.07}s`;
  card.innerHTML = `
    <div class="text-4xl mb-5">${s.icon}</div>
    <h3 class="font-display font-700 text-xl uppercase tracking-wide text-white mb-3">${s.title}</h3>
    <p class="font-body text-white/55 text-sm leading-relaxed mb-5">${s.desc}</p>
    <div class="flex items-center justify-between">
      <span class="font-display font-700 text-brand-accent text-sm">${s.price}</span>
      <a href="https://wa.me/5561982386026?text=Olá%20Ivan!%20Tenho%20interesse%20em%20${encodeURIComponent(s.title)}."
         target="_blank"
         class="font-display font-600 text-xs text-white/40 hover:text-brand-accent uppercase tracking-widest transition-colors">
        Solicitar →
      </a>
    </div>
  `;
  servicesGrid.appendChild(card);
});

/* ─── REVIEWS DATA ──────────────────────────────────────────── */
const reviews = [
  { name: 'Carlos M.', text: 'Ivan é excelente! Resolveu o problema do meu PC rapidinho e com preço justo. Recomendo muito!', date: 'março 2026' },
  { name: 'Fernanda S.', text: 'Muito profissional e honesto. Formatou meu notebook e ainda me deu dicas de como cuidar melhor. Nota 10!', date: 'fevereiro 2026' },
  { name: 'Lucas P.', text: 'Montou meu PC gamer com muito cuidado, explicou cada componente. Ficou incrível, tá rodando tudo!', date: 'janeiro 2026' },
  { name: 'Ana C.', text: 'Atendimento rápido e eficiente. Instalou SSD no meu notebook e ficou absurdamente mais rápido!', date: 'dezembro 2025' },
  { name: 'Rafael T.', text: 'Ótimo atendimento, veio até minha casa diagnosticar o problema. Problema resolvido no mesmo dia.', date: 'novembro 2025' },
  { name: 'Mariana L.', text: 'Super recomendo! Preço acessível, serviço de qualidade e pessoa muito atenciosa. Com certeza voltarei.', date: 'outubro 2025' },
];

const reviewsGrid = document.getElementById('reviewsGrid');
reviews.forEach((r, i) => {
  const card = document.createElement('div');
  card.className = 'review-card reveal';
  card.style.transitionDelay = `${i * 0.07}s`;
  card.innerHTML = `
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-full bg-brand-blue/30 border border-brand-blue/50 flex items-center justify-center font-display font-700 text-sm text-brand-accent">
        ${r.name[0]}
      </div>
      <div>
        <p class="font-display font-700 text-sm text-white uppercase tracking-wide">${r.name}</p>
        <p class="font-body text-white/30 text-xs">${r.date}</p>
      </div>
      <div class="ml-auto text-yellow-400 text-sm">★★★★★</div>
    </div>
    <p class="font-body text-white/65 text-sm leading-relaxed">"${r.text}"</p>
  `;
  reviewsGrid.appendChild(card);
});

/* ─── INTERSECTION OBSERVER (reveal on scroll) ───────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ─── SMOOTH ACTIVE NAV ─────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = '#00D4FF';
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));
