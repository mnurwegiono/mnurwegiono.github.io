/* Global: nav, reveal, utilities */
(function(){
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

  // Mobile menu
  const toggle = $("#mobileToggle");
  const panel = $("#mobilePanel");
  if (toggle && panel){
    toggle.addEventListener("click", ()=> panel.classList.toggle("open"));
  }

  // Active link highlight
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  $$('a[data-nav]').forEach(a=>{
    const href = (a.getAttribute("href")||"").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // Reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    for (const e of entries){
      if (e.isIntersecting) e.target.classList.add("show");
    }
  }, {threshold: 0.12});
  $$(".reveal").forEach(el=>io.observe(el));

  // Optional: client-side rendering for lists
  const dataScript = $("#siteData");
  if (dataScript){
    try {
      const data = JSON.parse(dataScript.textContent);
      renderLists(data);
      wireSearch(data);
    } catch(err){
      console.warn("Data parse failed", err);
    }
  }

  function el(tag, cls, html){
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }

  function renderLists(data){
    // Publications
    const pubRoot = $("#pubList");
    if (pubRoot && data.publications){
      pubRoot.innerHTML = "";
      for (const p of data.publications){
        const it = el("div","item reveal");
        it.innerHTML = `
          <div class="meta">
            <span class="pill info">${escapeHtml(p.type)}</span>
            <span class="pill">${escapeHtml(p.year)}</span>
            ${p.venue ? `<span class="pill">${escapeHtml(p.venue)}</span>` : ``}
          </div>
          <div style="margin-top:10px; font-weight:900; letter-spacing:-.01em">${escapeHtml(p.title)}</div>
          <div class="p" style="margin-top:6px">${escapeHtml(p.note || "")}</div>
          ${p.link ? `<a class="btn" href="${p.link}" target="_blank" rel="noopener">View</a>` : ``}
        `;
        pubRoot.appendChild(it);
      }
      // Re-observe newly added reveal elements
      const io2 = new IntersectionObserver((entries)=>{
        for (const e of entries){ if (e.isIntersecting) e.target.classList.add("show"); }
      }, {threshold: 0.12});
      pubRoot.querySelectorAll(".reveal").forEach(n=>io2.observe(n));
    }

    // Projects
    const projRoot = $("#projectList");
    if (projRoot && data.projects){
      projRoot.innerHTML = "";
      for (const pr of data.projects){
        const it = el("div","item reveal");
        it.innerHTML = `
          <div class="meta">
            <span class="pill ok">${escapeHtml(pr.status)}</span>
            <span class="pill">${escapeHtml(pr.year)}</span>
            ${pr.tag ? `<span class="pill info">${escapeHtml(pr.tag)}</span>` : ``}
          </div>
          <div style="margin-top:10px; font-weight:900">${escapeHtml(pr.name)}</div>
          <div class="p" style="margin-top:6px">${escapeHtml(pr.desc)}</div>
          ${pr.links?.length ? `<div class="actions">${pr.links.map(x=>`<a class="btn" href="${x.href}" target="_blank" rel="noopener">${escapeHtml(x.label)}</a>`).join("")}</div>` : ``}
        `;
        projRoot.appendChild(it);
      }
      const io2 = new IntersectionObserver((entries)=>{
        for (const e of entries){ if (e.isIntersecting) e.target.classList.add("show"); }
      }, {threshold: 0.12});
      projRoot.querySelectorAll(".reveal").forEach(n=>io2.observe(n));
    }

    // Talks
    const talkRoot = $("#talkList");
    if (talkRoot && data.invited_speaking){
      talkRoot.innerHTML="";
      for (const t of data.invited_speaking){
        const it = el("div","item reveal");
        it.innerHTML = `
          <div class="meta">
            <span class="pill">${escapeHtml(t.year)}</span>
            <span class="pill info">${escapeHtml(t.role)}</span>
          </div>
          <div style="margin-top:10px; font-weight:900">${escapeHtml(t.title)}</div>
          <div class="p" style="margin-top:6px">${escapeHtml(t.venue)}</div>
        `;
        talkRoot.appendChild(it);
      }
      const io2 = new IntersectionObserver((entries)=>{
        for (const e of entries){ if (e.isIntersecting) e.target.classList.add("show"); }
      }, {threshold: 0.12});
      talkRoot.querySelectorAll(".reveal").forEach(n=>io2.observe(n));
    }
  }

  function wireSearch(data){
    const q = $("#searchQuery");
    const f = $("#searchFilter");
    const out = $("#searchResults");
    if (!q || !out) return;

    const items = [];
    const add = (type, obj) => items.push({type, ...obj});
    (data.publications||[]).forEach(p=>add("Publication", p));
    (data.projects||[]).forEach(p=>add("Project", {title:p.name, year:p.year, venue:p.tag, note:p.desc, link:p.links?.[0]?.href}));
    (data.conferences||[]).forEach(c=>add("Conference", c));

    const render = (arr)=>{
      out.innerHTML = "";
      if (!arr.length){
        out.innerHTML = `<div class="notice">No results. Try a different keyword or filter.</div>`;
        return;
      }
      for (const r of arr.slice(0, 30)){
        const it = document.createElement("div");
        it.className = "item reveal show";
        it.innerHTML = `
          <div class="meta">
            <span class="pill info">${escapeHtml(r.type)}</span>
            ${r.year ? `<span class="pill">${escapeHtml(r.year)}</span>`:``}
            ${r.venue ? `<span class="pill">${escapeHtml(r.venue)}</span>`:``}
          </div>
          <div style="margin-top:10px; font-weight:900">${escapeHtml(r.title || r.name || "")}</div>
          ${r.note ? `<div class="p" style="margin-top:6px">${escapeHtml(r.note)}</div>` : ``}
          ${r.link ? `<a class="btn" href="${r.link}" target="_blank" rel="noopener">Open</a>` : ``}
        `;
        out.appendChild(it);
      }
    };

    const search = ()=>{
      const term = (q.value||"").toLowerCase().trim();
      const typ = f ? f.value : "All";
      const filtered = items.filter(it=>{
        if (typ !== "All" && it.type !== typ) return false;
        if (!term) return true;
        const blob = JSON.stringify(it).toLowerCase();
        return blob.includes(term);
      });
      render(filtered);
    };

    q.addEventListener("input", search);
    if (f) f.addEventListener("change", search);
    search();
  }

  function escapeHtml(s){
    return String(s ?? "").replace(/[&<>"']/g, m => ({
      "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"
    }[m]));
  }

  // Back to top button
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Global BibTeX & Toast Utilities
  window.showToast = function(msg) {
    let t = document.getElementById("toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "toast";
      t.className = "toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 3000);
  };

  window.copyBibtex = function(title, author, year, venue, type) {
    const bibType = (type||"").toLowerCase().includes('journal') ? 'article' : ((type||"").toLowerCase().includes('conference') ? 'inproceedings' : 'misc');
    // Generate simple citation key: AuthorYearTitle
    const safeAuthor = (author||"").split(/[, ]+/)[0].replace(/[^a-zA-Z]/g, "");
    const safeTitle = (title||"").split(/\s+/)[0].replace(/[^a-zA-Z0-9]/g, "");
    const key = (safeAuthor + year + safeTitle).toLowerCase();
    
    const bib = `@${bibType}{${key},
  title={${title}},
  author={${author}},
  ${bibType === 'article' ? 'journal' : 'booktitle'}={${venue}},
  year={${year}}
}`;
    navigator.clipboard.writeText(bib).then(() => {
      window.showToast("BibTeX citation copied to clipboard!");
    });
  };

  // Lightbox for gallery
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const lightboxClose = document.getElementById("lightboxClose");
    const btnPrev = document.getElementById("lightboxPrev");
    const btnNext = document.getElementById("lightboxNext");
    const galleryItems = document.querySelectorAll(".gallery-item");

    let currentPhotos = [];
    let currentIndex = 0;

    const showImage = (index) => {
      if (!currentPhotos.length) return;
      // Wrap around
      if (index < 0) index = currentPhotos.length - 1;
      if (index >= currentPhotos.length) index = 0;
      
      currentIndex = index;
      const photo = currentPhotos[currentIndex];
      
      lightboxImg.src = photo.src;
      if (lightboxCaption) lightboxCaption.textContent = photo.desc || "";
    };

    galleryItems.forEach(item => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Try to get photos from data attribute
        const dataPhotos = item.getAttribute("data-photos");
        if (dataPhotos) {
          try {
            currentPhotos = JSON.parse(dataPhotos);
          } catch (err) {
            console.error("Invalid JSON in data-photos", err);
            currentPhotos = [];
          }
        } else {
          // Fallback to single image
          const img = item.querySelector("img");
          currentPhotos = img ? [{src: img.src, desc: item.querySelector(".caption-title")?.textContent}] : [];
        }

        if (currentPhotos.length > 0) {
          showImage(0);
          lightbox.classList.add("show");
        }
      });
    });

    const closeLightbox = () => lightbox.classList.remove("show");

    lightboxClose.addEventListener("click", closeLightbox);
    if (btnPrev) btnPrev.addEventListener("click", () => showImage(currentIndex - 1));
    if (btnNext) btnNext.addEventListener("click", () => showImage(currentIndex + 1));
    
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { 
      if (!lightbox.classList.contains("show")) return;
      if (e.key === "Escape") closeLightbox(); 
      if (e.key === "ArrowLeft") showImage(currentIndex - 1);
      if (e.key === "ArrowRight") showImage(currentIndex + 1);
    });
  }
})();
