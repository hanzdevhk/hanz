const galleryGrid = document.getElementById("galleryGrid");
const galleryFilters = document.getElementById("galleryFilters");
const galleryStatus = document.getElementById("galleryStatus");
const galleryCount = document.getElementById("galleryCount");
const galleryLightbox = document.getElementById("galleryLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxLoader = document.getElementById("lightboxLoader");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCategory = document.getElementById("lightboxCategory");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const originalWorks = [
  { src: "./assets/photos/photo-01.jpg", width: 2400, height: 1600, title: "枝葉之間", category: "Nature" },
  { src: "./assets/photos/photo-02.jpg", width: 2400, height: 1600, title: "午後微光", category: "Nature" },
  { src: "./assets/photos/photo-03.jpg", width: 2400, height: 1600, title: "雲隙", category: "Urban" },
  { src: "./assets/photos/photo-04.jpg", width: 2400, height: 1600, title: "花期", category: "Nature" },
  { src: "./assets/photos/photo-05.jpg", width: 2400, height: 1600, title: "暖色盛放", category: "Nature" },
  { src: "./assets/photos/photo-06.jpg", width: 1600, height: 2400, title: "綠意深處", category: "Nature" },
  { src: "./assets/photos/photo-07.jpg", width: 2400, height: 1600, title: "橙色花園", category: "Nature" },
  { src: "./assets/photos/photo-08.jpg", width: 2400, height: 1600, title: "海岸遠望", category: "Waterfront" },
  { src: "./assets/photos/photo-09.jpg", width: 2400, height: 1600, title: "海邊的人們", category: "Waterfront" },
  { src: "./assets/photos/photo-10.jpg", width: 2400, height: 1600, title: "潮汐", category: "Waterfront" },
  { src: "./assets/photos/photo-11.jpg", width: 2400, height: 1600, title: "水面微光", category: "Nature" }
];

const newWorkFiles = [
  { file: "DSC02360-12", width: 3386, height: 3386, category: "Nature" },
  { file: "DSC02361-13", width: 5201, height: 3467, category: "Nature" },
  { file: "DSC02368-14", width: 2872, height: 4308, category: "Nature" },
  { file: "DSC02369-15", width: 3903, height: 4879, category: "Nature" },
  { file: "DSC02418-25", width: 4000, height: 6000, category: "Abstract" },
  { file: "DSC02420-26", width: 4000, height: 6000, category: "Abstract" },
  { file: "DSC02431-28", width: 5455, height: 3637, category: "Nature" },
  { file: "DSC02439-29", width: 4000, height: 5333, category: "Abstract" },
  { file: "DSC02448-31", width: 4000, height: 5333, category: "Nature" },
  { file: "DSC02451-32", width: 4000, height: 6000, category: "Nature" },
  { file: "DSC02452-33", width: 6000, height: 4000, category: "Nature" },
  { file: "DSC02470-36", width: 5871, height: 3914, category: "Urban" },
  { file: "DSC02484-37", width: 5339, height: 3559, category: "Urban" },
  { file: "DSC02523-43", width: 5987, height: 3991, category: "Urban" },
  { file: "DSC02530-45", width: 3780, height: 5040, category: "Nature" },
  { file: "DSC02535-47", width: 4150, height: 2767, category: "Nature" },
  { file: "DSC02561-50", width: 5821, height: 3881, category: "Urban" },
  { file: "DSC02562-51", width: 5805, height: 3870, category: "Urban" },
  { file: "DSC02581-54", width: 4000, height: 6000, category: "Nature" },
  { file: "DSC02589-55", width: 3750, height: 3750, category: "Urban" },
  { file: "IMG_6841-1", width: 3307, height: 4960, category: "Urban" },
  { file: "IMG_6842-2", width: 3710, height: 4947, category: "Nature" },
  { file: "IMG_6858-4", width: 5848, height: 3899, category: "Urban" },
  { file: "IMG_6871-6", width: 4000, height: 6000, category: "Abstract" },
  { file: "IMG_6881-8", width: 6000, height: 4000, category: "Abstract" },
  { file: "IMG_6906-9", width: 6000, height: 4000, category: "Urban" },
  { file: "IMG_6926-10", width: 4000, height: 6000, category: "Urban" },
  { file: "IMG_6932-11", width: 5277, height: 3518, category: "Urban" },
  { file: "IMG_6939-12", width: 5779, height: 3853, category: "Urban" },
  { file: "IMG_6956-13", width: 3899, height: 5848, category: "Urban" },
  { file: "IMG_6961-14", width: 3953, height: 3953, category: "Nature" },
  { file: "IMG_6965-15", width: 5333, height: 4000, category: "Nature" },
  { file: "IMG_6969-17", width: 2484, height: 3312, category: "Nature" },
  { file: "IMG_6971-18", width: 4000, height: 6000, category: "Nature" },
  { file: "IMG_7029-26", width: 3949, height: 5924, category: "Waterfront" },
  { file: "IMG_7032-27", width: 5149, height: 3433, category: "Waterfront" },
  { file: "IMG_7041-28", width: 3224, height: 4836, category: "Waterfront" },
  { file: "IMG_7042-29", width: 3407, height: 5111, category: "Waterfront" },
  { file: "IMG_7048-30", width: 3996, height: 2664, category: "Waterfront" },
  { file: "IMG_7082-34", width: 5702, height: 3801, category: "Waterfront" },
  { file: "IMG_7094-36", width: 2030, height: 2030, category: "Nature" },
  { file: "IMG_7095-37", width: 4000, height: 6000, category: "Abstract" },
  { file: "IMG_7100-39", width: 5477, height: 3651, category: "Waterfront" },
  { file: "IMG_7119-42", width: 6000, height: 4000, category: "Abstract" },
  { file: "IMG_7125-43", width: 5333, height: 4000, category: "Abstract" },
  { file: "IMG_7126-44", width: 4000, height: 6000, category: "Abstract" },
  { file: "IMG_7128-46", width: 4000, height: 4000, category: "Abstract" },
  { file: "IMG_7134-47", width: 4649, height: 3099, category: "Waterfront" },
  { file: "IMG_7137-48", width: 6000, height: 4000, category: "Waterfront" },
  { file: "IMG_7145-49", width: 4309, height: 3232, category: "Waterfront" },
  { file: "IMG_7147-50", width: 5670, height: 3780, category: "Waterfront" },
  { file: "IMG_7149-51", width: 3363, height: 5045, category: "Waterfront" },
  { file: "IMG_7155-52", width: 6000, height: 4000, category: "Waterfront" },
  { file: "IMG_7160-53", width: 3320, height: 4980, category: "Urban" },
  { file: "IMG_7169-54", width: 3941, height: 5912, category: "Urban" },
  { file: "IMG_7177-55", width: 2293, height: 3439, category: "Urban" },
  { file: "IMG_7202-57", width: 5528, height: 3685, category: "Urban" }
];

const seriesNames = {
  Nature: "自然光景",
  Urban: "城市散步",
  Waterfront: "海旁日記",
  Abstract: "光影實驗"
};

const seriesCounts = {};
const newWorks = newWorkFiles.map((work) => {
  seriesCounts[work.category] = (seriesCounts[work.category] || 0) + 1;
  const number = String(seriesCounts[work.category]).padStart(2, "0");
  return {
    src: `./assets/gallery/${work.file}.webp`,
    thumbSrc: `./assets/gallery/thumbs/${work.file}.webp`,
    width: work.width,
    height: work.height,
    title: `${seriesNames[work.category]} ${number}`,
    category: work.category
  };
});

const localWorks = [...newWorks, ...originalWorks];

let allWorks = [];
let visibleWorks = [];
let activeFilter = "All";
let activeLightboxIndex = 0;
let lastFocusedElement = null;

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const getThumbnailData = (work) => {
  return { src: work.thumbSrc || work.src };
};

const getFullImageUrl = (work) => work.src;

const createCard = (work, index) => {
  const button = document.createElement("button");
  const image = document.createElement("img");
  const copy = document.createElement("span");
  const label = document.createElement("span");
  const title = document.createElement("strong");
  const cardIndex = document.createElement("span");
  const imageData = getThumbnailData(work);

  button.type = "button";
  button.className = "gallery-card";
  button.setAttribute("aria-label", `放大觀看：${work.title}`);
  button.addEventListener("click", () => openLightbox(index));

  image.src = imageData.src;
  image.alt = work.title;
  image.width = work.width;
  image.height = work.height;
  image.loading = index < 2 ? "eager" : "lazy";
  image.decoding = "async";

  copy.className = "gallery-card-copy";
  label.textContent = work.category;
  title.textContent = work.title;
  cardIndex.className = "gallery-card-index";
  cardIndex.textContent = String(index + 1).padStart(2, "0");

  const textWrap = document.createElement("span");
  textWrap.append(label, title);
  copy.append(textWrap, cardIndex);
  button.append(image, copy);
  return button;
};

const renderGallery = () => {
  visibleWorks =
    activeFilter === "All"
      ? [...allWorks]
      : allWorks.filter((work) => work.category === activeFilter);

  galleryGrid.replaceChildren(...visibleWorks.map(createCard));
  galleryStatus.textContent = visibleWorks.length ? "" : "這個分類暫時未有作品。";
  galleryCount.textContent = `${allWorks.length} works`;
};

const renderFilters = () => {
  const categories = ["All", ...new Set(allWorks.map((work) => work.category))];
  const buttons = categories.map((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `gallery-filter${category === activeFilter ? " is-active" : ""}`;
    button.textContent = category === "All" ? "全部" : category;
    button.setAttribute("aria-pressed", String(category === activeFilter));
    button.addEventListener("click", () => {
      activeFilter = category;
      renderFilters();
      renderGallery();
    });
    return button;
  });
  galleryFilters.replaceChildren(...buttons);
};

const updateLightbox = (index) => {
  activeLightboxIndex = (index + visibleWorks.length) % visibleWorks.length;
  const work = visibleWorks[activeLightboxIndex];

  lightboxLoader.classList.remove("is-hidden");
  lightboxImage.src = getFullImageUrl(work);
  lightboxImage.alt = work.title;
  lightboxTitle.textContent = work.title;
  lightboxCategory.textContent = work.category;
  lightboxCounter.textContent = `${activeLightboxIndex + 1} / ${visibleWorks.length}`;
};

const openLightbox = (index) => {
  if (!visibleWorks.length) return;
  lastFocusedElement = document.activeElement;
  galleryLightbox.hidden = false;
  document.body.classList.add("has-lightbox");
  updateLightbox(index);
  galleryLightbox.querySelector(".lightbox-close").focus();
};

const closeLightbox = () => {
  galleryLightbox.hidden = true;
  document.body.classList.remove("has-lightbox");
  lightboxImage.src = "";
  lastFocusedElement?.focus();
};

lightboxImage.addEventListener("load", () => {
  lightboxLoader.classList.add("is-hidden");
});

lightboxPrev.addEventListener("click", () => updateLightbox(activeLightboxIndex - 1));
lightboxNext.addEventListener("click", () => updateLightbox(activeLightboxIndex + 1));
document.querySelectorAll("[data-lightbox-close]").forEach((element) => {
  element.addEventListener("click", closeLightbox);
});

window.addEventListener("keydown", (event) => {
  if (galleryLightbox.hidden) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") updateLightbox(activeLightboxIndex - 1);
  if (event.key === "ArrowRight") updateLightbox(activeLightboxIndex + 1);
});

const initializeGallery = () => {
  allWorks = localWorks;
  renderFilters();
  renderGallery();
};

initializeGallery();
