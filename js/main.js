/**
 * Portfolio Editorial Website Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const categoryItems = document.querySelectorAll('.category-item');
  const bottomHeadline = document.getElementById('bottomHeadline');
  const galleryCards = document.querySelectorAll('.gallery-card');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxInfo = document.getElementById('lightboxInfo');
  const lightboxClose = document.getElementById('lightboxClose');
  const menuToggle = document.getElementById('menuToggle');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuClose = document.getElementById('menuClose');
  const arrowUp = document.getElementById('arrowUp');
  const arrowDown = document.getElementById('arrowDown');
  const contactInfoPanel = document.getElementById('contactInfoPanel');
  const brandLogo = document.getElementById('brandLogo');
  const creditsPanel = document.getElementById('creditsPanel');
  const galleryGrid = document.getElementById('galleryGrid');
  const projectDescCard = document.getElementById('projectDescCard');
  const projectTag = document.getElementById('projectTag');
  const projectYear = document.getElementById('projectYear');
  const projectDescTitle = document.getElementById('projectDescTitle');
  const projectDescRole = document.getElementById('projectDescRole');
  const projectDescBody = document.getElementById('projectDescBody');
  const projectLinkWrap = document.getElementById('projectLinkWrap');
  const projectLinkBtn = document.getElementById('projectLinkBtn');
  const projectLinkLabel = document.getElementById('projectLinkLabel');
  const projectLinkNote = document.getElementById('projectLinkNote');

  // Detailed Project Descriptions (Can easily be customized)
  const projectData = {
    bts: {
      tag: 'Media Server & Visual',
      year: 'May 2026',
      title: "BTS*SPOTIFY MV 'Merry Go Round'",
      role: '',
      description: "<p style='font-weight: 600; color: #111; margin-bottom: 3px;'>Visual Designer</p><p style='color: #444; line-height: 1.55;'>Post-production Effects Designer for a music video, designing motion trail effects</p>",
      link: 'https://open.spotify.com/track/6t4JEAfgl8oVJUASyxzptH?si=d9a0f51b1bbb49d4',
      linkLabel: 'Watch on Spotify',
      linkNote: 'This music video was released exclusively for Spotify users and can be viewed in the Spotify app.'
    },
    lilmoshpit: {
      tag: 'Media Server & Visual',
      year: 'Jan 2026',
      title: "Lil Moshpit X Jay Park MV 'GOAT'",
      role: '',
      description: "<p style='font-weight: 600; color: #111; margin-bottom: 3px;'>Visual / Effect Designer</p><p style='color: #444; line-height: 1.55;'>Developed a system using Kinect motion tracking to convert the artist’s movements into real-time particle visuals on set.</p><p style='margin-top: 8px; color: #444; line-height: 1.55;'>Also applied slit-scan processing to transform and distort the artist’s image.</p>",
      link: 'https://www.youtube.com/watch?v=d_jH2Skmmpk',
      linkLabel: 'Watch on YouTube'
    },
    decoder: {
      tag: 'Media Server & Visual',
      year: 'June 2026',
      title: 'Personal Decoder',
      role: '',
      description: "<p style='font-weight: 600; color: #111; margin-bottom: 3px;'>Project Leader / Director</p><p style='margin-bottom: 14px; color: #444; line-height: 1.55;'>Conceived and directed the overall project, from concept to exhibition.</p><p style='font-weight: 600; color: #111; margin-bottom: 3px;'>Backend Developer</p><p style='margin-bottom: 16px; color: #444; line-height: 1.55;'>Built the main server's backend — receiving voice data from each module, processing it through a fine-tuned LLM, and re-transmitting the result to the next module.</p><p style='color: #555; line-height: 1.6; font-size: 0.82rem; padding-top: 12px; border-top: 1px solid rgba(0, 0, 0, 0.08);'>Each module — composed of a highly directional speaker and an omnidirectional microphone — emits information as speech and receives it as an acoustic signal. Through speech recognition and AI (TTS) voice synthesis, each module instantly reinterprets the information it has picked up and passes the result on to the next module. A machine that has captured only corrupted noise, its transmission path severed, appears compelled to force the gaps in information into place. Through this process, the audience witnesses the omission of information and the reconstruction of narrative that occurs within those gaps.</p>"
    },
    roman: {
      tag: 'Media Server & Visual',
      year: 'Aug 2025',
      title: 'ROMAN',
      role: '',
      description: "<p style='font-weight: 600; color: #111; margin-bottom: 3px;'>Visual Designer</p><p style='margin-bottom: 14px; color: #444; line-height: 1.55;'>Created a time-synchronized stage visual simulating a sunrise and sunset aligned with the duration of the band's performance.</p><p style='font-weight: 600; color: #111; margin-bottom: 3px;'>Backend Developer</p><p style='color: #444; line-height: 1.55;'>Implemented an audio-reactive lighting control system that responds in real time to the band's sound.</p>",
      link: 'https://www.youtube.com/watch?v=sqFMWxRfBLE&t=9136s',
      linkLabel: 'Watch on YouTube',
      linkNote: 'Skip to the 2:28:30 mark in the video'
    },
    gmcave: {
      tag: 'Sound',
      year: 'Aug 2026 · [1DSB], In-house',
      title: "GM cave 'Dark immersive meditation'",
      role: '',
      description: "<p style='font-weight: 600; color: #111; margin-bottom: 3px;'>Sound Director</p><p style='margin-bottom: 14px; color: #444; line-height: 1.55;'>Composed, mixed, and mastered the ambient music used in the exhibition. Also designed and synthesized the SFX featured throughout the show.</p><p style='font-weight: 600; color: #111; margin-bottom: 3px;'>Software Developer</p><p style='color: #444; line-height: 1.55;'>Developed the tool used to generate the exhibition's main particle visuals, providing the resulting video footage.</p>",
      link: 'https://drive.google.com/file/d/1M8hMqi1SRRRRggfVCLjMTf5pGrjXfqHc/view?usp=sharing',
      linkLabel: 'Watch Video'
    },
    torque: {
      tag: 'Sound',
      year: 'June 2025',
      title: 'TORQUE',
      role: '',
      description: "<p style='font-weight: 600; color: #111; margin-bottom: 3px;'>Sound Director</p><p style='color: #444; line-height: 1.55;'>Music Director for a 5-minute 3D animation, composing, mixing, and mastering the soundtrack, and designing the animation's SFX</p>",
      link: 'https://drive.google.com/file/d/1mgzJ5PYYz_6_w4FfY6MzCLntxCnIPDyl/view?usp=drive_link',
      linkLabel: 'Watch Video'
    }
  };

  let currentCategoryIndex = 0;

  // 1. Category Switcher & Headline Text Update
  function setActiveCategory(index) {
    if (index < 0) index = categoryItems.length - 1;
    if (index >= categoryItems.length) index = 0;

    currentCategoryIndex = index;
    categoryItems.forEach((item, i) => {
      item.classList.toggle('active', i === currentCategoryIndex);
    });

    const activeItem = categoryItems[currentCategoryIndex];
    const categoryName = activeItem.getAttribute('data-title') || activeItem.querySelector('.category-link').textContent.trim();
    const filterTag = activeItem.getAttribute('data-filter') || 'all';

    // Animate bottom headline
    if (bottomHeadline) {
      bottomHeadline.classList.add('fade-out');
      setTimeout(() => {
        bottomHeadline.textContent = categoryName;
        bottomHeadline.classList.remove('fade-out');
      }, 200);
    }

    // Highlight contact information panel when Contact is active
    if (contactInfoPanel) {
      if (filterTag === 'contact' || categoryName.toLowerCase() === 'contact') {
        contactInfoPanel.classList.add('highlighted');
      } else {
        contactInfoPanel.classList.remove('highlighted');
      }
    }

    // Update project description card (Middle Zone)
    if (projectData[filterTag]) {
      const data = projectData[filterTag];
      if (projectTag) projectTag.textContent = data.tag;
      if (projectYear) projectYear.textContent = data.year;
      if (projectDescTitle) projectDescTitle.textContent = data.title;
      if (projectDescRole) {
        if (data.role) {
          projectDescRole.textContent = data.role;
          projectDescRole.style.display = 'block';
        } else {
          projectDescRole.style.display = 'none';
        }
      }
      if (projectDescBody) {
        projectDescBody.innerHTML = data.description.startsWith('<p>') ? data.description : `<p>${data.description}</p>`;
      }
      if (projectLinkWrap) {
        if (data.link) {
          projectLinkWrap.style.display = 'block';
          if (projectLinkBtn) {
            projectLinkBtn.href = data.link;
          }
          if (projectLinkLabel) {
            projectLinkLabel.textContent = data.linkLabel || 'Watch Video';
          }
          if (projectLinkNote) {
            if (data.linkNote) {
              projectLinkNote.textContent = data.linkNote;
              projectLinkNote.style.display = 'block';
            } else {
              projectLinkNote.textContent = '';
              projectLinkNote.style.display = 'none';
            }
          }
        } else {
          projectLinkWrap.style.display = 'none';
        }
      }
      if (projectDescCard) projectDescCard.classList.add('active');
    } else {
      if (projectDescCard) projectDescCard.classList.remove('active');
      if (projectLinkWrap) projectLinkWrap.style.display = 'none';
    }

    // Toggle Additional Credits panel vs Gallery Grid
    if (filterTag === 'credits' || categoryName.toLowerCase() === 'additional credits') {
      if (creditsPanel) creditsPanel.classList.add('active');
      if (galleryGrid) galleryGrid.classList.add('hidden');
    } else {
      if (creditsPanel) creditsPanel.classList.remove('active');
      if (galleryGrid) galleryGrid.classList.remove('hidden');
      filterGallery(filterTag);
    }
  }

  // Brand Logo (KIM YEJI) click: Return to main page (Home)
  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      e.preventDefault();
      const homeIndex = Array.from(categoryItems).findIndex(item => {
        const filter = item.getAttribute('data-filter');
        const title = item.getAttribute('data-title');
        return filter === 'all' || filter === 'home' || title === 'Home';
      });
      setActiveCategory(homeIndex !== -1 ? homeIndex : 0);
    });
  }

  categoryItems.forEach((item, index) => {
    const link = item.querySelector('.category-link');
    link.addEventListener('click', (e) => {
      e.preventDefault();
      setActiveCategory(index);
    });
  });

  // 2. Filter Gallery Cards by Category or Group
  function filterGallery(tag) {
    galleryCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardGroup = card.getAttribute('data-group');

      let isMatch = false;
      if (tag === 'all' || tag === 'gallery' || !tag) {
        isMatch = true;
      } else if (tag.startsWith('group:')) {
        const groupName = tag.split(':')[1];
        isMatch = (cardGroup === groupName);
      } else {
        isMatch = (cardCategory === tag);
      }

      if (isMatch) {
        card.style.opacity = '1';
        card.style.filter = '';
        card.style.pointerEvents = 'auto';
      } else {
        // Dim non-matching items softly to preserve the 4-column layout aesthetic
        card.style.opacity = '0.22';
        card.style.filter = 'grayscale(100%)';
        card.style.pointerEvents = 'auto';
      }
    });
  }

  // 3. Arrow Indicator Controls (Up / Down)
  if (arrowUp) {
    arrowUp.addEventListener('click', () => {
      setActiveCategory(currentCategoryIndex - 1);
    });
  }

  if (arrowDown) {
    arrowDown.addEventListener('click', () => {
      setActiveCategory(currentCategoryIndex + 1);
    });
  }

  // 4. Lightbox Modal Functionality
  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const caption = card.querySelector('.card-caption');
      if (img && lightboxModal && lightboxImage) {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt || 'Portfolio image';
        lightboxInfo.textContent = caption ? caption.textContent : img.alt;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // 5. Fullscreen Menu Overlay Toggle
  function openMenu() {
    if (menuOverlay) {
      menuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMenu() {
    if (menuOverlay) {
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (menuToggle) menuToggle.addEventListener('click', openMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);

  document.querySelectorAll('.menu-overlay-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // 6. Keyboard Shortcuts (ESC to close modal/menu)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeMenu();
    } else if (e.key === 'ArrowUp') {
      setActiveCategory(currentCategoryIndex - 1);
    } else if (e.key === 'ArrowDown') {
      setActiveCategory(currentCategoryIndex + 1);
    }
  });
});
