// Artwork data
const artworks = [
    {
        id: 1,
        title: { en: "Kintsugi", de: "Kintsugi" },
        year: 2024,
	    medium: { en: "Oil on canvas", de: "Öl auf Leinwand" },
        dimensions: "110 x 70 cm",
        description: {
			en: "Kintsugi is based on an original 3D model that served as a starting point for spatial and formal thinking.The digital structure was not conceived as a final solution, but as an inspirational framework, gradually transformed through the process of painting.The aim was not precision, but the amplification of optical spatial effect — allowing the form to almost step out of the picture plane.Throughout the painterly process, irregularity is not treated as an error, but as a consciously preserved element.",
			de: "Kintsugi basiert auf einem originalen 3D-Modell, das als Ausgangspunkt für räumliches und formales Denken diente. Die digitale Struktur wurde nicht als endgültige Lösung konzipiert, sondern als inspirierender Rahmen, der im Prozess der Malerei schrittweise transformiert wurde. Ziel war nicht Präzision, sondern die Verstärkung der optischen Raumwirkung – die Form soll fast aus der Bildebene heraustreten. Während des malerischen Prozesses wird Unregelmäßigkeit nicht als Fehler, sondern als bewusst bewahrtes Element behandelt."
		},
        images: ["https://cdnb.artstation.com/p/assets/images/images/094/912/699/large/peter-salamon-kintsugi-oil-painting-110x70-jpg.webp?1766952322", "https://cdna.artstation.com/p/assets/images/images/094/912/706/large/peter-salamon-kintsugi-oil-painting-110x70-detail-03-jpg.webp?1766952336", "https://cdna.artstation.com/p/assets/images/images/094/912/712/large/peter-salamon-kintsugi-oil-painting-110x70-detail-01-jpg.webp?1766952344", "https://cdna.artstation.com/p/assets/images/images/094/912/714/large/peter-salamon-kintsugi-render-3d-base-jpg.webp?1766952351", "https://cdna.artstation.com/p/assets/images/images/094/912/718/large/peter-salamon-kintsugi-raw-model-zbrush-01-jpg.webp?1766952361", "https://cdna.artstation.com/p/assets/images/images/094/912/722/large/peter-salamon-kintsugi-raw-model-zbrush-02-jpg.webp?1766952367"],
	featured: true
    },
    {
        id: 2,
        title: { en: "Chaos", de: "Chaos" },
        year: 2025,
        medium: { en: "Oil on canvas", de: "Öl auf Leinwand" },
        dimensions: "110 x 70 cm",
        description: {
            en: "In Chaos, the digital model does not seek solutions, but holds questions together. The structural elements are not preparing to fall apart; instead, they remain adjacent, forming unstable relationships. During the painting process, these connections loosen further while the overall form stays intact. The focus shifts from individual elements to the tension that exists between them.",
            de: "In Chaos sucht das digitale Modell nicht nach Lösungen, sondern hält Fragen zusammen. Die Strukturelemente bereiten sich nicht auf den Zerfall vor; stattdessen bleiben sie benachbart und bilden instabile Beziehungen. Während des Malprozesses lockern sich diese Verbindungen weiter, während die Gesamtform intakt bleibt. Der Fokus verschiebt sich von den einzelnen Elementen auf die Spannung, die zwischen ihnen besteht."
        },
        images: ["https://cdna.artstation.com/p/assets/images/images/094/912/366/large/peter-salamon-chaos-oil-painting-110x70-jpg.webp?1766951594", "https://cdnb.artstation.com/p/assets/images/images/094/912/367/small/peter-salamon-chaos-oil-painting-110x70-detail-01-jpg.webp?1766951602", "https://cdnb.artstation.com/p/assets/images/images/094/912/371/large/peter-salamon-chaos-oil-painting-110x70-detail-02-jpg.webp?1766951613", "https://cdna.artstation.com/p/assets/images/images/094/912/376/small/peter-salamon-chaos-render-3d-base-jpg.webp?1766951621", "https://cdnb.artstation.com/p/assets/images/images/094/912/385/small/peter-salamon-chaos-raw-model-zbrush-01-jpg.webp?1766951634", "https://cdna.artstation.com/p/assets/images/images/094/912/392/small/peter-salamon-chaos-raw-model-zbrush-02-jpg.webp?1766951644"],
	featured: false
    },
    {
        id: 3,
        title: { en: "In between states", de: "In between states" },
        year: 2025,
        medium: { en: "Oil on canvas", de: "Öl auf Leinwand" },
        dimensions: "110 x 70 cm",
        description: {
            en: "In Between States originates from a structural condition that still holds the body, yet is no longer capable of forming a stable system. In the digital model, the tension between supporting elements and shifting forms is present from the very beginning. During the painting process, this unstable balance becomes the central focus: the form does not collapse, but it no longer provides security. The structure of the image embodies the temporary nature of transition.",
            de: "In Between States entspringt einem strukturellen Zustand, der den Körper zwar noch hält, aber nicht mehr in der Lage ist, ein stabiles System zu bilden. Im digitalen Modell ist die Spannung zwischen tragenden Elementen und sich verschiebenden Formen von Anfang an präsent. Während des Malprozesses rückt dieses instabile Gleichgewicht in den Mittelpunkt: Die Form bricht nicht zusammen, bietet aber keine Sicherheit mehr. Die Struktur des Bildes verkörpert die Vorläufigkeit des Übergangs."
        },
        images: ["https://cdnb.artstation.com/p/assets/images/images/094/912/189/small/peter-salamon-in-between-states-oil-painting-110x70-jpg.webp?1766950913","https://cdna.artstation.com/p/assets/images/images/094/912/202/small/peter-salamon-in-between-states-oil-painting-110x70-detail-01-jpg.webp?1766950928","https://cdna.artstation.com/p/assets/images/images/094/912/208/small/peter-salamon-in-between-states-oil-painting-110x70-detail-02-jpg.webp?1766950935", "https://cdnb.artstation.com/p/assets/images/images/094/912/215/small/peter-salamon-in-between-states-render-3d-base-jpg.webp?1766950949","https://cdna.artstation.com/p/assets/images/images/094/912/218/small/peter-salamon-in-between-states-raw-model-zbrush-01-jpg.webp?1766950957", "https://cdna.artstation.com/p/assets/images/images/094/912/222/small/peter-salamon-in-between-states-raw-model-zbrush-02-jpg.webp?1766950966" ],
    },
    {
        id: 4,
        title: { en: "Digital erosion", de: "Digitale Erosion" },
        year: 2024,
        medium: { en: "Oil on canvas", de: "Öl auf Leinwand" },
        dimensions: "100x150 cm",
        description: {
            en: "Digital Erosion is the imprint of a long-lasting, barely noticeable internal process. The form gradually loses its stability, yet the disintegration never becomes fully explicit. The work conveys the quiet presence of mental exhaustion and gradual depletion.",
            de: "Digitale Erosion ist der Abdruck eines langandauernden, kaum merklichen inneren Prozesses. Die Form verliert allmählich ihre Stabilität, doch der Zerfall wird nie ganz explizit. Das Werk vermittelt die stille Präsenz mentaler Erschöpfung und schrittweiser Entleerung."
        },
        images: ["https://cdna.artstation.com/p/assets/images/images/094/912/018/large/peter-salamon-digital-erosion-oil-painting-110x70-jpg.webp?1766950462", "https://cdnb.artstation.com/p/assets/images/images/094/912/021/large/peter-salamon-digital-erosion-oil-painting-110x70-detail-02-jpg.webp?1766950486", "https://cdnb.artstation.com/p/assets/images/images/094/912/023/large/peter-salamon-digital-erosion-oil-painting-110x70-detail-03-jpg.webp?1766950494", "https://cdnb.artstation.com/p/assets/images/images/094/912/031/large/peter-salamon-digital-erosion-raw-model-zbrush-jpg.webp?1766950528", "https://cdnb.artstation.com/p/assets/images/images/094/912/033/large/peter-salamon-digital-erosion-render-3d-base-01-jpg.webp?1766950538", "https://cdna.artstation.com/p/assets/images/images/094/912/038/large/peter-salamon-digital-erosion-render-3d-base-02-jpg.webp?1766950547"],
    },
    {
        id: 5,
        title: { en: "Anxiety", de: "Anxiety" },
        year: 2024,
        medium: { en: "Oil on canvas", de: "Öl auf Leinwand" },
        dimensions: "110 x 70 cm",
        description: {
            en: "Anxiety reflects the transition between digital and painterly thinking. The 3D model functioned as a spatial sketch in which tension and fractures were already present at an early stage. During the painting process, these structures lose their technical precision and transform into materiality, surface, and spatial presence. The focus is not realism, but the structural visualization of an internal state.",
            de: "Anxiety reflektiert den Übergang zwischen digitalem und malerischem Denken. Das 3D-Modell fungierte als räumliche Skizze, in der Spannungen und Brüche bereits in einem frühen Stadium vorhanden waren. Während des Malprozesses verlieren diese Strukturen ihre technische Präzision und wandeln sich in Materialität, Oberfläche und räumliche Präsenz um. Der Fokus liegt nicht auf Realismus, sondern auf der strukturellen Visualisierung eines inneren Zustands."
        },
        images: ["https://cdnb.artstation.com/p/assets/images/images/094/911/717/large/peter-salamon-anxiety-oil-painting-110x70-jpg.webp?1766949484", "https://cdnb.artstation.com/p/assets/images/images/094/911/723/large/peter-salamon-anxiety-oil-painting-110x70-detail-01-jpg.webp?1766949500", "https://cdnb.artstation.com/p/assets/images/images/094/911/725/large/peter-salamon-anxiety-oil-painting-110x70-detail-02-jpg.webp?1766949507", "https://cdnb.artstation.com/p/assets/images/images/094/911/729/large/peter-salamon-anxiety-render-3d-base-jpg.webp?1766949519", "https://cdnb.artstation.com/p/assets/images/images/094/911/731/large/peter-salamon-anxiety-raw-model-zbrush-02-jpg.webp?1766949532", "https://cdnb.artstation.com/p/assets/images/images/094/911/733/large/peter-salamon-anxiety-raw-model-zbrush-01-jpg.webp?1766949541"],
    },
    {
        id: 6,
        title: { en: "Overthinking", de: "Overthinking" },
        year: 2025,
        medium: { en: "Oil on canvas", de: "Öl auf Leinwand" },
        dimensions: "110 x 70 cm",
        description: {
			en: "Overthinking is built upon a closed, self-referential structural logic.Within the digital model, repetition and regularity do not generate stability, but restriction.During the painting process, these structures do not dissolve; instead, they condense into material, while the system continues to maintain its own rigidity.The tension of the image emerges from the fact that the structure simultaneously holds the form together and exhausts it.",
			de: "Overthinking baut auf einer geschlossenen, selbstreferenziellen Strukturlogik auf. Innerhalb des digitalen Modells erzeugen Wiederholung und Regelmäßigkeit keine Stabilität, sondern Einengung. Während des Malprozesses lösen sich diese Strukturen nicht auf; stattdessen verdichten sie sich zu Material, während das System weiterhin seine eigene Starrheit bewahrt. Die Spannung des Bildes entsteht daraus, dass die Struktur die Form gleichzeitig zusammenhält und erschöpft."
        },
        images: ["https://cdna.artstation.com/p/assets/images/images/094/910/782/large/peter-salamon-overthinking-oil-painting-110x70-jpg.webp?1766947593", "https://cdnb.artstation.com/p/assets/images/images/094/910/809/large/peter-salamon-overthinking-oil-painting-110x70-detail-01-jpg.webp?1766947656", "https://cdna.artstation.com/p/assets/images/images/094/910/812/large/peter-salamon-overthinking-oil-painting-110x70-detail-02-jpg.webp?1766947665", "https://cdnb.artstation.com/p/assets/images/images/094/910/819/large/peter-salamon-overthinking-render-3d-base-jpg.webp?1766947677", "https://cdnb.artstation.com/p/assets/images/images/094/910/823/large/peter-salamon-overthinking-raw-model-zbrush-01-jpg.webp?1766947690", "https://cdnb.artstation.com/p/assets/images/images/094/910/825/large/peter-salamon-overthinking-raw-model-zbrush-02-jpg.webp?1766947696"],
    }
];

// State management
let currentLightboxIndex = 0;
let currentSubImageIndex = 0;
let isLightboxOpen = false;
let isMobileNavOpen = false;

// DOM elements
const galleryGrid = document.getElementById('gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxYear = document.getElementById('lightbox-year');
const lightboxMedium = document.getElementById('lightbox-medium');
const lightboxDimensions = document.getElementById('lightbox-dimensions');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav__link');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const header = document.getElementById('header');

// Initialize the application
function init() {
    renderGallery();
    setupEventListeners();
    setupScrollEffects();
    setupSmoothScrolling();
}

// Render gallery items
function renderGallery() {
    if (!galleryGrid) return;
    const lang = localStorage.getItem('selectedLang') || 'en';
    galleryGrid.innerHTML = '';
    
    artworks.forEach((artwork, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery__item';
        galleryItem.setAttribute('data-index', index);
        
        const displayTitle = artwork.title[lang] || artwork.title['en'];

        galleryItem.innerHTML = `
            <img src="${artwork.images[0]}" alt="${displayTitle}" class="gallery__image" loading="lazy">
            <div class="gallery__overlay">
                <h3 class="gallery__title">${displayTitle}</h3>
                <p class="gallery__year">${artwork.year}</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(galleryItem);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Gallery click events
    galleryGrid.addEventListener('click', (e) => {
        const galleryItem = e.target.closest('.gallery__item');
        if (galleryItem) {
            const index = parseInt(galleryItem.getAttribute('data-index'));
            openLightbox(index);
        }
    });
    
    // Lightbox events
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrevImage);
    lightboxNext.addEventListener('click', showNextImage);
    
    // Keyboard events
    document.addEventListener('keydown', (e) => {
        if (isLightboxOpen) {
            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    showPrevImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        }
    });
    
    // Mobile navigation
    navToggle.addEventListener('click', toggleMobileNav);
    
    // Close mobile nav when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMobileNavOpen) {
                toggleMobileNav();
            }
        });
    });
    
    // Scroll to top button
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Contact form
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isMobileNavOpen) {
            toggleMobileNav();
        }
    });
}

// Lightbox funcitons
function openLightbox(index) {
    currentLightboxIndex = index;
    currentSubImageIndex = 0;
    isLightboxOpen = true;
    
    // Először megmutatjuk a modált, hogy az animáció látszódjon
    const lightboxElement = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    updateLightboxContent();
}

function updateLightboxContent() {
    const artwork = artworks[currentLightboxIndex];
    if (!artwork) return;
	const lang = localStorage.getItem('selectedLang') || 'en';
	
    const imgElement = document.getElementById('lightbox-image');
    if (imgElement) {
        imgElement.classList.remove('fade-in');
        void imgElement.offsetWidth; 
        imgElement.src = artwork.images[currentSubImageIndex];
        imgElement.alt = artwork.title[lang];
        imgElement.classList.add('fade-in');
    }
    
    // Szöveges adatok betöltése
    document.getElementById('lightbox-title').textContent = artwork.title[lang];
    document.getElementById('lightbox-year').textContent = artwork.year;
    document.getElementById('lightbox-medium').textContent = artwork.medium[lang];
    document.getElementById('lightbox-dimensions').textContent = artwork.dimensions;
	
    // A leírás (description) betöltése a jobb oldali panelbe
    const descElement = document.getElementById('lightbox-description');
    if (descElement) {
        descElement.textContent = artwork.description[lang];
    }
}

    // Navigációs gombok (nyilak) kezelése
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    
    if (artwork.images.length > 1) {
       if (prevBtn) prevBtn.style.display = 'flex';
       if (nextBtn) nextBtn.style.display = 'flex';
    } else {
       if (prevBtn) prevBtn.style.display = 'none';
       if (nextBtn) nextBtn.style.display = 'none';
    }
}

function closeLightbox() {
    isLightboxOpen = false;
    if (lightbox) lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function showPrevImage() {
    const artwork = artworks[currentLightboxIndex];
    currentSubImageIndex = (currentSubImageIndex - 1 + artwork.images.length) % artwork.images.length;
    updateLightboxContent();
}

function showNextImage() {
    const artwork = artworks[currentLightboxIndex];
    currentSubImageIndex = (currentSubImageIndex + 1) % artwork.images.length;
    updateLightboxContent();
}

// Mobile navigation
function toggleMobileNav() {
    isMobileNavOpen = !isMobileNavOpen;
    nav.classList.toggle('active', isMobileNavOpen);
    navToggle.classList.toggle('active', isMobileNavOpen);
}

// Scroll effects
function setupScrollEffects() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Header scroll effect
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        // Scroll to top button
        if (scrollTop > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Lazy loading for images
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Add entrance animations
function setupEntranceAnimations() {
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        const animatedElements = document.querySelectorAll('.gallery__item, .about__content, .contact__content');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            animationObserver.observe(el);
        });
    }
}

// 1. A javított setLanguage függvény
function setLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    const elements = document.querySelectorAll('.lang-text');
    elements.forEach(el => {
        const translation = el.getAttribute('data-' + lang);
        if (translation) el.innerHTML = translation;
    });

    renderGallery();
    
    if (isLightboxOpen) {
        updateLightboxContent(); // Fontos: Frissíti a nyitott lightboxot
    }

    // Gombok aktív állapotának kezelése
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById('btn-' + lang);
    if (activeBtn) activeBtn.classList.add('active');
}

// 2. Egységesített indítás az oldal betöltésekor
	document.addEventListener('DOMContentLoaded', () => {
		init();
    	const savedLang = localStorage.getItem('selectedLang') || 'en';
		setLanguage(savedLang);
	});

if (isLightboxOpen) {
    updateLightboxContent();
}
