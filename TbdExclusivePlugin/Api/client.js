const container = `
<div class="verticalSection section-1 tbdExclusiveContainer">
  <div class="splide cardScalable">
    <div class="tbdExclusiveScrollButtonsContainer">
      <div class="emby-scrollbuttons splide__arrows">
        <button type="button" is="paper-icon-button-light" data-ripple="false" data-direction="left" title="Previous"
          class="emby-scrollbuttons-button paper-icon-button-light splide__arrow splide__arrow--prev">
          <span class="material-icons chevron_left" aria-hidden="true"></span>
        </button>

        <button class="tbdExclusivePlayPause splide__toggle emby-scrollbuttons-button paper-icon-button-light" type="button">
          <span class="splide__toggle__play material-icons play_arrow" aria-hidden="true"></span>
          <span class="splide__toggle__pause material-icons pause" aria-hidden="true"></span>
        </button>

        <button type="button" is="paper-icon-button-light" data-ripple="false" data-direction="right" title="Next"
          class="emby-scrollbuttons-button paper-icon-button-light splide__arrow splide__arrow--next">
          <span class="material-icons chevron_right" aria-hidden="true"></span>
        </button>
      </div>
    </div>

    <div class="splide__track">
      <div is="emby-itemscontainer" class="tbdExclusiveItemsContainer splide__list animatedScrollX"></div>
    </div>
  </div>
</div>

<style>
  /* ===== Layout / spacing ===== */
  .homeSectionsContainer.tbdExclusiveAdded { padding-top: 0 !important; }

  .homeSectionsContainer .tbdExclusiveContainer {
    padding-left: max(env(safe-area-inset-left), 3.3%);
    padding-right: max(env(safe-area-inset-right), 3.3%);
    margin-bottom: 1.8em;
  }

  .tbdExclusiveContainer .sectionTitle-cards { padding-bottom: 0.35em; }
  .tbdExclusiveItemsContainer { column-gap: normal !important; }

  @media screen and (max-width: 1600px) {
    .homeSectionsContainer.tbdExclusiveAdded { margin-top: 30px; }
  }

  /* ===== Controls ===== */
  .tbdExclusiveScrollButtonsContainer,
  .tbdExclusivePlayPauseContainer {
    position: absolute;
    z-index: 99;
    right: 0.15em;
    mix-blend-mode: difference;
  }

  .tbdExclusiveScrollButtonsContainer { width: 7em; }
  .tbdExclusivePlayPauseContainer { width: 4em; display: none; bottom: 0.83em; }

  .tbdExclusiveScrollButtonsContainer > .splide__arrows,
  .tbdExclusivePlayPauseContainer > .splide__toggle {
    float: right;
  }

  @media screen and (max-width: 500px) {
    .tbdExclusiveScrollButtonsContainer,
    .tbdExclusivePlayPauseContainer { display: none; }
  }

  .splide__track { border-radius: 0.2em; }

  .splide__arrow,
  .splide__toggle {
    position: relative;
    display: inline-block;
    opacity: 1;
    top: auto;
    transform: none;
    width: auto;
    height: auto;
    padding: .556em;
    background: transparent;
  }

  .splide__arrow--next { right: auto; }
  .splide__arrow--prev { left: auto; }

  .splide__toggle.is-active .splide__toggle__play,
  .emby-scrollbuttons-button > .splide__toggle__pause {
    display: none;
  }

  /* ===== Banner ===== */
  .tbdExclusiveItemBanner {
    width: 100%;
    height: 360px;
    flex: none;
    background-size: cover;
    background-position-x: center;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    background-position-y: 52%;
  }

  .tbdExclusiveItemBanner:nth-child(odd) { background-position-y: 48%; }

  @keyframes banner {
    0% { background-position-y: 52%; }
    100% { background-position-y: 48%; }
  }

  .tbdExclusiveItemBanner.is-visible {
    animation: banner 10s infinite alternate both;
  }

  .tbdExclusiveItemBanner:nth-child(odd).is-visible {
    animation-direction: alternate-reverse;
  }

  .tbdExclusiveItemBanner > div {
    width: 100%;
    height: 100%;
    padding: 30px;
    box-sizing: border-box;
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100%);
  }

  /* ===== Content ===== */
  .tbdExclusiveItemLogo {
    display: block;
    max-width: 300px;
    max-height: calc(50% - 45px);
  }

  .tbdExclusiveItemTitle {
    max-width: 100%;
    margin: 0 60px 0 0;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tbdExclusiveItemOverview {
    white-space: normal;
    width: 650px;
    min-width: 40%;
    max-width: 100%;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }

  .layout-tv .tbdExclusiveItemOverview {
    min-width: 55%;
    -webkit-line-clamp: 2;
  }

  .tbdExclusiveItemButton {
    width: fit-content !important;
    display: inline-block !important;
    position: absolute;
    margin: 0 !important;
    bottom: 30px;
  }

  .tbdExclusiveItemRating { display: block !important; margin-top: 1em; }

  .starIcon {
    color: #f2b01e;
    font-size: 1.4em;
    margin-right: 0.125em;
    vertical-align: bottom;
  }

  @media screen and (max-width: 500px) {
    .tbdExclusiveItemLogo {
      max-width: 100%;
      max-height: 100px;
      height: auto;
      filter: drop-shadow(3px 3px 15px black);
    }
  }

  /* ===== Hero mode ===== */
  .tbdExclusiveHeroMode .tbdExclusiveContainer { padding: 0 !important; }
  #homeTab.tbdExclusiveHeroMode { transform: translateY(-120px); }

  .tbdExclusiveHeroMode .splide.cardScalable {
    border-radius: unset !important;
    border: 0 !important;
    background: transparent;
    box-shadow: none !important;
    margin-bottom: -170px;
  }

  .tbdExclusiveHeroMode .tbdExclusiveHeight-360 .splide.cardScalable {
    margin-bottom: -75px;
  }

  .tbdExclusiveHeroMode .tbdExclusiveHeight-400 .splide.cardScalable {
    margin-bottom: -105px;
  }

  .tbdExclusiveHeroMode .tbdExclusiveHeight-500 .splide.cardScalable {
    margin-bottom: -150px;
  }


  .tbdExclusiveHeroMode .tbdExclusiveItemBanner { background-position-y: 15% !important; }
  .tbdExclusiveHeroMode .tbdExclusiveScrollButtonsContainer { margin-right: max(env(safe-area-inset-left), 3.3%); }
  .tbdExclusiveHeroMode .tbdExclusiveScrollButtonsContainer .emby-scrollbuttons { padding-top: 120px; }

  .tbdExclusiveHeroMode  .tbdExclusiveBackdropCenter {
      background-position: center;
  }

  .tbdExclusiveHeroMode .tbdExclusiveBackdropTop {
      background-position: top;
  }

  .tbdExclusiveHeroMode .tbdExclusiveBackdropBottom {
      background-position: bottom;
  }

  .tbdExclusiveHeroMode .tbdExclusiveItemBanner .tbdExclusiveBackdrop {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-size: cover;

    background-repeat: no-repeat;
    mask-image: linear-gradient(
      to bottom,
      rgba(0,0,0,1) 40%,
      rgba(0,0,0,0.9) 55%,
      rgba(0,0,0,0.4) 70%,
      rgba(0,0,0,0) 100%
    );
  }

  .tbdExclusiveHeroMode .tbdExclusiveItemButton {
    width: fit-content !important;
    display: inline-flex !important;
    position: relative;
    margin: 0 !important;
    bottom: unset !important;
  }

  .tbdExclusiveHeroMode .tbdExclusiveItemBanner .tbdExclusiveBackdrop::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.95) 0%,
      rgba(0,0,0,0.85) 15%,
      rgba(0,0,0,0.55) 30%,
      rgba(0,0,0,0.25) 50%,
      rgba(0,0,0,0.08) 65%,
      rgba(0,0,0,0) 80%
    );
  }

  .tbdExclusiveHeroMode .tbdExclusiveItemBanner .tbdExclusiveContent {
    position: relative;
    z-index: 2;
    height: 100%;
    padding: 90px max(env(safe-area-inset-right), 3.3%) 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: none !important;
  }

  /* ===== Poster carousel (TorrentBD-style coverflow) ===== */
  .tbdExclusivePosterMode .splide.cardScalable { display: none; }
  .ecPosterCarousel {
    position: relative;
    width: 100%;
    overflow: hidden;
    perspective: 500px;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    user-select: none;
    touch-action: pan-y;
  }
  .ecPosterItem {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    text-align: center;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: transform .45s ease, opacity .45s ease;
    will-change: transform, opacity;
  }
  .ecPosterItem img {
    display: block;
    width: 100%;
    height: calc(100% - 2.6em);
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 6px 18px rgba(0,0,0,.55);
    background: rgba(255,255,255,.05);
    pointer-events: none;
    -webkit-user-drag: none;
  }
  .ecPosterMeta {
    margin-top: .5em;
    font-size: .85em;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 .2em;
  }
  .ecPosterItem.is-center .ecPosterMeta { font-size: 1.05em; font-weight: 600; }
  .ecPosterItem:not(.is-center) .ecPosterMeta { opacity: .8; }
  .ecPosterNav {
    position: absolute; top: 50%; z-index: 100; transform: translateY(-50%);
    background: rgba(0,0,0,.45); border: 0; color: #fff; border-radius: 50%;
    width: 2.6em; height: 2.6em; cursor: pointer; display: flex;
    align-items: center; justify-content: center;
  }
  .ecPosterNav.prev { left: .5em; }
  .ecPosterNav.next { right: .5em; }
  .ecPosterNav:hover { background: rgba(0,0,0,.75); }
  @media screen and (max-width: 500px) { .ecPosterNav { display: none; } }
</style>
`;

const GUID = "f941e6d6-600a-474d-83bd-8e979e8747a0";
const HOME_CONTAINER_SELECTOR = "#indexPage:not(.hide) #homeTab.is-active .homeSectionsContainer";
const EDITORS_CHOICE_ADDED_CLASS = "tbdExclusiveAdded";
const EDITORS_CHOICE_LOADING_CLASS = "tbdExclusiveLoading";
const initializingContainers = new WeakSet();
const initializedContainers = new WeakSet();

/* ===== Utils ===== */
function shuffle(input) {
    const array = input.slice(); // don't mutate original
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getLocalizedString(key) {
    const localization = {
        watchButton: {
            en: "Watch",
            fr: "Regarder",
            es: "Ver",
            de: "Ansehen",
            it: "Guarda",
            pt: "Assistir",
            zh: "观看",
            ja: "見る",
            ru: "Смотреть",
        },
    };

    const lang = (navigator.language || "en").slice(0, 2);
    return (localization[key] && (localization[key][lang] || localization[key].en)) || "";
}

function getBaseUrl() {
    let baseUrl = Emby.Page.baseUrl() + "/";
    if (window.location.href.includes("/index.html")) baseUrl += "index.html";
    return baseUrl;
}

function buildRating(item) {
    const rating = typeof item.community_rating === "number" ? Number(item.community_rating.toFixed(1)) : 0;
    if (rating === 0) return "";
    return `<div class="tbdExclusiveItemRating starRatingContainer">
            <span class="material-icons starIcon star"></span>${rating}
          </div>`;
}

function buildLogoOrTitle(item, reduceImageSizes) {
    if (!item.hasLogo) return `<h1 class="tbdExclusiveItemTitle">${item.name}</h1>`;
    const logoSize = reduceImageSizes ? "?width=300" : "";
    return `<img class="tbdExclusiveItemLogo" src="../Items/${item.id}/Images/Logo/0${logoSize}" alt="${item.name}"/>`;
}

function buildOverview(item) {
    const overview = (item && typeof item.overview === "string") ? item.overview : "";
    return overview ? `<p class="tbdExclusiveItemOverview">${overview}</p>` : "";
}

function buildBannerSizeParam(reduceImageSizes) {
    if (!reduceImageSizes) return "";
    const w = Math.max(window.screen.width, window.screen.height);
    return `?width=${w}`;
}

function ensureSplideLoaded() {
    return new Promise((resolve, reject) => {
        if (window.Splide) return resolve();

        const existing = document.querySelector('script[data-tbdexclusive-splide="1"]');
        if (existing) {
            existing.addEventListener("load", resolve, { once: true });
            existing.addEventListener("error", reject, { once: true });
            return;
        }

        const s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js";
        s.setAttribute("data-tbdexclusive-splide", "1");
        s.addEventListener("load", resolve, { once: true });
        s.addEventListener("error", reject, { once: true });
        document.head.appendChild(s);

        if (!document.querySelector('link[data-tbdexclusive-splide="1"]')) {
            const l = document.createElement("link");
            l.rel = "stylesheet";
            l.href = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css";
            l.setAttribute("data-tbdexclusive-splide", "1");
            document.head.appendChild(l);
        }
    });
}

/* ===== Render ===== */
function renderHeroSlide(item, data, baseUrl) {
    const rating = buildRating(item);
    const logoOrTitle = buildLogoOrTitle(item, data.reduceImageSizes);
    const overview = buildOverview(item);

    let button = "";

    if(data.showPlayButton) {
        let buttonString = getLocalizedString("watchButton");
        // Check if Custom Text is set.
        if (data.playButtonText) {
            buttonString = data.playButtonText;
        }
        button = `<button is="emby-button" class="tbdExclusiveItemButton raised button-submit emby-button">
                    <span>${buttonString}</span>
                  </button>`;
    }

    const backdropSize = buildBannerSizeParam(data.reduceImageSizes);
    const backdropUrl = `../Items/${item.id}/Images/Backdrop/0${backdropSize}`;
    const extraClass = data.heroBackdropPosition === "center" ? "tbdExclusiveBackdropCenter" :
        data.heroBackdropPosition === "top" ? "tbdExclusiveBackdropTop" :
        data.heroBackdropPosition === "bottom" ? "tbdExclusiveBackdropBottom" : "";

    return `
  <a href="${baseUrl}#/details?id=${item.id}"
     onclick="Emby.Page.showItem('${item.id}'); return false;"
     class="tbdExclusiveItemBanner splide__slide">
    <div class="tbdExclusiveBackdrop ${extraClass}" style="background-image:url('${backdropUrl}');"></div>
    <div class="tbdExclusiveContent">
      ${logoOrTitle}
      ${rating}
      ${overview}
      ${button}
    </div>
  </a>`;
}

function renderNormalSlide(item, data, baseUrl) {
    const rating = buildRating(item);
    const logoOrTitle = buildLogoOrTitle(item, data.reduceImageSizes);
    const overview = buildOverview(item);

    const bannerSize = buildBannerSizeParam(data.reduceImageSizes);
    let button = "";
    if(data.showPlayButton) {
        let buttonString = getLocalizedString("watchButton");
        // Check if Custom Text is set.
        if (data.playButtonText) {
            buttonString = data.playButtonText;
        }
        button = `<button is="emby-button" class="tbdExclusiveItemButton raised button-submit emby-button">
                    <span>${buttonString}</span>
                  </button>`;
    }

    return `<a href="${baseUrl}#/details?id=${item.id}"
                 onclick="Emby.Page.showItem('${item.id}'); return false;"
                 class="tbdExclusiveItemBanner splide__slide"
                 style="background-image:url('../Items/${item.id}/Images/Backdrop/0${bannerSize}');">
                <div>
                  ${logoOrTitle}
                  ${rating}
                  ${overview}
                  ${button}
                </div>
              </a>`;
}

/* ===== Poster carousel (TorrentBD-style) ===== */
function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function buildPosterMeta(item) {
    // Title only (no year/rating) to keep the row clean and uncongested.
    return escapeHtml(item.name);
}

function renderPosterSlide(item, data, baseUrl) {
    // Primary = poster image. reduceImageSizes caps the height so we don't pull full-res posters.
    const size = data.reduceImageSizes ? "?maxHeight=600&quality=90" : "";
    const src = `../Items/${item.id}/Images/Primary/0${size}`;
    const safeName = escapeHtml(item.name);
    return `<a href="${baseUrl}#/details?id=${item.id}"
               class="ecPosterItem"
               title="${safeName}"
               draggable="false">
              <img src="${src}" alt="${safeName}" loading="lazy" draggable="false"/>
              <div class="ecPosterMeta">${buildPosterMeta(item) || safeName}</div>
            </a>`;
}

function mountPosterCarousel(containerElem, favourites, data, baseUrl) {
    const section = containerElem.querySelector(".splide");
    const wrap = document.createElement("div");
    wrap.className = "ecPosterCarousel";

    const bannerH = Number(data.bannerHeight) || 360;
    const cardH = Math.round(bannerH * 0.85);          // poster + meta line
    const cardW = Math.round((cardH - 40) * (2 / 3));  // 2:3 poster ratio
    wrap.style.height = `${bannerH}px`;
    wrap.innerHTML = favourites.map((it) => renderPosterSlide(it, data, baseUrl)).join("");
    section.parentNode.insertBefore(wrap, section);
    containerElem.classList.add("tbdExclusivePosterMode");

    const items = Array.from(wrap.querySelectorAll(".ecPosterItem"));
    const n = items.length;
    if (!n) return;

    items.forEach((el) => {
        el.style.width = `${cardW}px`;
        el.style.height = `${cardH}px`;
        el.style.marginLeft = `${-cardW / 2}px`;
        el.style.top = `${Math.round((bannerH - cardH) / 2)}px`;
    });

    let active = 0;
    let timer = null;
    let paused = false;
    const VISIBLE = 2;                    // cards shown on each side of the centre
    const step = cardW * 0.78;            // horizontal gap between cards
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Phones keep the tight spacing; wide screens (PC) get a visible gap between cards, like TorrentBD.
    function spacing() {
        return wrap.clientWidth >= 900
            ? { first: 1.4, next: 0.8 }
            : { first: 0.74, next: 0.52 };
    }

    function layout() {
        items.forEach((el, i) => {
            let d = i - active;
            if (d > n / 2) d -= n;
            if (d < -n / 2) d += n;
            const abs = Math.abs(d);
            if (abs > VISIBLE) {
                el.style.opacity = 0;
                el.style.pointerEvents = "none";
                el.style.zIndex = -10;
                el.style.transform = `translateX(${d * step}px) translateZ(-300px)`;
                el.classList.remove("is-center");
                return;
            }
            const dir = Math.sign(d);
            // centre card sits forward; neighbours are pushed apart and back, like the TBD carousel
            const m = spacing();
            const x = d === 0 ? 0 : dir * (cardW * m.first + (abs - 1) * cardW * m.next);
            const z = d === 0 ? 0 : -(abs * 110);
            const scale = d === 0 ? 1.08 : 1;
            el.style.transform = `translateX(${x}px) translateZ(${z}px) scale(${scale})`;
            el.style.opacity = d === 0 ? 1 : Math.max(0.25, 0.72 - (abs - 1) * 0.35);
            el.style.zIndex = String(10 - abs);
            el.style.pointerEvents = "auto";
            el.classList.toggle("is-center", d === 0);
        });
    }

    function go(to) {
        active = ((to % n) + n) % n;
        layout();
    }

    items.forEach((el, i) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            if (i === active) {
                Emby.Page.showItem(favourites[i].id);   // centre card -> open details
            } else {
                go(i);                                   // side card -> bring to centre
            }
        });
    });

    // Re-apply spacing when the window is resized (e.g. rotating a tablet, resizing a browser)
    let resizeRaf = null;
    window.addEventListener("resize", () => {
        if (!wrap.isConnected) return;
        if (resizeRaf) cancelAnimationFrame(resizeRaf);
        resizeRaf = requestAnimationFrame(layout);
    });

    // Arrows
    if (data.showNavigationArrows) {
        const prev = document.createElement("button");
        prev.type = "button"; prev.className = "ecPosterNav prev"; prev.title = "Previous";
        prev.innerHTML = '<span class="material-icons chevron_left" aria-hidden="true"></span>';
        const next = document.createElement("button");
        next.type = "button"; next.className = "ecPosterNav next"; next.title = "Next";
        next.innerHTML = '<span class="material-icons chevron_right" aria-hidden="true"></span>';
        prev.addEventListener("click", () => go(active - 1));
        next.addEventListener("click", () => go(active + 1));
        wrap.appendChild(prev);
        wrap.appendChild(next);
    }

    // Swipe / drag
    let startX = null;
    wrap.addEventListener("pointerdown", (e) => { startX = e.clientX; });
    wrap.addEventListener("pointerup", (e) => {
        if (startX === null) return;
        const dx = e.clientX - startX;
        startX = null;
        if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
    });
    wrap.addEventListener("pointercancel", () => { startX = null; });

    // Autoplay, paused while hovering (same behaviour as the TBD carousel)
    function start() {
        stop();
        if (!data.autoplay || reduceMotion || n < 2) return;
        timer = setInterval(() => {
            if (paused || !wrap.isConnected) return;
            go(active + 1);
        }, Math.max(1500, Number(data.autoplayInterval) || 10000));
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    wrap.addEventListener("mouseenter", () => { paused = true; });
    wrap.addEventListener("mouseleave", () => { paused = false; });
    start();

    go(0);
}

/* ===== Main setup ===== */
async function setup() {
    console.log("Attempting creation of TBD Exclusive Style slider.");

    // Claim each container synchronously. setup() can be scheduled again while
    // Splide is loading, so waiting before setting this marker can render the
    // same slider multiple times.
    const containers = Array.from(document.querySelectorAll(HOME_CONTAINER_SELECTOR)).filter((element) => {
        if (element.querySelector(":scope > .tbdExclusiveContainer")) {
            initializedContainers.add(element);
            element.classList.add(EDITORS_CHOICE_ADDED_CLASS);
            return false;
        }

        if (initializingContainers.has(element) || initializedContainers.has(element)) return false;
        if (element.classList.contains(EDITORS_CHOICE_LOADING_CLASS)) return false;

        initializingContainers.add(element);
        element.classList.add(EDITORS_CHOICE_LOADING_CLASS);
        return true;
    });
    if (!containers.length) return;

    try {
        await ensureSplideLoaded();
    } catch (e) {
        for (const elem of containers) {
            initializingContainers.delete(elem);
            elem.classList.remove(EDITORS_CHOICE_LOADING_CLASS);
        }
        console.warn("TBD Exclusive Style: Splide failed to load.", e);
        return;
    }

    for (const elem of containers) {
        if (!elem.isConnected || !elem.matches(HOME_CONTAINER_SELECTOR)) {
            initializingContainers.delete(elem);
            elem.classList.remove(EDITORS_CHOICE_LOADING_CLASS);
            continue;
        }

        console.log("Fetching favourites data from API...");
        let containerElem;

        ApiClient.fetch({ url: ApiClient.getUrl("/TbdExclusive/favourites"), type: "GET" })
            .then((response) => response.json())
            .then((data) => {
                if (!elem.isConnected || !elem.matches(HOME_CONTAINER_SELECTOR)) return;

                const existingContainer = elem.querySelector(":scope > .tbdExclusiveContainer");
                if (existingContainer) {
                    initializedContainers.add(elem);
                    elem.classList.add(EDITORS_CHOICE_ADDED_CLASS);
                    return;
                }

                if (data.hideOnTvLayout && document.documentElement.classList.contains("layout-tv")) {
                    console.log("TBD Exclusive Style: hidden on TV layout by configuration.");
                    initializedContainers.add(elem);
                    elem.classList.add(EDITORS_CHOICE_ADDED_CLASS);
                    return;
                }

                const favourites = shuffle(data.favourites || []);
                const template = document.createElement("template");
                template.innerHTML = container.trim();
                const content = template.content.cloneNode(true);
                containerElem = content.querySelector(".tbdExclusiveContainer");
                const containerId = `tbdExclusive-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

                containerElem.id = containerId;
                containerElem.classList.add(`tbdExclusiveHeight-${data.bannerHeight}`);
                elem.prepend(content);

                // TV focus workaround
                let focusResolved = false;
                containerElem.querySelectorAll(".emby-scrollbuttons button").forEach((button) => {
                    button.addEventListener("focus", () => {
                        if (focusResolved || !document.documentElement.classList.contains("layout-tv")) return;
                        document.querySelector('[is="emby-tabs"] .emby-button')?.focus();
                        focusResolved = true;
                    });
                });

                const homeTab = elem.closest("#homeTab");
                if (homeTab) homeTab.classList.toggle("tbdExclusiveHeroMode", !!data.useHeroLayout && !data.usePosterCarousel);

                if ("heading" in data && data.heading && !data.useHeroLayout && !data.usePosterCarousel) {
                    containerElem.insertAdjacentHTML("afterbegin", `<h2 class="sectionTitle sectionTitle-cards">${data.heading}</h2>`);
                }

                const baseUrl = getBaseUrl();
                const list = containerElem.querySelector(".tbdExclusiveItemsContainer");

                if (data.usePosterCarousel) {
                    // Poster (Primary image) coverflow, no Splide needed.
                    const posterItems = favourites.filter((f) => f.hasPrimary !== false);
                    containerElem.querySelector(".tbdExclusiveScrollButtonsContainer")?.remove();
                    if ("heading" in data && data.heading) {
                        containerElem.insertAdjacentHTML("afterbegin", `<h2 class="sectionTitle sectionTitle-cards">${data.heading}</h2>`);
                    }
                    homeTab?.classList.remove("tbdExclusiveHeroMode");
                    mountPosterCarousel(containerElem, posterItems, data, baseUrl);
                    initializedContainers.add(elem);
                    elem.classList.add(EDITORS_CHOICE_ADDED_CLASS);
                    return;
                }

                for (const item of favourites) {
                    const html = data.useHeroLayout
                        ? renderHeroSlide(item, data, baseUrl)
                        : renderNormalSlide(item, data, baseUrl);

                    list.insertAdjacentHTML("beforeend", html);
                }

                // Toggle slider controls independently from their behaviour.
                const playPauseBtn = containerElem.querySelector(".tbdExclusivePlayPause");
                if (playPauseBtn) playPauseBtn.style.display = data.autoplay && data.showAutoplayButton ? "" : "none";
                containerElem.querySelectorAll(".splide__arrow").forEach((arrow) => {
                    arrow.style.display = data.showNavigationArrows ? "" : "none";
                });

                new Splide(containerElem.querySelector(".splide"), {
                    type: data.transitionEffect ?? "loop",
                    autoplay: !!data.autoplay,
                    rewind: true,
                    interval: data.autoplayInterval,
                    pagination: false,
                    arrows: !!data.showNavigationArrows,
                    keyboard: true,
                    height: `${data.bannerHeight + (data.useHeroLayout ? 180 : 0)}px`, // Add 80px to the banner image height in hero mode to compensate for navbar overlay
                }).mount();

                initializedContainers.add(elem);
                elem.classList.add(EDITORS_CHOICE_ADDED_CLASS);
            })
            .catch((e) => {
                containerElem?.remove();
                initializedContainers.delete(elem);
                elem.classList.remove(EDITORS_CHOICE_ADDED_CLASS);
                console.warn("TBD Exclusive Style: failed to fetch/render.", e);
            })
            .finally(() => {
                initializingContainers.delete(elem);
                elem.classList.remove(EDITORS_CHOICE_LOADING_CLASS);
            });
    }
}

let setupScheduled = false;

function scheduleSetup() {
    if (setupScheduled) return;

    setupScheduled = true;
    window.requestAnimationFrame(() => {
        setupScheduled = false;
        setup();
    });
}

function nodeContainsHomeContainer(node) {
    if (!(node instanceof Element)) return false;

    return node.matches(HOME_CONTAINER_SELECTOR)
        || !!node.querySelector(HOME_CONTAINER_SELECTOR)
        || !!node.closest(HOME_CONTAINER_SELECTOR);
}

function initializeTbdExclusive() {
    // Jellyfin 12 mounts the legacy home tab as a nested React subtree. Observe
    // the React root when available and fall back to body for older web clients.
    const target = document.getElementById("reactRoot") || document.body;
    if (!target) {
        console.warn("TBD Exclusive Style: page root not found.");
        return;
    }

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === "attributes") {
                const element = mutation.target;
                if (element instanceof Element && element.matches("#indexPage, #homeTab")) {
                    scheduleSetup();
                    return;
                }
            }

            for (const node of mutation.addedNodes) {
                if (nodeContainsHomeContainer(node)) {
                    scheduleSetup();
                    return;
                }
            }
        }
    });

    observer.observe(target, {
        attributes: true,
        attributeFilter: ["class"],
        childList: true,
        subtree: true,
    });

    // The script can be loaded after the home tab has already mounted.
    scheduleSetup();

    // Remind user that their favourites will be public when they add a new favourite.
    document.body.addEventListener("click", (event) => {
        const ratingButton = event.target.closest?.('[is="emby-ratingbutton"]');
        if (!ratingButton || ratingButton.classList.contains("ratingbutton-withrating")) return;

        ApiClient.getPluginConfiguration(GUID).then((data) => {
            if (ApiClient.getCurrentUserId() === data.EditorUserId) {
                Dashboard.confirm("You are the featured items editor! Your favourites will be displayed on the home page for all users, if enabled.");
            }
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeTbdExclusive, { once: true });
} else {
    initializeTbdExclusive();
}
