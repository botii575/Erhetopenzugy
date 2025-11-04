
/*
  Érthető Pénzügy – Slim print-to-PDF export (emoji-styled SVG ikonokkal)
  - Külső függőség NINCS (nem kell jsPDF)
  - Business fejléc + KPI-k + grafikon képek + amortizációs táblázat
  - Emoji helyett beágyazott, kicsi SVG ikonok: pénz, fel/le grafikon, dokumentum, pipa
  Használat: window.generatePDF(amortizationRows)
*/
(function(){
  const BRAND = {
    name:"Érthető Pénzügy",
    title:"Tőketartozás kalkuláció",
    url:"https://www.erthetopenzugy.hu",
    email:"kapcsolat@erthetopenzugy.hu",
    phone:"+36 20 296 7292",
    blue:"#1c2c4c",
    red:"#cc0000",
    ink:"#263238"
  };

  // Kis, inline SVG ikonok (emoji-szerű)
  const ICON = {
    money: `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="3" fill="#e8f2ff" stroke="#1c2c4c"/>
      <circle cx="12" cy="12" r="4.2" fill="#1c2c4c"/><text x="12" y="13.8" text-anchor="middle" font-size="7" fill="#fff">Ft</text>
    </svg>`,
    up: `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M3 17l6-6 4 4 6-9" fill="none" stroke="#1c2c4c" stroke-width="2"/>
      <path d="M16 6h4v4" fill="none" stroke="#1c2c4c" stroke-width="2"/>
    </svg>`,
    down:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M3 7l6 6 4-4 6 9" fill="none" stroke="#cc0000" stroke-width="2"/>
      <path d="M16 18h4v-4" fill="none" stroke="#cc0000" stroke-width="2"/>
    </svg>`,
    doc:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M6 3h8l4 4v14H6z" fill="#e8f2ff" stroke="#1c2c4c"/><path d="M14 3v5h5" fill="#e8f2ff" stroke="#1c2c4c"/>
      <path d="M8 12h8M8 15h8M8 18h6" stroke="#1c2c4c"/>
    </svg>`,
    check:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#e8f7ee" stroke="#16a34a"/><path d="M7 12l3 3 7-7" fill="none" stroke="#16a34a" stroke-width="2"/>
    </svg>`
  };

  function safeText(id){ const el=document.getElementById(id); return el?(el.textContent||"").trim():"–"; }
  function getInputs(){ const q=id=>document.getElementById(id);
    return { startDate:q("startDate")?.value||"—", amount:q("amount")?.value||"—",
             rate:q("rate")?.value||"—", term:q("term")?.value||"—" };
  }

  function buildTableHTML(rows){
    const head=["Hónap","Dátum","Törlesztő (Ft)","Kamat (Ft)","Tőke (Ft)","Hátralévő tőke (Ft)"];
    const thead="<thead><tr>"+head.map(h=>`<th>${h}</th>`).join("")+"</tr></thead>";
    const tbody="<tbody>"+rows.map(r=>"<tr>"+r.map(c=>`<td>${c}</td>`).join("")+"</tr>").join("")+"</tbody>";
    return `<table class="amo">${thead}${tbody}</table>`;
  }

  function openPrintWindow(html){
    const w=window.open("","_blank"); w.document.open(); w.document.write(html); w.document.close();
    const onReady=()=>setTimeout(()=>w.print(),120);
    if(document.fonts && document.fonts.ready){ document.fonts.ready.then(onReady).catch(onReady); } else onReady();
  }

  window.generatePDF = function(amortizationRows){
    const p=getInputs();
    const kpis=[
      {label:`${ICON.money} Havi törlesztő`, val:safeText("kpiPayment")},
      {label:`${ICON.down} Teljes kamat`, val:safeText("kpiTotalInterest")},
      {label:`${ICON.doc} Jelenlegi tőketartozás`, val:safeText("kpiOutstanding")},
      {label:`${ICON.up} Teljes visszafizetés`, val:safeText("kpiTotalPaid")},
      {label:`${ICON.check} Fordulópont`, val:safeText("kpiSwitch")},
    ];

    const loanCanvas=document.getElementById("loanChart");
    const yearCanvas=document.getElementById("year1Chart");
    const loanImg=loanCanvas?loanCanvas.toDataURL("image/png",0.92):"";
    const yearImg=yearCanvas?yearCanvas.toDataURL("image/png",0.92):"";

    const styles=`
    <style>
      @page{ size:A4 portrait; margin:14mm 12mm 16mm 12mm; }
      body{ font-family: -apple-system, Segoe UI, Roboto, Arial, sans-serif; color:${BRAND.ink}; font-size:11pt; }
      header{ display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:12px;
              margin-bottom: 20mm; border-bottom:1px solid #e5e7eb; padding-bottom: 8mm; }
      header h1{ font-size:20pt; margin:0; color:${BRAND.ink};}
      header img.logo{ height:120px; }
      header .meta{ font-size:10pt; color:#60717c; text-align:right;}
      .params{ font-size:10pt; color:#60717c; margin-bottom:6mm; }
      .kpi-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:6mm; margin-bottom:6mm;}
      .kpi{ border:1px solid #dbeafe; background:#f0f7ff; border-radius:6px; padding:5mm; }
      .kpi .label{ font-size:9pt; color:#60717c; margin-bottom:2mm; display:flex; align-items:center; gap:6px; }
      .kpi .label svg{ flex:0 0 auto; }
      .kpi .val{ font-weight:700; color:${BRAND.blue}; font-size:12pt; }
      .charts{ display:grid; grid-template-columns:1fr 1fr; gap:6mm; margin-bottom:6mm;}
      .charts img{ width:100%; height:auto; border:1px solid #eef2f7; border-radius:4px; padding:2mm; }
      .info{ font-size:9pt; color:#60717c; margin:2mm 0 6mm 0; }
      table.amo{ width:100%; border-collapse:collapse; page-break-inside:auto; }
      .amo th,.amo td{ border:1px solid #e5e7eb; padding:3mm 2mm; font-size:9.5pt; }
      .amo thead th{ background:${BRAND.blue}; color:#fff; }
      .amo tbody tr:nth-child(even) td{ background:#faf7f2; }
      .amo{ margin-bottom:12mm; }
      footer{ position:static; margin:12mm; margin-top:10mm; color:#6b7280; font-size:9pt; display:flex; justify-content:space-between; border-top:1px solid #e5e7eb; padding-top:4mm; break-inside:avoid; page-break-inside:avoid; }
      .small{ font-size:9pt; color:#6b7280; }
      @media print{ .no-print{ display:none!important; } }
    </style>`;

    const tableHTML = buildTableHTML(amortizationRows);
    const hu = new Intl.DateTimeFormat('hu-HU',{year:'numeric',month:'long',day:'2-digit'}).format(new Date());

    const html = `<!doctype html><html lang="hu"><head><meta charset="utf-8">
      <title>PDF – ${BRAND.title}</title>${styles}</head><body>
      <header>
        <img class="logo" src="data:image/webp;base64,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" alt="Logo">
        <div>
          <h1>${BRAND.title}</h1>
          <div class="small">${BRAND.name}</div>
        </div>
        <div class="meta">${hu}</div>
      </header>

      <div class="params">
        Kezdődátum: ${p.startDate} &nbsp;&nbsp;&nbsp;
        Hitelösszeg: ${p.amount} Ft &nbsp;&nbsp;&nbsp;
        Kamat (éves): ${p.rate} % &nbsp;&nbsp;&nbsp;
        Futamidő: ${p.term} év
      </div>

      <section class="kpi-grid">
        ${kpis.map(k=>`
          <div class="kpi">
            <div class="label">${k.label}</div>
            <div class="val">${k.val}</div>
          </div>
        `).join("")}
      </section>

      <section class="charts">
        ${loanImg?`<img src="${loanImg}" alt="Fő grafikon">`:""}
        ${yearImg?`<img src="${yearImg}" alt="1. év kördiagram">`:""}
      </section>

      <div class="info">
        Fontos: A kalkuláció eredménye tájékoztató jellegű, nem minősül hitelajánlatnak vagy hivatalos igazolásnak.
      </div>

      ${tableHTML}

      <footer>
        <div>${BRAND.url} • ${BRAND.email} • ${BRAND.phone}</div>
        <div class="page-num"></div>
      </footer>
      </body></html>`;

    openPrintWindow(html);
  };
})();
