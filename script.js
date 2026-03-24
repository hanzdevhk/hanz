const year = document.getElementById("year");
const scrollProgress = document.getElementById("scrollProgress");
const musicToggle = document.getElementById("musicToggle");
const musicPanel = document.getElementById("musicPanel");
const musicClose = document.getElementById("musicClose");
const musicPlay = document.getElementById("musicPlay");
const musicAudio = document.getElementById("musicAudio");
const photoSlides = document.getElementById("photoSlides");
const photoDots = document.getElementById("photoDots");
const photoCurrent = document.getElementById("photoCurrent");
const photoTotal = document.getElementById("photoTotal");

const photoItems = [
  {
    "src": "./assets/photos/photo-01.jpg",
    "alt": "Hanz 的攝影作品"
  },
  {
    "src": "./assets/photos/photo-02.jpg",
    "alt": "Hanz 的攝影作品"
  },
  {
    "src": "./assets/photos/photo-03.jpg",
    "alt": "Hanz 的攝影作品"
  },
  {
    "src": "./assets/photos/photo-04.jpg",
    "alt": "Hanz 的攝影作品"
  },
  {
    "src": "./assets/photos/photo-05.jpg",
    "alt": "Hanz 的攝影作品"
  },
  {
    "src": "./assets/photos/photo-06.jpg",
    "alt": "Hanz 的攝影作品"
  },
  {
    "src": "./assets/photos/photo-07.jpg",
    "alt": "Hanz 的攝影作品"
  },
  {
    "src": "./assets/photos/photo-08.jpg",
    "alt": "Hanz 的攝影作品"
  },
  {
    "src": "./assets/photos/photo-09.jpg",
    "alt": "Hanz 的攝影作品"
  },
  {
    "src": "./assets/photos/photo-10.jpg",
    "alt": "Hanz 的攝影作品"
  },
  {
    "src": "./assets/photos/photo-11.jpg",
    "alt": "Hanz 的攝影作品"
  }
];

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateScrollProgress = () => {
  if (!scrollProgress) return;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? (window.scrollY / height) * 100 : 0;
  document.documentElement.style.setProperty("--scroll-progress", `${progress}%`);
};

updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);

window.addEventListener("pointermove", (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty("--x", `${x}%`);
  document.documentElement.style.setProperty("--y", `${y}%`);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const statFormatter = (value, suffix = "+") => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1)}M${suffix}`;
  }
  return `${value}${suffix}`;
};

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      const target = Number(element.dataset.count || 0);
      const suffix = element.dataset.suffix ?? "+";
      const duration = 1400;
      const startTime = performance.now();

      const step = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(target * eased);
        element.textContent = statFormatter(current, suffix);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          element.textContent = statFormatter(target, suffix);
        }
      };

      requestAnimationFrame(step);
      countObserver.unobserve(element);
    });
  },
  { threshold: 0.35 }
);

document.querySelectorAll("[data-count]").forEach((element) => {
  countObserver.observe(element);
});

const tiltCards = document.querySelectorAll(".tilt-card");
const enableTilt = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (enableTilt) {
  tiltCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 6;
      const rotateX = (0.5 - py) * 6;

      card.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  });
}

const openMusicPanel = () => {
  if (!musicPanel || !musicToggle) return;
  musicPanel.hidden = false;
  musicToggle.setAttribute("aria-expanded", "true");
};

const closeMusicPanel = () => {
  if (!musicPanel || !musicToggle) return;
  musicPanel.hidden = true;
  musicToggle.setAttribute("aria-expanded", "false");
};

musicToggle?.addEventListener("click", () => {
  const expanded = musicToggle.getAttribute("aria-expanded") === "true";
  if (expanded) {
    closeMusicPanel();
  } else {
    openMusicPanel();
  }
});

musicClose?.addEventListener("click", closeMusicPanel);

const initializePhotoSlides = () => {
  if (!photoSlides || !photoItems.length) return;

  let currentIndex = 0;
  let timer = null;

  const renderDots = () => {
    if (!photoDots) return;
    photoDots.innerHTML = "";
    photoItems.forEach((item, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `photo-dot${index === 0 ? " is-active" : ""}`;
      button.setAttribute("aria-label", `顯示第 ${index + 1} 張作品`);
      button.addEventListener("click", () => {
        showSlide(index, true);
      });
      photoDots.appendChild(button);
    });
  };

  const createSlide = (item, index) => {
    const img = document.createElement("img");
    img.className = `photo-slide${index === 0 ? " is-active" : ""}`;
    img.src = item.src;
    img.alt = item.alt;
    img.loading = index === 0 ? "eager" : "lazy";
    return img;
  };

  const slides = photoItems.map(createSlide);
  photoSlides.innerHTML = "";
  slides.forEach((slide) => photoSlides.appendChild(slide));
  renderDots();

  if (photoTotal) photoTotal.textContent = String(photoItems.length);
  if (photoCurrent) photoCurrent.textContent = "1";

  const updateDots = (index) => {
    if (!photoDots) return;
    [...photoDots.children].forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
    });
  };

  const showSlide = (index, resetTimer = false) => {
    currentIndex = index;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });
    updateDots(index);
    if (photoCurrent) photoCurrent.textContent = String(index + 1);

    if (resetTimer) {
      clearInterval(timer);
      timer = setInterval(() => {
        showSlide((currentIndex + 1) % slides.length);
      }, 4200);
    }
  };

  timer = setInterval(() => {
    showSlide((currentIndex + 1) % slides.length);
  }, 4200);
};

initializePhotoSlides();

musicPlay?.addEventListener("click", async () => {
  if (!musicAudio) return;

  if (musicAudio.paused) {
    try {
      await musicAudio.play();
      musicPlay.textContent = "暫停音樂";
      musicToggle?.classList.add("is-playing");
    } catch (error) {
      musicPlay.textContent = "點一下再播放";
    }
  } else {
    musicAudio.pause();
    musicPlay.textContent = "播放音樂";
    musicToggle?.classList.remove("is-playing");
  }
});

musicAudio?.addEventListener("pause", () => {
  if (musicPlay) musicPlay.textContent = "播放音樂";
  musicToggle?.classList.remove("is-playing");
});

musicAudio?.addEventListener("play", () => {
  if (musicPlay) musicPlay.textContent = "暫停音樂";
  musicToggle?.classList.add("is-playing");
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMusicPanel();
  }
});
