import{R as Ae}from"./vendor-router-DT3YKpTB.js";import{j as ie}from"./vendor-motion-BtZkORRR.js";import{S as ar}from"./SEO-t_S40Fcw.js";import"./index-Dgk292dr.js";const e={jsx:ie.jsx,jsxs:ie.jsxs,Fragment:ie.Fragment},t=Ae,ne=Ae,ir=ar,Te=async(M,I={},E=1500)=>{const w=new AbortController,P=setTimeout(()=>w.abort(),E);try{const y=await fetch(M,{...I,signal:w.signal});return clearTimeout(P),y}catch(y){throw clearTimeout(P),y}},fr=()=>{const[M,I]=t.useState(""),[E,w]=t.useState(""),[P,y]=t.useState("idle"),[nr,or]=t.useState(!1),[sr,lr]=t.useState(!1),[Re,Me]=t.useState(!1),[f,B]=t.useState(""),[N,O]=t.useState(""),[D,W]=t.useState(""),[F,Y]=t.useState(""),[oe,Pe]=t.useState("Yes - Ready within 30 days"),[se,U]=t.useState(""),[p,T]=t.useState("idle"),[Be,_]=t.useState(""),[dr,cr]=t.useState(""),[Oe,le]=t.useState(!1),[n,De]=t.useState(null),[d,de]=t.useState("mpesa"),[j,ce]=t.useState(""),[me,pe]=t.useState(""),[ge,he]=t.useState(""),[fe,xe]=t.useState(""),[ue,be]=t.useState(""),[c,x]=t.useState("idle"),[ye,g]=t.useState(""),[$,H]=t.useState(""),[je,V]=t.useState(0),[A,ke]=t.useState("tanzania"),[G,X]=t.useState(""),q=r=>{De(r),ce(M||localStorage.getItem("loi_signed_email")||""),de("mpesa"),pe(""),he(""),xe(""),be(""),x("idle"),g(""),H(""),V(0),ke("tanzania"),X(""),le(!0)},K=(r,a)=>{const o={tanzania:{symbol:"TZS",rate:2600},kenya:{symbol:"KES",rate:130},uganda:{symbol:"UGX",rate:3800},rwanda:{symbol:"RWF",rate:1250},other:{symbol:"USD",rate:1}},l=o[a]||o.other;return(r*l.rate).toLocaleString()+" "+l.symbol},h={mpesa:{name:"Vodacom M-Pesa",code:"*150*00#",color:"#E11D48",logo:e.jsxs("svg",{width:"60",height:"24",viewBox:"0 0 60 24",fill:"none",style:{borderRadius:"4px"},children:[e.jsx("rect",{width:"60",height:"24",rx:"4",fill:"#E11D48"}),e.jsx("text",{x:"30",y:"16",fill:"white",fontSize:"10",fontWeight:"900",fontFamily:"sans-serif",textAnchor:"middle",children:"M-PESA"})]}),instructions:[e.jsxs("span",{children:["Dial ",e.jsx("strong",{style:{color:"#38bdf8"},children:"*150*00#"})," on your Vodacom line."]}),e.jsxs("span",{children:["Select ",e.jsx("strong",{children:"4"})," (Lipa kwa M-Pesa)."]}),e.jsxs("span",{children:["Select ",e.jsx("strong",{children:"4"})," (Weka namba ya kampuni)."]}),e.jsxs("span",{children:["Enter Company Number: ",e.jsx("strong",{children:"543210"})," (SanelX)."]}),e.jsxs("span",{children:["Enter Reference: ",e.jsx("strong",{style:{fontFamily:"monospace"},children:"SANELX"}),"."]}),e.jsx("span",{children:"Enter amount to complete payment."}),e.jsx("span",{children:"Enter PIN to confirm."})]},tigopesa:{name:"Tigo Pesa",code:"*150*01#",color:"#0F3B8C",logo:e.jsxs("svg",{width:"60",height:"24",viewBox:"0 0 60 24",fill:"none",style:{borderRadius:"4px"},children:[e.jsx("rect",{width:"60",height:"24",rx:"4",fill:"#0F3B8C"}),e.jsx("text",{x:"30",y:"15",fill:"#FBBF24",fontSize:"9",fontWeight:"900",fontFamily:"sans-serif",textAnchor:"middle",children:"TIGO PESA"})]}),instructions:[e.jsxs("span",{children:["Dial ",e.jsx("strong",{style:{color:"#38bdf8"},children:"*150*01#"})," on your Tigo line."]}),e.jsxs("span",{children:["Select ",e.jsx("strong",{children:"4"})," (Lipa kwa Tigo Pesa)."]}),e.jsxs("span",{children:["Select ",e.jsx("strong",{children:"3"})," (Weka namba ya kampuni)."]}),e.jsxs("span",{children:["Enter Company Number: ",e.jsx("strong",{children:"543210"})," (SanelX)."]}),e.jsxs("span",{children:["Enter Reference: ",e.jsx("strong",{style:{fontFamily:"monospace"},children:"SANELX"}),"."]}),e.jsx("span",{children:"Enter amount to complete payment."}),e.jsx("span",{children:"Enter PIN to confirm."})]},airtel:{name:"Airtel Money",code:"*150*60#",color:"#FF0000",logo:e.jsxs("svg",{width:"60",height:"24",viewBox:"0 0 60 24",fill:"none",style:{borderRadius:"4px"},children:[e.jsx("rect",{width:"60",height:"24",rx:"4",fill:"#FF0000"}),e.jsx("text",{x:"30",y:"15",fill:"white",fontSize:"9",fontWeight:"900",fontFamily:"sans-serif",textAnchor:"middle",children:"airtel"})]}),instructions:[e.jsxs("span",{children:["Dial ",e.jsx("strong",{style:{color:"#38bdf8"},children:"*150*60#"})," on your Airtel line."]}),e.jsxs("span",{children:["Select ",e.jsx("strong",{children:"5"})," (Lipa kwa Airtel Money)."]}),e.jsxs("span",{children:["Select ",e.jsx("strong",{children:"4"})," (Enter Business Number)."]}),e.jsxs("span",{children:["Enter Business Number: ",e.jsx("strong",{children:"543210"})," (SanelX)."]}),e.jsxs("span",{children:["Enter Reference: ",e.jsx("strong",{style:{fontFamily:"monospace"},children:"SANELX"}),"."]}),e.jsx("span",{children:"Enter amount to complete payment."}),e.jsx("span",{children:"Enter PIN to confirm."})]},halopesa:{name:"Halo Pesa",code:"*150*88#",color:"#FF6600",logo:e.jsxs("svg",{width:"60",height:"24",viewBox:"0 0 60 24",fill:"none",style:{borderRadius:"4px"},children:[e.jsx("rect",{width:"60",height:"24",rx:"4",fill:"#FF6600"}),e.jsx("text",{x:"30",y:"15",fill:"white",fontSize:"9",fontWeight:"900",fontFamily:"sans-serif",textAnchor:"middle",children:"halopesa"})]}),instructions:[e.jsxs("span",{children:["Dial ",e.jsx("strong",{style:{color:"#38bdf8"},children:"*150*88#"})," on your Halotel line."]}),e.jsxs("span",{children:["Select ",e.jsx("strong",{children:"4"})," (Lipa bidhaa/huduma)."]}),e.jsxs("span",{children:["Select ",e.jsx("strong",{children:"3"})," (Weka namba ya kampuni)."]}),e.jsxs("span",{children:["Enter Company Number: ",e.jsx("strong",{children:"543210"})," (SanelX)."]}),e.jsxs("span",{children:["Enter Reference: ",e.jsx("strong",{style:{fontFamily:"monospace"},children:"SANELX"}),"."]}),e.jsx("span",{children:"Enter amount to complete payment."}),e.jsx("span",{children:"Enter PIN to confirm."})]},mtn:{name:"MTN MoMo",code:"*165#",color:"#FBBF24",logo:e.jsxs("svg",{width:"60",height:"24",viewBox:"0 0 60 24",fill:"none",style:{borderRadius:"4px"},children:[e.jsx("rect",{width:"60",height:"24",rx:"4",fill:"#FFCC00"}),e.jsx("circle",{cx:"30",cy:"12",r:"7",fill:"#0E2E5C"}),e.jsx("text",{x:"30",y:"15",fill:"#FFCC00",fontSize:"7",fontWeight:"950",fontFamily:"sans-serif",textAnchor:"middle",children:"MTN"})]}),instructions:[e.jsxs("span",{children:["Dial ",e.jsx("strong",{style:{color:"#38bdf8"},children:"*165#"})," on your MTN line."]}),e.jsxs("span",{children:["Select ",e.jsx("strong",{children:"3"})," (Lipa kwa MoMo / Pay Bill)."]}),e.jsxs("span",{children:["Enter Paybill Number: ",e.jsx("strong",{children:"543210"})," (SanelX)."]}),e.jsxs("span",{children:["Enter Reference: ",e.jsx("strong",{style:{fontFamily:"monospace"},children:"SANELX"}),"."]}),e.jsx("span",{children:"Enter amount to complete payment."}),e.jsx("span",{children:"Enter PIN to confirm."})]},card:{name:"Credit/Debit Card",logo:e.jsxs("svg",{width:"60",height:"24",viewBox:"0 0 60 24",fill:"none",style:{borderRadius:"4px"},children:[e.jsx("rect",{width:"60",height:"24",rx:"4",fill:"#1E293B"}),e.jsx("circle",{cx:"22",cy:"12",r:"5",fill:"#EB001B"}),e.jsx("circle",{cx:"30",cy:"12",r:"5",fill:"#F79E1B",fillOpacity:"0.8"}),e.jsx("text",{x:"45",y:"15",fill:"white",fontSize:"6",fontWeight:"800",children:"CARD"})]}),instructions:[]}},We=r=>{if(r.preventDefault(),g(""),!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(j)){g("Please enter a valid work email address.");return}if(d!=="card"){const a=me.replace(/\D/g,"");if(a.length<9||a.length>13){g("Please enter a valid mobile money phone number (9-13 digits).");return}}else{if(ge.replace(/\D/g,"").length<16){g("Please enter a valid 16-digit Card Number.");return}if(!fe||!ue){g("Please fill out expiry date and CVC code.");return}}x("loading"),setTimeout(()=>{d==="card"?(x("success"),localStorage.setItem("loi_signed_"+j.toLowerCase().trim(),"true"),localStorage.setItem("loi_signed_email",j.toLowerCase().trim())):x("ussd")},1200)},Fe=r=>{if(r.preventDefault(),!G||G.trim().length<4){alert("Please enter a valid Transaction Reference ID.");return}if(!$||$.length<4){alert("Please enter your 4-digit PIN.");return}V(1),setTimeout(()=>{V(2),setTimeout(()=>{x("success"),localStorage.setItem("loi_signed_"+j.toLowerCase().trim(),"true"),localStorage.setItem("loi_signed_email",j.toLowerCase().trim())},800)},1200)},[S,Z]=t.useState(!1),[i,J]=t.useState(0),[Ye,ve]=t.useState(12.4),[Ue,Q]=t.useState(38),[_e,z]=t.useState("Standby"),[$e,C]=t.useState(["[SYSTEM] Initialized telemetry studio."]),[we,ee]=t.useState(null),[k,L]=t.useState(0),Ne=[{title:"Irradiance Sizing",subtitle:"Step 1: Instantly maps coordinates to historical sun path data to scale the ",highlight:"Solar Array kW size."},{title:"Peak Shaving",subtitle:"Step 2: Simulates sub-hourly battery charge cycles to shave utility tariffs and scale ",highlight:"Storage Capacity."},{title:"Weather Safeguards",subtitle:"Step 3: Integrates real-time storm warnings to lock battery reserve thresholds before the ",highlight:"Grid fails."},{title:"Bankable Proposal",subtitle:"Step 4: Compiles localized rate matrices and payback charts into an ",highlight:"Investment-Grade PDF."}];ne.useEffect(()=>{const r=localStorage.getItem("loi_signed_email");r&&(I(r),Te(`https://synex-api.onrender.com/api/loi/status/${encodeURIComponent(r.toLowerCase().trim())}`,{},1500).then(a=>{if(a.ok)return a.json()}).then(a=>{a&&a.signed?localStorage.setItem("loi_signed_"+r.toLowerCase().trim(),"true"):a&&!a.signed&&(localStorage.removeItem("loi_signed_"+r.toLowerCase().trim()),localStorage.removeItem("loi_signed_email"),localStorage.removeItem("loi_signed_company"),I(""))}).catch(a=>console.warn("Error checking LOI status (possibly timed out):",a)))},[]),ne.useEffect(()=>{let r=null;return S?r=setInterval(()=>{J(a=>a>=100?(Z(!1),100):a+.6)},100):clearInterval(r),()=>clearInterval(r)},[S]),ne.useEffect(()=>{if(i===0){ve(12.4),Q(38),z("Standby"),C(["[SYSTEM] Initialized telemetry studio."]),ee(null),L(0);return}i>0&&i<=25?(L(0),z("Analyzing irradiance files..."),ve(r=>r<48.5?Math.round((r+.9)*10)/10:48.5),Math.round(i*10)%30===0&&C(r=>[...r.slice(-3),"[SOLAR] Read index: 5.4 kWh/m²/day"])):i>25&&i<=50?(L(1),z("Optimizing utility discharge bounds..."),Q(r=>r<82?Math.round((r+1.2)*10)/10:82),Math.round(i*10)%30===0&&C(r=>[...r.slice(-3),"[BATTERY] Peak shaving strategy locked (6h)"])):i>50&&i<=75?(L(2),z("Weather telemetry check..."),ee("Storm mode: High winds forecasted. Charging reserve to 90%."),Q(r=>r<90?Math.round((r+.4)*10)/10:90),Math.round(i*10)%35===0&&C(r=>[...r.slice(-3),"[ALARM] Heavy wind advisory detected"])):i>75&&i<100&&(L(3),z("Compiling localized tariff models..."),ee(null),Math.round(i*10)%40===0&&C(r=>[...r.slice(-3),"[REPORT] PDF proposal generated inside /tariffs"]))},[i]);const[R,He]=t.useState(1500),[v,Ve]=t.useState("moderate"),[s,re]=t.useState("hybrid"),[m,Se]=t.useState("monthly"),ze=.93,u={starter:{monthly:29},professional:{monthly:59},business:{monthly:149}},b=r=>{if(!u[r])return 0;const a=u[r].monthly;return m==="annual"?Math.round(a*ze):a},te=r=>u[r]?Math.round(u[r].monthly*12*ze):0,Ge={high:5.8,moderate:4.2,low:3.2},Xe={peak_shaving:2,hybrid:6,backup:12},Ce=R/.15/30,qe=Ge[v],Ke=Ce*.6/qe,Le=Math.round(Ke*1.2*10)/10,Ze=Xe[s],Ie=Math.round(Ce*.4*(Ze/8)*10)/10,Je={peak_shaving:.35,hybrid:.72,backup:.92},ae=Math.round(R*12*Je[s]),Qe=Le*1250+Ie*600,Ee=ae>0?Math.round(Qe/ae*10)/10:0,er=Ee<3.2?3.2:Ee,rr=()=>{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f))return"Please enter a valid work email address.";const r=f.split("@")[1].toLowerCase().trim();if(!r.includes(".")||r.length<4)return"Invalid email domain structure.";if(["gmail.com","yahoo.com","hotmail.com","outlook.com","aol.com","icloud.com","mail.com","protonmail.com","zoho.com","yandex.com","live.com","gmx.com"].includes(r))return"Please use a corporate work email address (generic domains like Gmail/Yahoo are not authorized for staging access).";const a=D.replace(/^(https?:\/\/)?(www\.)?/,"").split("/")[0].split("?")[0].toLowerCase().trim();if(!a||!a.includes(".")||a.length<4)return"Please enter a valid company website domain (e.g. acme.com).";if(!(r.includes(a)||a.includes(r)))return`Domain mismatch: Your work email domain (@${r}) does not align with your company website (${a}).`;const o=F.toLowerCase().trim();return o.includes("linkedin.com/in/")||o.includes("linkedin.com/company/")?null:"Please enter a valid LinkedIn URL containing 'linkedin.com/in/username' or 'linkedin.com/company/name'."},tr=async r=>{r.preventDefault(),U("");const a=rr();if(a){U(a);return}T("loading"),_("Authenticating matching company domains...");const o=f.toLowerCase().trim();try{const l=await Te(`https://synex-api.onrender.com/api/loi/status/${encodeURIComponent(o)}`,{},1500);if(l.ok&&(await l.json()).signed){localStorage.setItem("loi_signed_"+o,"true"),localStorage.setItem("loi_signed_email",o),localStorage.setItem("loi_signed_company",N),T("success"),y("success"),w(o),window.open("https://synex.sanelx.com","_blank"),B(""),O(""),W(""),Y("");return}}catch(l){console.warn("LOI status check timed out or failed. Continuing verification:",l)}fetch("https://synex-api.onrender.com/api/waitlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:f,companyName:N,assetType:D,readyToDeploy:`LinkedIn: ${F} | Ready: ${oe}`})}).catch(l=>{console.error("Background lead sync failed:",l)}),setTimeout(()=>{_("Validating LinkedIn structure format..."),setTimeout(()=>{_("Authorizing temporary staging keys..."),setTimeout(()=>{T("success"),y("success"),w(f),window.open(`/loi?email=${encodeURIComponent(f)}&company=${encodeURIComponent(N)}`,"_blank"),B(""),O(""),W(""),Y("")},600)},600)},600)};return e.jsxs("div",{className:"synex-landing-wrapper",children:[e.jsx(ir,{title:"Synex | Localized Energy Simulation & Infrastructure Sizing",description:"Generate bankable, localized solar & battery proposals in 5 minutes instead of 4 hours. Standardizing the future of energy design.",canonical:"https://sanelx.com/synex"}),e.jsx("style",{children:`
        .synex-landing-wrapper {
          background-color: #fafbfc;
          color: #0f172a;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0;
          margin: 0;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          position: relative;
        }

        /* ── DYNAMIC FOCAL GLOWS & BACKGROUND GRID ── */
        .synex-landing-wrapper::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100vw;
          height: 100vh;
          background: 
            radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.04) 0%, rgba(16, 185, 129, 0) 50%),
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.02) 0%, rgba(59, 130, 246, 0) 40%);
          z-index: 1;
          pointer-events: none;
        }

        .synex-landing-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(15, 23, 42, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.015) 1px, transparent 1px);
          background-size: 80px 80px;
          background-position: center top;
          z-index: 2;
          pointer-events: none;
          mask-image: radial-gradient(circle at 50% 25%, black 40%, transparent 90%);
          -webkit-mask-image: radial-gradient(circle at 50% 25%, black 40%, transparent 90%);
        }

        /* ── HEADER ── */
        .synex-header {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2.5rem 5vw;
        }
        .synex-logo-text {
          font-family: 'Outfit', sans-serif;
          font-size: 1.7rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #0f172a;
          cursor: default;
          user-select: none;
        }
        .synex-logo-dot {
          color: #10b981;
          text-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
        }

        /* ── HERO SECTION ── */
        .synex-hero {
          position: relative;
          z-index: 10;
          max-width: 940px;
          margin: 0 auto;
          padding: 5rem 1.5rem 4rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.5rem 1.2rem;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #047857;
          margin-bottom: 2rem;
          backdrop-filter: blur(5px);
          animation: fadeIn 0.8s ease-out;
        }

        .synex-hero h1 {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.2rem, 5.5vw, 4.2rem);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          color: #0f172a;
          background: linear-gradient(to bottom, #0f172a 40%, #1e293b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .highlight-emerald {
          background: linear-gradient(135deg, #059669 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          display: inline-block;
        }

        .synex-hero .scarcity-sub {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #475569;
          line-height: 1.6;
          max-width: 720px;
          margin-bottom: 3rem;
          font-weight: 450;
        }

        /* ── PREMIUM WAITLIST FORM ── */
        .waitlist-form-wrapper {
          width: 100%;
          max-width: 520px;
          margin-bottom: 1.5rem;
          position: relative;
        }
        .waitlist-form-wrapper::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 9px;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.05) 0%, rgba(16, 185, 129, 0.1) 100%);
          z-index: -1;
          pointer-events: none;
        }
        .synex-waitlist-form {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
          width: 100%;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(15, 23, 42, 0.08);
          padding: 0.45rem;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .synex-waitlist-form:focus-within {
          border-color: rgba(16, 185, 129, 0.4);
          box-shadow: 0 20px 40px rgba(16, 185, 129, 0.02), 0 0 20px rgba(16, 185, 129, 0.08);
        }
        .synex-waitlist-form input {
          flex: 1;
          background: transparent;
          border: none;
          color: #0f172a;
          padding: 0.9rem 1.1rem;
          font-size: 1.05rem;
          outline: none;
          min-width: 0;
          font-family: inherit;
          font-weight: 500;
        }
        .synex-waitlist-form input::placeholder {
          color: rgba(15, 23, 42, 0.4);
        }
        .synex-waitlist-form button {
          background: #0f172a;
          color: #ffffff;
          border: none;
          padding: 0.9rem 2.2rem;
          border-radius: 5px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
          font-family: inherit;
        }
        .synex-waitlist-form button:hover:not(:disabled) {
          background: #10b981;
          color: #ffffff;
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
        }
        .synex-waitlist-form button:disabled {
          background: rgba(15, 23, 42, 0.05);
          color: rgba(15, 23, 42, 0.3);
          cursor: not-allowed;
        }

        .vip-badge-text {
          font-size: 0.85rem;
          color: #475569;
          font-weight: 500;
          letter-spacing: 0.02em;
          margin-top: 0.85rem;
        }
        .vip-highlight {
          color: #059669;
          font-weight: 600;
        }
        .form-secondary-actions {
          margin-top: 1.25rem;
          width: 100%;
        }
        .btn-tesla-secondary-glow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          background: rgba(16, 185, 129, 0.08);
          color: #059669;
          border: 2px solid #10b981;
          padding: 1.1rem 1.8rem;
          border-radius: 8px;
          font-weight: 800;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.08);
          box-sizing: border-box;
          letter-spacing: 0.03em;
          cursor: pointer;
        }
        .btn-tesla-secondary-glow:hover {
          border-color: #2563eb;
          color: #ffffff;
          background: linear-gradient(135deg, #10b981 0%, #2563eb 100%);
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.25), 0 4px 15px rgba(37, 99, 235, 0.15);
          transform: translateY(-2px);
        }
        .btn-tesla-secondary-glow:active {
          transform: translateY(0);
        }

        /* ── THE TRUST BAR (Verified by...) ── */
        .trust-bar {
          margin-top: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          width: 100%;
          border-top: 1px solid rgba(15, 23, 42, 0.06);
          padding-top: 2.5rem;
        }
        .trust-bar-title {
          font-size: 0.78rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 700;
        }
        .trust-logos {
          display: flex;
          gap: 3.5rem;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }
        .logo-item {
          color: rgba(15, 23, 42, 0.35);
          transition: color 0.3s ease, transform 0.3s ease;
          user-select: none;
          cursor: default;
        }
        .logo-item:hover {
          color: rgba(15, 23, 42, 0.8);
          transform: scale(1.02) translateY(-1px);
        }

        /* ── SUCCESS STATE CARD ── */
        .success-card {
          background: #ffffff;
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 12px;
          padding: 3rem 2.2rem;
          width: 100%;
          max-width: 520px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(20px);
          animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .success-checkmark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #10b981;
          font-size: 2rem;
          border-radius: 50%;
          margin-bottom: 1.5rem;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.1);
        }
        .success-card h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 0.6rem;
          color: #0f172a;
        }
        .queue-position-badge {
          display: inline-block;
          background: rgba(16, 185, 129, 0.06);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: #047857;
          padding: 0.6rem 1.6rem;
          border-radius: 30px;
          font-weight: 700;
          font-size: 1.1rem;
          margin: 0.75rem 0 1.75rem;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .referral-engine {
          background: rgba(15, 23, 42, 0.015);
          border: 1px solid rgba(15, 23, 42, 0.04);
          border-radius: 8px;
          padding: 1.5rem 1.75rem;
          margin-top: 1.5rem;
          text-align: left;
        }
        .referral-engine h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }
        .referral-engine p {
          font-size: 0.88rem;
          color: #475569;
          margin-bottom: 1.2rem;
          line-height: 1.5;
        }
        .referral-copier {
          display: flex;
          gap: 0.5rem;
        }
        .referral-link-input {
          flex: 1;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.1);
          color: #334155;
          padding: 0.75rem 1rem;
          border-radius: 4px;
          font-size: 0.85rem;
          outline: none;
          font-family: monospace;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .referral-btn-copy {
          background: #0f172a;
          color: #ffffff;
          border: none;
          padding: 0.75rem 1.25rem;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .referral-btn-copy:hover {
          background: #10b981;
          color: #ffffff;
        }

        /* ── FEATURES SECTION (CREDIBILITY BUILDING) ── */
        .synex-features {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 3rem auto 6rem;
          padding: 0 1.5rem;
          width: 100%;
        }
        .synex-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .synex-feature-card {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.04);
          padding: 2.5rem;
          border-radius: 8px;
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.02);
        }
        .synex-feature-card:hover {
          border-color: rgba(16, 185, 129, 0.2);
          background: rgba(16, 185, 129, 0.01);
          transform: translateY(-2px);
        }
        .synex-feature-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.8rem;
          font-family: 'Outfit', sans-serif;
        }
        .synex-feature-card p {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
        }

        /* ── PRICING SECTION ── */
        .synex-pricing-section {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto 6rem auto;
          padding: 0 1.5rem;
          width: 100%;
          box-sizing: border-box;
        }
        .pricing-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .pricing-header h2 {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 4.5vw, 2.75rem);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.85rem;
        }
        .pricing-header p {
          color: #475569;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 2.5rem auto;
          line-height: 1.6;
        }
        .billing-toggle {
          display: inline-flex;
          align-items: center;
          gap: 0;
          background: rgba(15, 23, 42, 0.03);
          border: 1px solid rgba(15, 23, 42, 0.07);
          border-radius: 100px;
          padding: 0.3rem;
        }
        .billing-toggle-btn {
          position: relative;
          background: transparent;
          border: none;
          color: #64748b;
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 700;
          padding: 0.55rem 1.4rem;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.22s ease;
          white-space: nowrap;
        }
        .billing-toggle-btn.active {
          background: #0f172a;
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.12);
        }
        .billing-toggle-btn.active.annual {
          background: #059669;
          box-shadow: 0 2px 8px rgba(5, 150, 105, 0.2);
        }
        .save-badge {
          display: inline-block;
          background: rgba(16, 185, 129, 0.12);
          color: #047857;
          font-size: 0.72rem;
          font-weight: 850;
          letter-spacing: 0.05em;
          padding: 0.15rem 0.55rem;
          border-radius: 20px;
          margin-left: 0.4rem;
          vertical-align: middle;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        .billing-toggle-btn.active .save-badge {
          background: rgba(255,255,255,0.2);
          color: #ffffff;
          border-color: rgba(255,255,255,0.3);
        }
        .price-strike {
          font-size: 1.1rem;
          color: #94a3b8;
          text-decoration: line-through;
          margin-right: 0.35rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          align-items: stretch;
        }
        .price-amount.contact-label {
          font-size: 1.85rem;
          letter-spacing: -0.03em;
          line-height: 1.15;
        }
        a.pricing-card-cta {
          display: block;
          text-align: center;
          text-decoration: none;
          box-sizing: border-box;
        }
        .pricing-card {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.06);
          border-radius: 16px;
          padding: 3rem 2.25rem 2.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.02);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .pricing-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.05);
          border-color: rgba(15, 23, 42, 0.1);
        }
        .pricing-card.highlighted {
          border: 2px solid #10b981;
          box-shadow: 0 20px 50px rgba(16, 185, 129, 0.08);
          background: linear-gradient(to bottom, #ffffff 0%, rgba(16, 185, 129, 0.005) 100%);
        }
        .pricing-card.highlighted:hover {
          box-shadow: 0 25px 60px rgba(16, 185, 129, 0.12);
        }
        .recommended-ribbon {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #10b981;
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 850;
          letter-spacing: 0.1em;
          padding: 0.3rem 1.2rem;
          border-radius: 20px;
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.25);
        }
        .pricing-card-header {
          margin-bottom: 2.25rem;
        }
        .tier-badge {
          font-size: 0.75rem;
          font-weight: 800;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          display: inline-block;
          margin-bottom: 1.25rem;
        }
        .pricing-card.highlighted .tier-badge {
          color: #047857;
        }
        .tier-price {
          display: flex;
          align-items: baseline;
          color: #0f172a;
          margin-bottom: 0.25rem;
        }
        .price-symbol {
          font-size: 1.85rem;
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
          align-self: flex-start;
          margin-top: 0.2rem;
        }
        .price-amount {
          font-size: 3.5rem;
          font-weight: 850;
          font-family: 'Outfit', sans-serif;
          line-height: 1;
        }
        .price-period {
          font-size: 1.1rem;
          font-weight: 600;
          color: #64748b;
          margin-left: 0.15rem;
        }
        .price-billing {
          font-size: 0.8rem;
          font-weight: 700;
          color: #059669;
          margin-bottom: 1.25rem;
        }
        .tier-desc {
          font-size: 0.92rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }
        .pricing-card-features {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          margin-bottom: 3rem;
          flex-grow: 1;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.4;
        }
        .check-icon {
          width: 18px;
          height: 18px;
          color: #10b981;
          flex-shrink: 0;
          margin-top: 0.05rem;
        }
        .check-icon.text-emerald {
          color: #059669;
        }
        .pricing-card-cta {
          width: 100%;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 750;
          font-family: inherit;
          cursor: pointer;
          border: 1px solid rgba(15, 23, 42, 0.08);
          background: #ffffff;
          color: #0f172a;
          transition: all 0.2s ease;
        }
        .pricing-card-cta:hover {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
        }
        .pricing-card-cta.highlighted {
          background: #10b981;
          color: #ffffff;
          border-color: #10b981;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
        }
        .pricing-card-cta.highlighted:hover {
          background: #059669;
          border-color: #059669;
          box-shadow: 0 6px 18px rgba(5, 150, 105, 0.25);
        }

        /* ── MAJOR LAUNCH TEASER ── */
        .launch-teaser-section {
          position: relative;
          z-index: 10;
          margin: 0 0 0 0;
          padding: 7rem 1.5rem;
          background: #0a0f1e;
          text-align: center;
          overflow: hidden;
        }
        .launch-teaser-section::before {
          content: '';
          position: absolute;
          top: -40%;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(ellipse, rgba(16, 185, 129, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .launch-teaser-section::after {
          content: '';
          position: absolute;
          bottom: -20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(ellipse, rgba(99, 102, 241, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .launch-teaser-inner {
          position: relative;
          z-index: 2;
          max-width: 740px;
          margin: 0 auto;
        }
        .launch-teaser-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: #10b981;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.45rem 1.1rem;
          border-radius: 100px;
          margin-bottom: 2.2rem;
        }
        .launch-teaser-dot {
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        .launch-teaser-section h2 {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
        }
        .launch-teaser-section h2 .teaser-highlight {
          background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .launch-teaser-section p {
          color: rgba(255,255,255,0.55);
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 580px;
          margin: 0 auto 3rem auto;
        }
        .launch-teaser-section p strong {
          color: rgba(255,255,255,0.85);
          font-weight: 600;
        }
        .btn-launch-waitlist {
          display: inline-block;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #ffffff;
          border: none;
          padding: 1.2rem 3.2rem;
          border-radius: 6px;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 24px rgba(16, 185, 129, 0.25);
          text-transform: uppercase;
        }
        .btn-launch-waitlist:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px rgba(16, 185, 129, 0.4);
        }
        .btn-launch-waitlist:active {
          transform: scale(0.98);
        }
        .launch-teaser-note {
          margin-top: 1.4rem;
          color: rgba(255,255,255,0.3);
          font-size: 0.82rem;
          letter-spacing: 0.02em;
        }

        /* ── SINGLE ACTION BOTTOM CTA ── */
        .synex-bottom-cta {
          position: relative;
          z-index: 10;
          padding: 7rem 1.5rem;
          background: rgba(15, 23, 42, 0.01);
          text-align: center;
          border-top: 1px solid rgba(15, 23, 42, 0.05);
          border-bottom: 1px solid rgba(15, 23, 42, 0.05);
        }
        .synex-bottom-cta h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.4rem;
          margin-bottom: 1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0f172a;
        }
        .synex-bottom-cta p {
          color: #475569;
          max-width: 600px;
          margin: 0 auto 2.5rem auto;
          font-size: 1.15rem;
          line-height: 1.6;
        }
        .btn-scroll-top {
          display: inline-block;
          background: #0f172a;
          color: #ffffff;
          text-decoration: none;
          padding: 1.2rem 3.2rem;
          border-radius: 5px;
          font-weight: bold;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
        }
        .btn-scroll-top:hover {
          background: #10b981;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(16, 185, 129, 0.3);
        }
        .btn-scroll-top:active {
          transform: scale(0.98);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── FOOTER ── */
        .synex-footer {
          position: relative;
          z-index: 10;
          border-top: 1px solid rgba(15, 23, 42, 0.05);
          padding: 2.5rem 5vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: #64748b;
          background: #ffffff;
        }
        .synex-footer-center {
          font-weight: 600;
          color: #475569;
        }
        .synex-footer-right {
          display: flex;
          gap: 1.5rem;
        }
        .synex-footer-link {
          color: #64748b;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .synex-footer-link:hover {
          color: #0f172a;
        }

        /* ── INTERACTIVE CALCULATOR SECTION ── */
        .synex-calculator-section {
          position: relative;
          z-index: 10;
          max-width: 1000px;
          margin: 6rem auto 3rem;
          padding: 0 1.5rem;
          width: 100%;
          box-sizing: border-box;
        }
        .calculator-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .calculator-header h2 {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 0.85rem;
          color: #0f172a;
          background: linear-gradient(to bottom, #0f172a 40%, #1e293b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .calculator-header p {
          color: #475569;
          font-size: 1.15rem;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .calculator-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.06);
          border-radius: 16px;
          padding: 3rem;
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.04);
        }
        
        .calculator-inputs {
          display: flex;
          flex-direction: column;
          gap: 2.2rem;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .input-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .input-label {
          font-size: 0.85rem;
          font-weight: 750;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .input-value {
          font-family: 'Outfit', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: #047857;
          background: rgba(16, 185, 129, 0.05);
          border: 1px solid rgba(16, 185, 129, 0.15);
          padding: 0.3rem 0.8rem;
          border-radius: 6px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.03);
        }
        
        .custom-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: rgba(15, 23, 42, 0.08);
          outline: none;
          cursor: pointer;
        }
        .custom-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
          transition: transform 0.1s, background-color 0.2s;
        }
        .custom-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          background: #059669;
        }
        .custom-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
        }
        
        .custom-select {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.12);
          color: #0f172a;
          padding: 0.95rem 1.25rem;
          border-radius: 8px;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 600;
          outline: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .custom-select:focus {
          border-color: rgba(16, 185, 129, 0.4);
          background: rgba(15, 23, 42, 0.02);
        }
        
        .segmented-control {
          display: flex;
          background: rgba(15, 23, 42, 0.02);
          border: 1px solid rgba(15, 23, 42, 0.05);
          padding: 0.35rem;
          border-radius: 8px;
          gap: 0.35rem;
        }
        .segment-btn {
          flex: 1;
          background: transparent;
          border: none;
          color: #475569;
          padding: 0.8rem 1rem;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .segment-btn.active {
          background: #ffffff;
          color: #047857;
          border: 1px solid rgba(16, 185, 129, 0.25);
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.05);
        }
        .segment-btn:hover:not(.active) {
          color: #0f172a;
          background: rgba(15, 23, 42, 0.02);
        }

        .calculator-outputs {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 2rem;
        }
        .results-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .stat-card {
          background: rgba(15, 23, 42, 0.01);
          border: 1px solid rgba(15, 23, 42, 0.03);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .stat-card-title {
          font-size: 0.72rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 750;
        }
        .stat-card-value {
          font-family: 'Outfit', sans-serif;
          font-size: 1.85rem;
          font-weight: 800;
          color: #0f172a;
        }
        .stat-card-value.highlight {
          background: linear-gradient(135deg, #059669 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .vis-container {
          background: rgba(15, 23, 42, 0.015);
          border: 1px solid rgba(15, 23, 42, 0.04);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .vis-svg {
          width: 100%;
          max-width: 320px;
          height: auto;
          display: block;
        }
        
        .node-circle {
          fill: #ffffff;
          stroke: rgba(15, 23, 42, 0.08);
          stroke-width: 2px;
          transition: all 0.3s ease;
        }
        .node-circle.active-solar {
          stroke: #d97706;
          fill: rgba(245, 158, 11, 0.05);
        }
        .node-circle.active-battery {
          stroke: #059669;
          fill: rgba(16, 185, 129, 0.05);
        }
        .node-circle.active-facility {
          stroke: #0f172a;
          fill: rgba(15, 23, 42, 0.02);
        }
        .node-circle.active-grid {
          stroke: #2563eb;
          fill: rgba(59, 130, 246, 0.05);
        }
        
        .vis-text {
          fill: #475569;
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.06em;
          font-family: 'Outfit', sans-serif;
          text-anchor: middle;
        }
        
        .flow-line {
          stroke-width: 2px;
          stroke-linecap: round;
          stroke-dasharray: 6 5;
          fill: none;
          transition: stroke 0.3s ease;
        }
        
        @keyframes flow-left-to-right {
          to { stroke-dashoffset: -22; }
        }
        @keyframes flow-top-to-bottom {
          to { stroke-dashoffset: -22; }
        }
        @keyframes flow-diag {
          to { stroke-dashoffset: -31.1; }
        }
        
        .flow-solar-battery {
          stroke: #d97706;
          animation: flow-left-to-right 1.6s linear infinite;
        }
        .flow-solar-facility {
          stroke: #d97706;
          animation: flow-diag 1.8s linear infinite;
        }
        .flow-battery-facility {
          stroke: #059669;
          animation: flow-top-to-bottom 1.4s linear infinite;
        }
        .flow-grid-facility {
          stroke: #2563eb;
          animation: flow-left-to-right 2.2s linear infinite;
        }
        
        .calculator-honeypot-banner {
          grid-column: span 2;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.03) 0%, rgba(37, 99, 235, 0.03) 100%);
          border: 1px dashed rgba(16, 185, 129, 0.35);
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          margin-top: 1rem;
        }
        .honeypot-content {
          max-width: 65%;
        }
        .honeypot-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.35rem;
          font-family: 'Outfit', sans-serif;
        }
        .honeypot-desc {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.5;
        }
        .btn-honeypot-cta {
          background: #0f172a;
          color: #ffffff;
          border: none;
          padding: 0.95rem 2rem;
          border-radius: 5px;
          font-weight: 800;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
          font-family: inherit;
        }
        .btn-honeypot-cta:hover {
          background: #10b981;
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        /* ── RESPONSIVE MEDIA QUERIES ── */
        @media (max-width: 900px) {
          .calculator-grid {
            grid-template-columns: 1fr;
            padding: 2rem 1.5rem;
            gap: 2.5rem;
          }
          .calculator-honeypot-banner {
            grid-column: span 1;
            flex-direction: column;
            text-align: center;
            padding: 1.75rem 1.25rem;
            gap: 1.5rem;
          }
          .honeypot-content {
            max-width: 100%;
          }
          .btn-honeypot-cta {
            width: 100%;
          }
          .synex-features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .synex-footer {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
            padding: 3rem 2rem;
          }
          .synex-footer-right {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem 1.5rem;
          }
          .synex-waitlist-form {
            flex-direction: column;
            background: transparent;
            border: none;
            padding: 0;
            box-shadow: none;
          }
          .synex-waitlist-form input {
            background: rgba(15, 23, 42, 0.02);
            border: 1px solid rgba(15, 23, 42, 0.08);
            border-radius: 5px;
            margin-bottom: 0.5rem;
            width: 100%;
          }
          .synex-waitlist-form button {
            width: 100%;
            padding: 1.1rem;
          }
          .referral-copier {
            flex-direction: column;
          }
        }

        /* ── PROGRAMMATIC EXPLAINER VIDEO PLAYER ── */
        .explainer-video-section {
          max-width: 940px;
          margin: 0 auto 5rem auto;
          padding: 0 1.5rem;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 10;
        }
        .video-player-wrapper {
          width: 100%;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 12px;
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.05);
          overflow: hidden;
          position: relative;
        }
        .mac-titlebar {
          background: #f1f5f9;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          padding: 0.85rem 1.25rem;
          display: flex;
          align-items: center;
          position: relative;
        }
        .mac-dots {
          display: flex;
          gap: 6px;
        }
        .mac-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .mac-dot.red { background: #ef4444; }
        .mac-dot.yellow { background: #f59e0b; }
        .mac-dot.green { background: #10b981; }
        .mac-title {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.8rem;
          font-weight: 700;
          color: #64748b;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }
        
        .mockup-app-layout {
          display: grid;
          grid-template-columns: 200px 1fr;
          height: 380px;
          background: #ffffff;
        }
        .mockup-sidebar {
          background: #fafbfc;
          border-right: 1px solid rgba(15, 23, 42, 0.06);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .sidebar-brand {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.15rem;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }
        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .sidebar-item {
          font-size: 0.85rem;
          font-weight: 700;
          color: #64748b;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          transition: all 0.2s;
          cursor: default;
        }
        .sidebar-item.active {
          color: #059669;
          background: rgba(16, 185, 129, 0.05);
        }
        
        .mockup-main-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #ffffff;
          position: relative;
        }
        .telemetry-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .telemetry-card {
          background: #fafbfc;
          border: 1px solid rgba(15, 23, 42, 0.04);
          border-radius: 8px;
          padding: 1.25rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.01);
          transition: transform 0.3s ease;
        }
        .telemetry-card-title {
          font-size: 0.7rem;
          font-weight: 850;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.5rem;
        }
        .telemetry-card-value {
          font-family: 'Outfit', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: #0f172a;
        }
        
        .animated-terminal {
          background: #0f172a;
          color: #38bdf8;
          border-radius: 6px;
          padding: 0.95rem;
          font-family: monospace;
          font-size: 0.8rem;
          height: 90px;
          overflow-y: hidden;
          line-height: 1.4;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .terminal-line {
          animation: terminalFadeIn-sub 0.3s ease-out both;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @keyframes terminalFadeIn-sub {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .mockup-alert-banner {
          background: rgba(245, 158, 11, 0.06);
          border: 1px solid rgba(245, 158, 11, 0.2);
          color: #b45309;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          animation: bannerSlideIn-sub 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes bannerSlideIn-sub {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .video-overlay-glass {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.3);
          backdrop-filter: blur(8px);
          z-index: 100;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          transition: opacity 0.4s ease;
          cursor: pointer;
        }
        .video-play-btn {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .video-play-btn:hover {
          transform: scale(1.1);
          background: #10b981;
          color: #ffffff;
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
        }
        .video-play-label {
          color: #ffffff;
          font-weight: 800;
          font-size: 1.05rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-shadow: 0 2px 10px rgba(0,0,0,0.4);
        }
        
        .video-playback-controls {
          background: #f8fafc;
          border-top: 1px solid rgba(15, 23, 42, 0.06);
          padding: 0.75rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .play-pause-control {
          background: transparent;
          border: none;
          color: #0f172a;
          cursor: pointer;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          transition: background-color 0.2s;
        }
        .play-pause-control:hover {
          background: rgba(15, 23, 42, 0.05);
        }
        
        .video-progress-container {
          flex: 1;
          height: 6px;
          background: rgba(15, 23, 42, 0.08);
          border-radius: 3px;
          position: relative;
          cursor: pointer;
        }
        .video-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #10b981 0%, #3b82f6 100%);
          border-radius: 3px;
          position: absolute;
          top: 0;
          left: 0;
          transition: width 0.1s linear;
        }
        .video-time-label {
          font-size: 0.78rem;
          color: #64748b;
          font-family: monospace;
          font-weight: 700;
        }
        
        .narrator-subtitle-bar {
          background: #0f172a;
          color: #ffffff;
          text-align: center;
          padding: 1.25rem 2rem;
          font-size: 1.05rem;
          font-weight: 650;
          line-height: 1.4;
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .narrator-highlight {
          color: #10b981;
          font-weight: 800;
        }

        @media (max-width: 768px) {
          .mockup-app-layout {
            grid-template-columns: 1fr;
            height: auto;
          }
          .mockup-sidebar {
            display: none;
          }
          .telemetry-grid {
            grid-template-columns: 1fr;
          }
          .mockup-main-content {
            gap: 1.5rem;
          }
        }

        /* ── VERIFICATION MODAL STYLING ── */
        .verification-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: modalFadeIn 0.3s ease;
        }
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .verification-modal-card {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 16px;
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.15);
          width: 90%;
          max-width: 600px;
          padding: 3rem;
          position: relative;
          box-sizing: border-box;
          animation: cardSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes cardSlideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: transparent;
          border: none;
          color: #64748b;
          font-size: 1.25rem;
          cursor: pointer;
          transition: color 0.2s;
        }
        .modal-close-btn:hover {
          color: #0f172a;
        }
        .modal-badge {
          display: inline-flex;
          background: rgba(37, 99, 235, 0.08);
          border: 1px solid rgba(37, 99, 235, 0.25);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #2563eb;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1.25rem;
        }
        .verification-modal-card h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 850;
          color: #0f172a;
          margin: 0 0 0.5rem;
        }
        .modal-subtitle {
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0 0 2rem;
        }
        .modal-error-banner {
          background: rgba(239, 68, 68, 0.06);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #dc2626;
          padding: 0.85rem 1.1rem;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }
        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .modal-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .modal-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .modal-label {
          font-size: 0.8rem;
          font-weight: 750;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .modal-input {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.12);
          color: #0f172a;
          padding: 0.8rem 1rem;
          border-radius: 6px;
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.2s ease;
        }
        .modal-input:focus {
          border-color: #2563eb;
          background: rgba(37, 99, 235, 0.01);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.08);
        }
        .modal-select {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.12);
          color: #0f172a;
          padding: 0.8rem 1rem;
          border-radius: 6px;
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          cursor: pointer;
        }
        .modal-select:focus {
          border-color: #2563eb;
        }
        .modal-warning-box {
          background: rgba(245, 158, 11, 0.04);
          border: 1px solid rgba(245, 158, 11, 0.2);
          padding: 1rem 1.25rem;
          border-radius: 6px;
          font-size: 0.85rem;
          line-height: 1.5;
          color: #b45309;
        }
        .modal-warning-box strong {
          color: #92400e;
        }
        .modal-submit-btn {
          background: #0f172a;
          color: #ffffff;
          border: none;
          padding: 1rem 1.8rem;
          border-radius: 6px;
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.25s ease;
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }
        .modal-submit-btn:hover:not(:disabled) {
          background: #2563eb;
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.35);
        }
        .modal-submit-btn:disabled {
          background: #64748b;
          cursor: not-allowed;
        }
        .spinner-loader {
          width: 18px;
          height: 18px;
          border: 2.5px solid rgba(255, 255, 255, 0.25);
          border-top-color: #ffffff;
          border-radius: 50%;
          display: inline-block;
          animation: spin-loader-rotate 0.8s linear infinite;
        }
        @keyframes spin-loader-rotate {
          to { transform: rotate(360deg); }
        }
        .modal-success-state {
          text-align: center;
          padding: 2rem 0;
        }
        .modal-success-checkmark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #10b981;
          font-size: 2rem;
          border-radius: 50%;
          margin-bottom: 1.5rem;
        }
        .modal-success-state h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.85rem;
          font-weight: 850;
          color: #0f172a;
          margin-bottom: 0.75rem;
        }
        .modal-success-state p {
          color: #475569;
          font-size: 1rem;
          line-height: 1.6;
          max-width: 440px;
          margin: 0 auto;
        }

        @media (max-width: 600px) {
          .verification-modal-card {
            padding: 2rem 1.5rem;
          }
          .modal-form-row {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          
          /* --- SIZING CALCULATOR MOBILE OPTIMIZATIONS --- */
          .synex-calculator-section {
            margin-bottom: 3.5rem;
            padding: 0 1rem;
          }
          .calculator-header h2 {
            font-size: 1.65rem;
            line-height: 1.25;
            margin-bottom: 0.65rem;
          }
          .calculator-header p {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          .calculator-grid {
            padding: 1.5rem 1rem;
            gap: 1.75rem;
            border-radius: 12px;
          }
          .input-label {
            font-size: 0.8rem;
          }
          .input-value {
            font-size: 1.05rem;
            padding: 0.25rem 0.6rem;
          }
          .segmented-control {
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.5rem;
            background: rgba(15, 23, 42, 0.03);
          }
          .segment-btn {
            padding: 0.8rem 1rem;
            font-size: 0.85rem;
            width: 100%;
            text-align: center;
          }
          .custom-select {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
            width: 100%;
            max-width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .results-stats-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
          .stat-card {
            padding: 1.15rem;
            gap: 0.25rem;
          }
          .stat-card-title {
            font-size: 0.68rem;
          }
          .stat-card-value {
            font-size: 1.55rem;
          }
          .vis-container {
            padding: 1rem 0.5rem;
            width: 100%;
            box-sizing: border-box;
          }
          .vis-svg {
            width: 100%;
            max-width: 100%;
            height: auto;
          }

          /* --- VIDEO EXPLAINER MOBILE OPTIMIZATIONS --- */
          .explainer-video-section {
            margin-bottom: 3.5rem;
            padding: 0 1rem;
          }
          .mac-title {
            display: none !important;
          }
          .mac-titlebar {
            padding: 0.75rem 1rem;
          }
          .mockup-main-content {
            padding: 1rem;
            gap: 1.25rem;
          }
          .telemetry-card {
            padding: 1rem;
          }
          .telemetry-card-value {
            font-size: 1.35rem;
          }
          .animated-terminal {
            height: 75px;
            padding: 0.75rem;
          }
          .mockup-alert-banner {
            padding: 0.6rem 0.8rem;
            font-size: 0.75rem;
          }
          .narrator-subtitle-bar {
            padding: 1rem 1.25rem;
            font-size: 0.9rem;
            min-height: 48px;
          }
          .video-playback-controls {
            padding: 0.6rem 1rem;
            gap: 0.85rem;
          }
          .video-play-btn {
            width: 60px;
            height: 60px;
          }
          .video-play-label {
            font-size: 0.85rem;
            letter-spacing: 0.05em;
          }
        }
        @media (max-width: 900px) {
          .calculator-grid {
            grid-template-columns: 1fr;
            padding: 2rem 1.5rem;
            gap: 2.5rem;
          }
          .calculator-honeypot-banner {
            grid-column: span 1;
            flex-direction: column;
            text-align: center;
            padding: 1.75rem 1.25rem;
            gap: 1.5rem;
          }
          .honeypot-content {
            max-width: 100%;
          }
          .btn-honeypot-cta {
            width: 100%;
          }
          .synex-features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .synex-footer {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
            padding: 3rem 2rem;
          }
          .synex-footer-right {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem 1.5rem;
          }
          .synex-waitlist-form {
            flex-direction: column;
            background: transparent;
            border: none;
            padding: 0;
            box-shadow: none;
          }
          .synex-waitlist-form input {
            background: rgba(15, 23, 42, 0.02);
            border: 1px solid rgba(15, 23, 42, 0.08);
            border-radius: 5px;
            margin-bottom: 0.5rem;
            width: 100%;
          }
          .synex-waitlist-form button {
            width: 100%;
            padding: 1.1rem;
          }
          .referral-copier {
            flex-direction: column;
          }
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        @media (min-width: 641px) and (max-width: 1100px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .pricing-card {
            padding: 2.5rem 2rem;
          }
        }

        /* ── ENTERPRISE ROADMAP SECTION ── */
        .synex-roadmap-section {
          max-width: 940px;
          margin: 0 auto 5rem auto;
          padding: 0 1.5rem;
          width: 100%;
          box-sizing: border-box;
          z-index: 10;
          position: relative;
        }
        .roadmap-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 3rem auto;
        }
        .roadmap-header h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0f172a;
          margin-bottom: 0.85rem;
        }
        .roadmap-header .highlight-cobalt {
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .roadmap-header p {
          color: #475569;
          font-size: 1.05rem;
          line-height: 1.6;
        }
        
        .roadmap-phases {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          position: relative;
        }
        .roadmap-phases::before {
          content: "";
          position: absolute;
          top: 2rem;
          bottom: 2rem;
          left: 2rem;
          width: 2px;
          background: linear-gradient(to bottom, #10b981 0%, #3b82f6 50%, rgba(15, 23, 42, 0.08) 100%);
          pointer-events: none;
        }
        
        .roadmap-phase-card {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.06);
          border-radius: 14px;
          padding: 2.5rem;
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 1.5rem;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.02);
          position: relative;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .roadmap-phase-card:hover {
          border-color: rgba(59, 130, 246, 0.2);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.04);
          transform: translateY(-2px);
        }
        
        .phase-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 12px;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.35rem;
          z-index: 2;
        }
        .phase-badge.phase-1 {
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #047857;
        }
        .phase-badge.phase-2 {
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.25);
          color: #1d4ed8;
        }
        .phase-badge.phase-3 {
          background: rgba(100, 116, 139, 0.08);
          border: 1px solid rgba(100, 116, 139, 0.25);
          color: #475569;
        }
        
        .phase-content h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
        }
        
        .phase-features {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .phase-feature-item {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .phase-feature-title {
          font-weight: 750;
          font-size: 0.95rem;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .phase-feature-title::before {
          content: "✦";
          color: #10b981;
        }
        .phase-badge.phase-2 + .phase-content .phase-feature-title::before {
          color: #3b82f6;
        }
        .phase-badge.phase-3 + .phase-content .phase-feature-title::before {
          color: #64748b;
        }
        .phase-feature-desc {
          color: #475569;
          font-size: 0.9rem;
          line-height: 1.55;
        }
        
        .roadmap-footer {
          margin-top: 3.5rem;
          padding: 2.5rem;
          background: rgba(15, 23, 42, 0.01);
          border: 1px solid rgba(15, 23, 42, 0.04);
          border-radius: 14px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }
        .roadmap-footer-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.15rem;
          color: #0f172a;
        }
        .roadmap-footer-desc {
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.5;
          max-width: 580px;
        }
        .btn-roadmap-cta {
          background: #0f172a;
          color: #ffffff;
          border: none;
          padding: 1.1rem 2.8rem;
          border-radius: 6px;
          font-weight: 800;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 15px rgba(15, 23, 42, 0.08);
          font-family: inherit;
        }
        .btn-roadmap-cta:hover {
          background: #10b981;
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
          transform: translateY(-1px);
        }
        
        @media (max-width: 600px) {
          .synex-roadmap-section {
            margin-bottom: 3.5rem;
            padding: 0 1rem;
          }
          .roadmap-header h2 {
            font-size: 1.65rem;
            line-height: 1.25;
            margin-bottom: 0.65rem;
          }
          .roadmap-header p {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          .roadmap-phases::before {
            display: none;
          }
          .roadmap-phase-card {
            grid-template-columns: 1fr;
            padding: 1.75rem 1.25rem;
            gap: 1.25rem;
          }
          .phase-badge {
            width: 48px;
            height: 48px;
            font-size: 1.15rem;
            border-radius: 8px;
          }
          .phase-content h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }
          .phase-features {
            gap: 1.25rem;
          }
          .phase-feature-title {
            font-size: 0.9rem;
          }
          .phase-feature-desc {
            font-size: 0.85rem;
          }
          .roadmap-footer {
            padding: 1.5rem 1.15rem;
          }
          .roadmap-footer-title {
            font-size: 1.05rem;
          }
          .roadmap-footer-desc {
            font-size: 0.85rem;
          }
          .btn-roadmap-cta {
            width: 100%;
            padding: 1.1rem;
          }
        }
        @media (max-width: 600px) {
          .synex-pricing-section {
            padding: 0 1rem;
            margin-bottom: 4rem;
          }
          .pricing-header h2 {
            font-size: 1.65rem;
          }
          .pricing-header p {
            font-size: 0.9rem;
          }
          .pricing-card {
            padding: 2rem 1.5rem 1.75rem;
          }
          .price-amount {
            font-size: 2.75rem;
          }
          .pricing-card-cta {
            padding: 0.9rem 1.25rem;
          }
        }

        /* ── CHECKOUT MODAL STYLING ── */
        .checkout-modal-card {
          max-width: 780px !important;
          background: #0f172a !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5) !important;
        }
        .checkout-modal-card h3, 
        .checkout-modal-card .modal-subtitle,
        .checkout-modal-card .modal-label {
          color: #ffffff !important;
        }
        .checkout-modal-card .modal-subtitle {
          color: #94a3b8 !important;
        }
        .checkout-modal-card .modal-close-btn {
          color: #94a3b8 !important;
        }
        .checkout-modal-card .modal-close-btn:hover {
          color: #ffffff !important;
        }
        
        .checkout-plan-summary {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 1.25rem 1.5rem;
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .checkout-plan-name {
          font-weight: 800;
          font-size: 1.15rem;
          font-family: 'Outfit', sans-serif;
          color: #10b981;
        }
        .checkout-plan-price {
          font-weight: 800;
          font-size: 1.3rem;
          font-family: 'Outfit', sans-serif;
          text-align: right;
        }
        .checkout-plan-tzs {
          display: block;
          font-size: 0.8rem;
          color: #94a3b8;
          font-weight: 500;
          margin-top: 0.2rem;
        }

        .payment-methods-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .payment-method-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.75rem 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
          user-select: none;
        }
        .payment-method-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-1px);
        }
        .payment-method-card.active {
          background: rgba(16, 185, 129, 0.08);
          border-color: #10b981;
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.2);
        }
        .payment-method-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: #e2e8f0;
          text-align: center;
        }
        .payment-method-card.active .payment-method-title {
          color: #10b981;
        }
        
        .checkout-input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .checkout-input-group label {
          font-size: 0.8rem;
          font-weight: 750;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .checkout-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          padding: 0.8rem 1rem;
          border-radius: 6px;
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.2s ease;
        }
        .checkout-input:focus {
          border-color: #10b981;
          background: rgba(255, 255, 255, 0.07);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
        }

        .checkout-submit-btn {
          background: #10b981;
          color: #ffffff;
          border: none;
          padding: 1rem 1.8rem;
          border-radius: 6px;
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.25s ease;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.25);
        }
        .checkout-submit-btn:hover:not(:disabled) {
          background: #059669;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
          transform: translateY(-1px);
        }
        .checkout-submit-btn:active {
          transform: translateY(0);
        }
        .checkout-submit-btn:disabled {
          background: #334155;
          color: #94a3b8;
          cursor: not-allowed;
          box-shadow: none;
        }

        /* ── USSD SCREEN SPLIT LAYOUT ── */
        .ussd-split-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
          margin-top: 1.5rem;
        }
        .ussd-instructions {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ussd-instructions h4 {
          font-size: 1.1rem;
          font-weight: 800;
          margin: 0 0 1rem;
          color: #ffffff;
        }
        .ussd-step-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
        }
        .ussd-step-item {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 0.75rem;
          color: #cbd5e1;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }
        .ussd-step-number {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }
        .ussd-step-item strong {
          color: #10b981;
        }
        
        .dial-code-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.6rem 1rem;
          border-radius: 6px;
          margin-bottom: 1.5rem;
        }
        .dial-code-string {
          font-family: monospace;
          font-size: 1.1rem;
          font-weight: 700;
          color: #38bdf8;
          letter-spacing: 0.05em;
        }
        .btn-copy-dial {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: none;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-copy-dial:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        /* ── PHONE SIMULATOR ── */
        .phone-simulator-frame {
          background: #1e293b;
          border: 6px solid #475569;
          border-radius: 24px;
          padding: 0.75rem;
          height: 310px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          position: relative;
        }
        .phone-simulator-frame::before {
          content: "";
          position: absolute;
          top: 0.35rem;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 10px;
          background: #475569;
          border-radius: 10px;
        }
        .phone-simulator-screen {
          background: #000000;
          border-radius: 14px;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          overflow: hidden;
          font-family: monospace;
        }
        .ussd-box {
          background: #1e293b;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          width: 100%;
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          animation: cardSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ussd-header {
          font-size: 0.75rem;
          font-weight: 700;
          color: #94a3b8;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding-bottom: 0.4rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .ussd-content {
          font-size: 0.82rem;
          color: #e2e8f0;
          line-height: 1.4;
          white-space: pre-line;
        }
        .ussd-input {
          background: #0f172a;
          border: 1px solid rgba(255,255,255,0.15);
          color: #ffffff;
          padding: 0.4rem 0.6rem;
          border-radius: 4px;
          outline: none;
          font-family: inherit;
          font-size: 0.85rem;
          text-align: center;
          letter-spacing: 0.1em;
          width: calc(100% - 1.25rem);
        }
        .ussd-input.ref-id {
          letter-spacing: normal;
          font-size: 0.78rem;
          text-transform: uppercase;
        }
        .ussd-input:focus {
          border-color: #38bdf8;
        }
        .ussd-btn-group {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }
        .ussd-action-btn {
          flex: 1;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: #ffffff;
          padding: 0.4rem;
          border-radius: 4px;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
        }
        .ussd-action-btn:hover {
          background: rgba(255,255,255,0.15);
        }
        .ussd-action-btn.primary {
          background: #10b981;
          border-color: #10b981;
        }
        .ussd-action-btn.primary:hover {
          background: #059669;
        }

        @media (max-width: 768px) {
          .payment-methods-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .ussd-split-layout {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .phone-simulator-frame {
            height: 280px;
          }
        }
      `}),e.jsx("header",{className:"synex-header",children:e.jsxs("div",{className:"synex-logo-text",children:["Synex",e.jsx("span",{className:"synex-logo-dot",children:"."})]})}),e.jsxs("section",{className:"synex-hero",id:"waitlist-form-container",children:[e.jsx("div",{className:"hero-badge",children:"✦ Synex Trading Platform"}),e.jsxs("h1",{children:["Maximize yields with the interactive ",e.jsx("br",{}),e.jsx("span",{className:"highlight-emerald",children:"Synex Trading Engine"}),"."]}),e.jsx("p",{className:"scarcity-sub",children:"Execute sub-hourly arbitrage, optimize energy storage dispatch, and manage physical trading nodes in real-time."}),e.jsx("div",{className:"waitlist-form-wrapper",style:{display:"flex",justifyContent:"center"},children:e.jsx("a",{href:"https://synex.sanelx.com",target:"_blank",rel:"noopener noreferrer",className:"btn-tesla btn-tesla-solid",style:{textDecoration:"none",padding:"1rem 3rem",fontSize:"1.1rem",textAlign:"center",width:"100%",maxWidth:"350px"},children:"LAUNCH TRADING ENGINE →"})}),e.jsxs("div",{className:"trust-bar",style:{marginTop:"3rem"},children:[e.jsx("div",{className:"trust-bar-title",children:"Seen and verified by engineering teams at"}),e.jsxs("div",{className:"trust-logos",children:[e.jsx("div",{className:"logo-item",title:"JH Solutions",children:e.jsxs("svg",{width:"140",height:"32",viewBox:"0 0 140 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block",height:"32px",width:"auto"},children:[e.jsx("path",{d:"M6 12L14 7L22 12V22L14 27L6 22V12Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),e.jsx("path",{d:"M14 7V27",stroke:"currentColor",strokeWidth:"1.5",strokeDasharray:"2 2"}),e.jsx("path",{d:"M6 12L22 22",stroke:"currentColor",strokeWidth:"1.5",strokeDasharray:"2 2"}),e.jsx("path",{d:"M22 12L6 22",stroke:"currentColor",strokeWidth:"1.5",strokeDasharray:"2 2"}),e.jsx("text",{x:"32",y:"21",fill:"currentColor",fontSize:"13",fontWeight:"800",fontFamily:"Outfit, sans-serif",letterSpacing:"0.05em",children:"JH SOLUTIONS"})]})}),e.jsx("div",{className:"logo-item",title:"Trysolar",children:e.jsxs("svg",{width:"125",height:"32",viewBox:"0 0 125 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block",height:"32px",width:"auto"},children:[e.jsx("circle",{cx:"14",cy:"16",r:"6",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M14 4V6M14 26V28M4 16H6M24 16H26M7 9L8.5 10.5M19.5 21.5L21 23M7 23L8.5 21.5M19.5 10.5L21 9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e.jsxs("text",{x:"34",y:"21",fill:"currentColor",fontSize:"13",fontFamily:"Outfit, sans-serif",letterSpacing:"0.05em",children:[e.jsx("tspan",{fontWeight:"800",children:"TRY"}),e.jsx("tspan",{fontWeight:"400",children:"SOLAR"})]})]})}),e.jsx("div",{className:"logo-item",title:"Sunpower",children:e.jsxs("svg",{width:"125",height:"32",viewBox:"0 0 125 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block",height:"32px",width:"auto"},children:[e.jsx("path",{d:"M6 16C6 11.5817 9.58172 8 14 8C18.4183 8 22 11.5817 22 16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("path",{d:"M9 16C9 13.2386 11.2386 11 14 11C16.7614 11 19 13.2386 19 16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("circle",{cx:"14",cy:"16",r:"2",fill:"currentColor"}),e.jsx("text",{x:"32",y:"21",fill:"currentColor",fontSize:"13",fontWeight:"800",fontFamily:"Outfit, sans-serif",letterSpacing:"0.05em",children:"SUNPOWER"})]})})]})]})]}),e.jsxs("section",{className:"explainer-video-section",children:[e.jsxs("div",{className:"calculator-header",style:{marginBottom:"2.5rem"},children:[e.jsx("h2",{children:"See How Synex Works"}),e.jsx("p",{children:"Watch a live programmatic preview of our telemetry engine analyzing grids, matching hardware DNA, and executing weather safeguards."})]}),e.jsxs("div",{className:"video-player-wrapper",children:[e.jsxs("div",{className:"mac-titlebar",children:[e.jsxs("div",{className:"mac-dots",children:[e.jsx("div",{className:"mac-dot red"}),e.jsx("div",{className:"mac-dot yellow"}),e.jsx("div",{className:"mac-dot green"})]}),e.jsx("div",{className:"mac-title",children:"Synex Telemetry Studio - Walkthrough Preview"})]}),e.jsxs("div",{className:"mockup-app-layout",style:{position:"relative"},children:[!S&&i===0&&e.jsxs("div",{className:"video-overlay-glass",onClick:()=>Z(!0),children:[e.jsx("button",{type:"button",className:"video-play-btn",children:e.jsx("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M8 5v14l11-7z"})})}),e.jsx("span",{className:"video-play-label",children:"Watch Telemetry Walkthrough"})]}),e.jsxs("div",{className:"mockup-sidebar",children:[e.jsx("div",{className:"sidebar-brand",children:"Synex Studio"}),e.jsxs("div",{className:"sidebar-menu",children:[e.jsx("div",{className:`sidebar-item ${k===0?"active":""}`,children:"Solar Telemetry"}),e.jsx("div",{className:`sidebar-item ${k===1?"active":""}`,children:"Battery Dispatch"}),e.jsx("div",{className:`sidebar-item ${k===2?"active":""}`,children:"Storm Alarms"}),e.jsx("div",{className:`sidebar-item ${k===3?"active":""}`,children:"Reports / PDF"})]})]}),e.jsxs("div",{className:"mockup-main-content",children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid rgba(15, 23, 42, 0.05)",paddingBottom:"1rem",width:"100%"},children:[e.jsxs("span",{style:{fontSize:"0.8rem",fontWeight:"800",color:"#64748b"},children:["🟢 Telemetry: ",_e]}),e.jsx("span",{style:{fontSize:"0.75rem",fontWeight:"700",color:"#059669",background:"rgba(16, 185, 129, 0.05)",padding:"0.2rem 0.6rem",borderRadius:"4px"},children:"Tariff Match: Optimized"})]}),e.jsxs("div",{className:"telemetry-grid",style:{margin:"1rem 0",width:"100%"},children:[e.jsxs("div",{className:"telemetry-card",children:[e.jsx("div",{className:"telemetry-card-title",children:"SOLAR ARRAY POWER"}),e.jsxs("div",{className:"telemetry-card-value",children:[Ye," kW"]})]}),e.jsxs("div",{className:"telemetry-card",children:[e.jsx("div",{className:"telemetry-card-title",children:"BATTERY CAPACITY"}),e.jsxs("div",{className:"telemetry-card-value",children:[Ue,"%"]})]})]}),we&&e.jsxs("div",{className:"mockup-alert-banner",style:{margin:"0 0 1rem 0"},children:[e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0},children:[e.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}),e.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),e.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),e.jsx("span",{children:we})]}),e.jsx("div",{className:"animated-terminal",children:$e.map((r,a)=>e.jsx("div",{className:"terminal-line",children:r},a))})]})]}),e.jsx("div",{className:"narrator-subtitle-bar",children:e.jsxs("p",{children:[Ne[k].subtitle,e.jsx("span",{className:"narrator-highlight",children:Ne[k].highlight})]})}),e.jsxs("div",{className:"video-playback-controls",children:[e.jsx("button",{type:"button",className:"play-pause-control",onClick:()=>{i===100&&J(0),Z(!S)},children:S?e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})}):e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M8 5v14l11-7z"})})}),e.jsx("div",{className:"video-progress-container",onClick:r=>{const a=r.currentTarget.getBoundingClientRect(),o=r.clientX-a.left,l=Math.min(Math.max(o/a.width*100,0),100);J(l)},children:e.jsx("div",{className:"video-progress-bar",style:{width:`${i}%`}})}),e.jsxs("div",{className:"video-time-label",children:["00:",Math.floor(i/100*16).toString().padStart(2,"0")," / 00:16"]})]})]})]}),e.jsxs("section",{className:"synex-calculator-section",children:[e.jsxs("div",{className:"calculator-header",children:[e.jsx("h2",{children:"Estimate Your Solar & Storage Sizing"}),e.jsx("p",{children:"Run our micro-simulation algorithm locally to analyze array configurations and storage sizing for commercial facilities."})]}),e.jsxs("div",{className:"calculator-grid",children:[e.jsxs("div",{className:"calculator-inputs",children:[e.jsxs("div",{className:"input-group",children:[e.jsxs("div",{className:"input-label-row",children:[e.jsx("span",{className:"input-label",children:"Avg. Monthly Power Bill"}),e.jsxs("span",{className:"input-value",children:["$",R.toLocaleString()]})]}),e.jsx("input",{type:"range",min:"250",max:"15000",step:"250",value:R,onChange:r=>He(Number(r.target.value)),className:"custom-slider"})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-label",children:"Facility Location (Sun Radiation)"}),e.jsxs("select",{value:v,onChange:r=>Ve(r.target.value),className:"custom-select",children:[e.jsx("option",{value:"high",children:"Middle East / Desert (High Yield, ~5.8 kWh/m²/day)"}),e.jsx("option",{value:"moderate",children:"North America / Central Europe (Moderate, ~4.2 kWh/m²/day)"}),e.jsx("option",{value:"low",children:"Northern Europe / UK (Low Yield, ~3.2 kWh/m²/day)"})]})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-label",children:"Battery Storage Strategy"}),e.jsxs("div",{className:"segmented-control",children:[e.jsx("button",{type:"button",className:`segment-btn ${s==="peak_shaving"?"active":""}`,onClick:()=>re("peak_shaving"),children:"Peak Shaving (2h)"}),e.jsx("button",{type:"button",className:`segment-btn ${s==="hybrid"?"active":""}`,onClick:()=>re("hybrid"),children:"Hybrid Backup (6h)"}),e.jsx("button",{type:"button",className:`segment-btn ${s==="backup"?"active":""}`,onClick:()=>re("backup"),children:"Daily Autonomy (12h)"})]})]})]}),e.jsxs("div",{className:"calculator-outputs",children:[e.jsxs("div",{className:"results-stats-grid",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("span",{className:"stat-card-title",children:"Solar Array Size"}),e.jsxs("span",{className:"stat-card-value",children:[Le," kW"]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("span",{className:"stat-card-title",children:"Storage Capacity"}),e.jsxs("span",{className:"stat-card-value",children:[Ie," kWh"]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("span",{className:"stat-card-title",children:"Est. Annual Savings"}),e.jsxs("span",{className:"stat-card-value highlight",children:["$",ae.toLocaleString()]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("span",{className:"stat-card-title",children:"Payback Period"}),e.jsxs("span",{className:"stat-card-value",children:[er," Years"]})]})]}),e.jsx("div",{className:"vis-container",children:e.jsxs("svg",{className:"vis-svg",viewBox:"0 0 240 240",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M 80 50 H 160",className:"flow-line flow-solar-battery",style:{animationDuration:v==="high"?"1.2s":v==="moderate"?"1.6s":"2.2s"}}),e.jsx("path",{d:"M 71 71 L 169 169",className:"flow-line flow-solar-facility",style:{animationDuration:v==="high"?"1.4s":v==="moderate"?"1.8s":"2.4s"}}),e.jsx("path",{d:"M 190 80 V 160",className:"flow-line flow-battery-facility",style:{animationDuration:s==="backup"?"1s":s==="hybrid"?"1.4s":"2s"}}),e.jsx("path",{d:"M 80 190 H 160",className:"flow-line flow-grid-facility",style:{animationDuration:s==="backup"?"3s":s==="hybrid"?"2.2s":"1.5s",opacity:s==="backup"?.35:.8}}),e.jsxs("g",{children:[e.jsx("circle",{cx:"50",cy:"50",r:"24",className:"node-circle active-solar"}),e.jsx("circle",{cx:"50",cy:"50",r:"10",fill:"#d97706"}),e.jsx("path",{d:"M50 34 v-2 M50 66 v2 M34 50 h-2 M66 50 h2 M39 39 L37 37 M61 61 L63 63 M39 61 L37 63 M61 39 L63 37",stroke:"#d97706",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("text",{x:"50",y:"88",className:"vis-text",children:"SOLAR ARRAY"})]}),e.jsxs("g",{children:[e.jsx("circle",{cx:"190",cy:"50",r:"24",className:"node-circle active-battery"}),e.jsx("rect",{x:"181",y:"41",width:"18",height:"18",rx:"2",fill:"none",stroke:"#059669",strokeWidth:"1.5"}),e.jsx("rect",{x:"187",y:"38",width:"6",height:"3",fill:"#059669"}),e.jsx("rect",{x:"184",y:"53",width:"12",height:"3",fill:"#059669"}),e.jsx("rect",{x:"184",y:"48",width:"12",height:"3",fill:"#059669"}),e.jsx("rect",{x:"184",y:"43",width:"12",height:"3",fill:"#059669",opacity:s==="peak_shaving"?.2:1}),e.jsx("text",{x:"190",y:"88",className:"vis-text",children:"STORAGE"})]}),e.jsxs("g",{children:[e.jsx("circle",{cx:"50",cy:"190",r:"24",className:"node-circle active-grid"}),e.jsx("path",{d:"M50 173 L42 205 M50 173 L58 205 M38 185 H62 M42 195 H58 M46 177 H54",stroke:"#2563eb",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("text",{x:"50",y:"228",className:"vis-text",children:"UTILITY GRID"})]}),e.jsxs("g",{children:[e.jsx("circle",{cx:"190",cy:"190",r:"24",className:"node-circle active-facility"}),e.jsx("path",{d:"M178 202 V184 L190 176 L202 184 V202 Z M184 202 V192 H196 V202",fill:"none",stroke:"#0f172a",strokeWidth:"1.5",strokeLinejoin:"round"}),e.jsx("text",{x:"190",y:"228",className:"vis-text",children:"FACILITY"})]})]})})]}),e.jsxs("div",{className:"calculator-honeypot-banner",children:[e.jsxs("div",{className:"honeypot-content",children:[e.jsx("div",{className:"honeypot-title",children:"Need an investment-grade proposal?"}),e.jsx("p",{className:"honeypot-desc",children:"This local estimate uses regional irradiation averages. Launch the trading engine to analyze physical roof/ground shading geometry via LIDAR, simulate sub-hourly net-metering schedules, and check manufacturer grid compatibility."})]}),e.jsx("a",{href:"https://synex.sanelx.com",target:"_blank",rel:"noopener noreferrer",className:"btn-honeypot-cta",style:{textDecoration:"none",textAlign:"center",display:"inline-block"},children:"Get Precision Sizing Proposal (Free) →"})]})]})]}),e.jsx("section",{className:"synex-features",children:e.jsxs("div",{className:"synex-features-grid",children:[e.jsxs("div",{className:"synex-feature-card",children:[e.jsx("h3",{children:"Check Hardware Match"}),e.jsx("p",{children:"Instantly verify configuration profiles to determine if your specific inverter and battery brands can talk to each other seamlessly."})]}),e.jsxs("div",{className:"synex-feature-card",children:[e.jsx("h3",{children:"Stop Penalty Fees"}),e.jsx("p",{children:"Accurately calculate peak shaving requirements to flatten power spikes and prevent utility demand fines."})]}),e.jsxs("div",{className:"synex-feature-card",children:[e.jsx("h3",{children:"Weather Safety"}),e.jsx("p",{children:"Dynamically safeguard your system by scheduling a 40% or 60% power backup reserve when adverse storms are detected."})]})]})}),e.jsxs("section",{className:"synex-pricing-section",children:[e.jsxs("div",{className:"pricing-header",children:[e.jsx("h2",{children:"Early-Beta Pricing"}),e.jsx("p",{children:"Starter $29, Professional $59, and Business $149. Enterprise is custom — contact sales. Lock in early-beta pricing for the commercial solar engineering stack."}),e.jsxs("div",{className:"billing-toggle",children:[e.jsx("button",{type:"button",className:`billing-toggle-btn${m==="monthly"?" active":""}`,onClick:()=>Se("monthly"),children:"Monthly"}),e.jsxs("button",{type:"button",className:`billing-toggle-btn annual${m==="annual"?" active":""}`,onClick:()=>Se("annual"),children:["Annual ",e.jsx("span",{className:"save-badge",children:"SAVE 7%"})]})]})]}),e.jsxs("div",{className:"pricing-grid",children:[e.jsxs("div",{className:"pricing-card",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"pricing-card-header",children:[e.jsx("span",{className:"tier-badge",children:"Starter"}),e.jsxs("div",{className:"tier-price",children:[m==="annual"&&e.jsxs("span",{className:"price-strike",children:["$",u.starter.monthly]}),e.jsx("span",{className:"price-symbol",children:"$"}),e.jsx("span",{className:"price-amount",children:b("starter")}),e.jsx("span",{className:"price-period",children:"/mo"})]}),e.jsx("div",{className:"price-billing",children:m==="annual"?`Billed annually · $${te("starter").toLocaleString()}/year`:"Billed monthly"}),e.jsx("p",{className:"tier-desc",children:"For independent installers getting off the free tier with branded proposals and utility meter uploads."})]}),e.jsxs("div",{className:"pricing-card-features",children:[e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"8 client proposals per month"})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"Meter CSV upload (KPLC, TANESCO)"})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"KPLC & TANESCO tariff presets"})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"Your logo on reports"})]})]})]}),e.jsx("button",{type:"button",onClick:()=>q("starter"),className:"pricing-card-cta",children:"Select Starter Plan →"})]}),e.jsxs("div",{className:"pricing-card",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"pricing-card-header",children:[e.jsx("span",{className:"tier-badge",children:"Professional"}),e.jsxs("div",{className:"tier-price",children:[m==="annual"&&e.jsxs("span",{className:"price-strike",children:["$",u.professional.monthly]}),e.jsx("span",{className:"price-symbol",children:"$"}),e.jsx("span",{className:"price-amount",children:b("professional")}),e.jsx("span",{className:"price-period",children:"/mo"})]}),e.jsx("div",{className:"price-billing",children:m==="annual"?`Billed annually · $${te("professional").toLocaleString()}/year`:"Billed monthly"}),e.jsx("p",{className:"tier-desc",children:"For independent solar engineers and regional EPC teams running commercial proposals."})]}),e.jsxs("div",{className:"pricing-card-features",children:[e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"Full 5-minute solar & storage sizing engine"})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"Automated Interconnection Artifact Generation"})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"Hardware configuration match validator"})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"Regional irradiation & tariff modeling"})]})]})]}),e.jsx("button",{type:"button",onClick:()=>q("professional"),className:"pricing-card-cta",children:"Select Professional Plan →"})]}),e.jsxs("div",{className:"pricing-card highlighted",children:[e.jsx("div",{className:"recommended-ribbon",children:"MOST POPULAR"}),e.jsxs("div",{children:[e.jsxs("div",{className:"pricing-card-header",children:[e.jsx("span",{className:"tier-badge",children:"Business"}),e.jsxs("div",{className:"tier-price",children:[m==="annual"&&e.jsxs("span",{className:"price-strike",children:["$",u.business.monthly]}),e.jsx("span",{className:"price-symbol",children:"$"}),e.jsx("span",{className:"price-amount",children:b("business")}),e.jsx("span",{className:"price-period",children:"/mo"})]}),e.jsx("div",{className:"price-billing",children:m==="annual"?`Billed annually · $${te("business").toLocaleString()}/year`:"Billed monthly"}),e.jsx("p",{className:"tier-desc",children:"For high-velocity EPCs and developers who need bank-ready yield models to close financing."})]}),e.jsxs("div",{className:"pricing-card-features",children:[e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon text-emerald",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"Everything in Professional"})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon text-emerald",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"Stochastic P50/P90 Yield Modeling (Monte Carlo)"})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon text-emerald",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"Dynamic Tariff-Aware Procurement Engine"})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon text-emerald",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"Unlimited bank-grade proposal generation"})]})]})]}),e.jsx("button",{type:"button",onClick:()=>q("business"),className:"pricing-card-cta highlighted",children:"Select Business Plan →"})]}),e.jsxs("div",{className:"pricing-card",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"pricing-card-header",children:[e.jsx("span",{className:"tier-badge",children:"Enterprise"}),e.jsxs("div",{className:"tier-price",children:[e.jsx("span",{className:"price-amount contact-label",children:"Contact Sales"})]}),e.jsx("div",{className:"price-billing",children:"Custom pricing for distributors, banks, and EPC networks"}),e.jsx("p",{className:"tier-desc",children:"For multi-megawatt asset operators, infrastructure funds, and global corporate fleet managers."})]}),e.jsxs("div",{className:"pricing-card-features",children:[e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"Everything in Business"})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"Interconnection Physics & Battery Energy Storage System Arbitrage"})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"Physics-Informed Nonlinear Degradation Forecasting"})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("svg",{className:"check-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsx("span",{children:"Fleet-Wide Digital Twin Telemetry (SCADA integration)"})]})]})]}),e.jsx("a",{href:"mailto:support@sanelx.com?subject=Synex%20Enterprise%20Inquiry",className:"pricing-card-cta",children:"Contact Sales →"})]})]})]}),e.jsx("section",{className:"launch-teaser-section",children:e.jsxs("div",{className:"launch-teaser-inner",children:[e.jsxs("div",{className:"launch-teaser-eyebrow",children:[e.jsx("span",{className:"launch-teaser-dot"}),"Real-time Energy Trading"]}),e.jsxs("h2",{children:["Automated dispatch",e.jsx("br",{}),e.jsx("span",{className:"teaser-highlight",children:"is active on the grid."})]}),e.jsx("p",{children:"The Synex trading engine dynamically balances battery dispatch states against sub-hourly utility tariff fluctuations. Connect your physical storage nodes, configure custom arbitrage thresholds, and maximize your return on investment automatically."}),e.jsx("a",{href:"https://synex.sanelx.com",target:"_blank",rel:"noopener noreferrer",className:"btn-launch-waitlist",style:{textDecoration:"none",display:"inline-block",textAlign:"center"},children:"Open Trading Dashboard →"})]})}),e.jsxs("section",{className:"synex-bottom-cta",children:[e.jsx("h2",{children:"Launch the Trading Engine"}),e.jsx("p",{children:"Skip the delay. Connect your assets and start optimizing solar self-consumption and battery arbitrage instantly."}),e.jsx("a",{href:"https://synex.sanelx.com",target:"_blank",rel:"noopener noreferrer",className:"btn-scroll-top",style:{textDecoration:"none",display:"inline-block",textAlign:"center",margin:"0 auto"},children:"LAUNCH ENGINE"})]}),e.jsxs("footer",{className:"synex-footer",children:[e.jsx("div",{className:"synex-footer-left",children:"© 2026 SanelX."}),e.jsx("div",{className:"synex-footer-center",children:"[🟢 System Status: Operational]"}),e.jsxs("div",{className:"synex-footer-right",children:[e.jsx("a",{href:"mailto:support@sanelx.com?subject=Request Custom Tariff",className:"synex-footer-link",children:"Request Custom Tariff"}),e.jsx("a",{href:"mailto:support@sanelx.com?subject=Request Hardware DNA",className:"synex-footer-link",children:"Request Hardware DNA"}),e.jsx("a",{href:"mailto:support@sanelx.com?subject=Report a Bug",className:"synex-footer-link",children:"Report a Bug"})]})]}),Re&&e.jsx("div",{className:"verification-modal-overlay",children:e.jsxs("div",{className:"verification-modal-card",children:[e.jsx("button",{type:"button",className:"modal-close-btn",onClick:()=>{Me(!1),T("idle"),U("")},children:"✕"}),p!=="success"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"modal-badge",children:"✦ Engineering Verification Gate"}),e.jsx("h3",{children:"Verify Your Staging Access"}),e.jsx("p",{className:"modal-subtitle",children:"Please complete verification to unlock temporary credentials for the staging sandbox demo."}),se&&e.jsxs("div",{className:"modal-error-banner",children:["⚠️ ",se]}),p==="error"&&e.jsx("div",{className:"modal-error-banner",children:"❌ Submission failed. Please check your connection and try again."}),e.jsxs("form",{onSubmit:tr,className:"modal-form",children:[e.jsxs("div",{className:"modal-form-row",children:[e.jsxs("div",{className:"modal-form-group",children:[e.jsx("label",{className:"modal-label",children:"Work Email"}),e.jsx("input",{type:"email",required:!0,placeholder:"john@company.com",value:f,onChange:r=>B(r.target.value),className:"modal-input",disabled:p==="loading"})]}),e.jsxs("div",{className:"modal-form-group",children:[e.jsx("label",{className:"modal-label",children:"Company Name"}),e.jsx("input",{type:"text",required:!0,placeholder:"e.g. Tesla",value:N,onChange:r=>O(r.target.value),className:"modal-input",disabled:p==="loading"})]})]}),e.jsxs("div",{className:"modal-form-row",children:[e.jsxs("div",{className:"modal-form-group",children:[e.jsx("label",{className:"modal-label",children:"Company Website URL"}),e.jsx("input",{type:"text",required:!0,placeholder:"tesla.com",value:D,onChange:r=>W(r.target.value),className:"modal-input",disabled:p==="loading"})]}),e.jsxs("div",{className:"modal-form-group",children:[e.jsx("label",{className:"modal-label",children:"LinkedIn Profile URL"}),e.jsx("input",{type:"text",required:!0,placeholder:"linkedin.com/in/username",value:F,onChange:r=>Y(r.target.value),className:"modal-input",disabled:p==="loading"})]})]}),e.jsxs("div",{className:"modal-form-group",children:[e.jsx("label",{className:"modal-label",children:"Are you looking to deploy solar project telemetry?"}),e.jsxs("select",{value:oe,onChange:r=>Pe(r.target.value),className:"modal-select",disabled:p==="loading",children:[e.jsx("option",{value:"Yes - Ready within 30 days",children:"Yes - Ready within 30 days"}),e.jsx("option",{value:"Yes - Active planning stage",children:"Yes - Active planning stage"}),e.jsx("option",{value:"Just researching/Exploring",children:"Just researching/Exploring"})]})]}),e.jsxs("div",{className:"modal-warning-box",children:[e.jsx("strong",{children:"✦ Method A Verification:"})," Credentials are cross-referenced with your LinkedIn profile and corporate website to issue staging keys. Submitting fake details will result in automated IP blacklisting."]}),e.jsx("button",{type:"submit",className:"modal-submit-btn",disabled:p==="loading",children:p==="loading"?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-loader"}),e.jsx("span",{children:Be})]}):"Verify & Launch Sandbox Demo →"})]})]}):e.jsxs("div",{className:"modal-success-state",children:[e.jsx("span",{className:"modal-success-checkmark",children:"✓"}),e.jsx("h3",{children:"Verification Successful!"}),localStorage.getItem("loi_signed_"+E.toLowerCase().trim())==="true"?e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Your LOI signature has been secured. Launch the staging sandbox directly:"}),e.jsx("div",{style:{marginTop:"2rem"},children:e.jsx("a",{href:"https://synex.sanelx.com",target:"_blank",rel:"noopener noreferrer",className:"btn-tesla-secondary-glow",style:{textDecoration:"none",display:"flex",justifyContent:"center",background:"#10b981",color:"#fff",borderColor:"#10b981"},children:"Launch Interactive Sandbox ➔"})})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Corporate domains authenticated. Please sign the non-binding Letter of Intent to secure sandbox staging access keys."}),e.jsx("div",{style:{marginTop:"2rem"},children:e.jsx("a",{href:`/loi?email=${encodeURIComponent(E)}&company=${encodeURIComponent(N||"")}`,target:"_blank",rel:"noopener noreferrer",className:"btn-tesla-secondary-glow",style:{textDecoration:"none",display:"flex",justifyContent:"center"},children:"Sign Digital LOI to Unlock Sandbox ➔"})})]})]})]})}),Oe&&e.jsx("div",{className:"verification-modal-overlay",children:e.jsxs("div",{className:"verification-modal-card checkout-modal-card",children:[e.jsx("button",{type:"button",className:"modal-close-btn",onClick:()=>{le(!1),x("idle"),g("")},children:"✕"}),c==="success"?e.jsxs("div",{className:"modal-success-state",children:[e.jsx("span",{className:"modal-success-checkmark",children:"✓"}),e.jsx("h3",{style:{color:"#ffffff"},children:"Payment Secured!"}),e.jsxs("p",{style:{color:"#cbd5e1",marginBottom:"1.5rem",marginTop:"1rem"},children:["Your ",e.jsx("strong",{children:n?n.toUpperCase():""})," subscription is now active."]}),e.jsx("p",{style:{color:"#94a3b8"},children:"Sandbox staging environment authorized. Staging credentials have been securely stored in your local storage."}),e.jsx("div",{style:{marginTop:"2rem"},children:e.jsx("a",{href:"https://synex.sanelx.com",target:"_blank",rel:"noopener noreferrer",className:"btn-tesla-secondary-glow",style:{textDecoration:"none",display:"flex",justifyContent:"center",background:"#10b981",color:"#fff",borderColor:"#10b981"},children:"LAUNCH INTERACTIVE SANDBOX ➔"})})]}):c==="ussd"?e.jsxs("div",{children:[e.jsx("div",{className:"modal-badge",style:{background:"rgba(56, 189, 248, 0.08)",borderColor:"rgba(56, 189, 248, 0.25)",color:"#38bdf8"},children:"✦ Mobile Carrier Dispatch"}),e.jsx("h3",{style:{color:"#ffffff",marginBottom:"0.25rem"},children:"USSD Payment Confirmation"}),e.jsx("p",{className:"modal-subtitle",style:{color:"#94a3b8",marginBottom:"1.5rem"},children:"Follow the mobile provider dial instructions to authorize your sandbox credentials."}),e.jsxs("div",{className:"ussd-split-layout",children:[e.jsxs("div",{className:"ussd-instructions",children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0"},children:"Dial Code Instructions"}),e.jsxs("div",{className:"dial-code-badge",children:[e.jsx("span",{className:"dial-code-string",children:h[d].code}),e.jsx("button",{type:"button",className:"btn-copy-dial",onClick:()=>{navigator.clipboard.writeText(h[d].code),alert("Dial code copied!")},children:"Copy"})]}),e.jsx("ul",{className:"ussd-step-list",children:h[d].instructions.map((r,a)=>e.jsxs("li",{className:"ussd-step-item",children:[e.jsx("span",{className:"ussd-step-number",children:a+1}),e.jsx("span",{children:r})]},a))}),e.jsx("p",{style:{fontSize:"0.8rem",color:"#94a3b8"},children:"Carrier networks can sometimes face external queuing delays. To verify instantly, you may use the phone simulator interface on the right."})]}),e.jsx("div",{className:"phone-simulator",children:e.jsx("div",{className:"phone-simulator-frame",children:e.jsx("div",{className:"phone-simulator-screen",children:je===0?e.jsxs("form",{onSubmit:Fe,className:"ussd-box",children:[e.jsx("div",{className:"ussd-header",children:h[d].name}),e.jsxs("div",{className:"ussd-content",children:["Pay to SanelX:",`
`,e.jsx("strong",{children:n?K(b(n),A):""}),`
`,`
`,"Enter details to verify:"]}),e.jsx("input",{type:"text",required:!0,placeholder:"Transaction Ref ID",value:G,onChange:r=>X(r.target.value),className:"ussd-input ref-id",style:{marginBottom:"0.4rem"}}),e.jsx("input",{type:"password",required:!0,maxLength:4,placeholder:"•••• Wallet PIN",value:$,onChange:r=>H(r.target.value.replace(/\D/g,"")),className:"ussd-input"}),e.jsxs("div",{className:"ussd-btn-group",children:[e.jsx("button",{type:"button",className:"ussd-action-btn",onClick:()=>{x("idle"),H(""),X("")},children:"Cancel"}),e.jsx("button",{type:"submit",className:"ussd-action-btn primary",children:"Send"})]})]}):je===1?e.jsxs("div",{style:{color:"#38bdf8",textAlign:"center",fontSize:"0.85rem"},children:[e.jsx("span",{className:"spinner-loader",style:{borderTopColor:"#38bdf8",marginBottom:"1rem"}}),e.jsx("div",{children:"Sending PIN..."}),e.jsx("div",{style:{fontSize:"0.7rem",color:"#64748b",marginTop:"0.5rem"},children:"Confirming transaction with mobile carrier network"})]}):e.jsxs("div",{style:{color:"#10b981",textAlign:"center",fontSize:"0.85rem"},children:[e.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"0.5rem"},children:"✓"}),e.jsx("div",{children:"Transaction Secured!"}),e.jsx("div",{style:{fontSize:"0.7rem",color:"#64748b",marginTop:"0.5rem"},children:"Directing to sandbox setup..."})]})})})})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"modal-badge",style:{background:"rgba(16, 185, 129, 0.08)",borderColor:"rgba(16, 185, 129, 0.25)",color:"#10b981"},children:"✦ SECURE GATEWAY"}),e.jsx("h3",{children:"Authorize Sandbox Staging License"}),e.jsxs("p",{className:"modal-subtitle",children:["Choose a payment option to activate your ",e.jsx("strong",{children:n?n.toUpperCase():""})," sandbox license."]}),e.jsxs("div",{className:"checkout-plan-summary",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"checkout-plan-name",children:[n?n.toUpperCase():""," PLAN"]}),e.jsxs("span",{style:{color:"#94a3b8",fontSize:"0.85rem",marginLeft:"0.75rem"},children:["(",m==="annual"?"Billed Annually":"Billed Monthly",")"]})]}),e.jsxs("div",{className:"checkout-plan-price",children:["$",n?b(n):0,e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:500,color:"#94a3b8"},children:"/mo"}),e.jsxs("span",{className:"checkout-plan-tzs",children:["~ ",n?K(b(n),A):""]})]})]}),ye&&e.jsxs("div",{className:"modal-error-banner",style:{marginBottom:"1.25rem"},children:["⚠️ ",ye]}),e.jsxs("form",{onSubmit:We,className:"modal-form",children:[e.jsxs("div",{className:"checkout-input-group",children:[e.jsx("label",{children:"Select Payment Option"}),e.jsx("div",{className:"payment-methods-grid",children:Object.keys(h).map(r=>e.jsxs("div",{className:`payment-method-card ${d===r?"active":""}`,onClick:()=>{de(r),g("")},children:[e.jsx("div",{className:"payment-logo",children:h[r].logo}),e.jsx("span",{className:"payment-method-title",children:h[r].name})]},r))})]}),e.jsxs("div",{className:"modal-form-group",style:{marginBottom:"0.5rem"},children:[e.jsx("label",{className:"modal-label",children:"Staging Work Email"}),e.jsx("input",{type:"email",required:!0,placeholder:"john@company.com",value:j,onChange:r=>ce(r.target.value),className:"checkout-input",disabled:c==="loading"})]}),e.jsxs("div",{className:"modal-form-group",style:{marginBottom:"0.5rem"},children:[e.jsx("label",{className:"modal-label",children:"Select Country (Required)"}),e.jsxs("select",{required:!0,value:A,onChange:r=>{ke(r.target.value)},className:"checkout-input",style:{background:"#1e293b",color:"#ffffff",width:"100%"},disabled:c==="loading",children:[e.jsx("option",{value:"tanzania",children:"Tanzania (TZS)"}),e.jsx("option",{value:"kenya",children:"Kenya (KES)"}),e.jsx("option",{value:"uganda",children:"Uganda (UGX)"}),e.jsx("option",{value:"rwanda",children:"Rwanda (RWF)"}),e.jsx("option",{value:"other",children:"Other / International (USD)"})]})]}),d!=="card"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"modal-form-group",style:{marginBottom:"0.75rem"},children:[e.jsxs("label",{className:"modal-label",children:[h[d].name," Phone Number"]}),e.jsx("input",{type:"tel",required:!0,placeholder:"e.g. 0768000000",value:me,onChange:r=>pe(r.target.value),className:"checkout-input",disabled:c==="loading"}),e.jsx("span",{style:{fontSize:"0.75rem",color:"#94a3b8",marginTop:"0.2rem"},children:"Provide your registered mobile payment number."})]}),e.jsxs("div",{className:"mobile-payment-instructions-box",style:{background:"rgba(30, 41, 59, 0.4)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"8px",padding:"1rem",marginBottom:"1rem",fontSize:"0.85rem"},children:[e.jsx("div",{style:{color:"#94a3b8",marginBottom:"0.75rem",fontWeight:650,textTransform:"uppercase",fontSize:"0.75rem",letterSpacing:"0.05em"},children:"Payment Instructions (Mobile Money):"}),e.jsxs("p",{style:{color:"#cbd5e1",marginBottom:"1rem",lineHeight:"1.4"},children:["Please pay",e.jsx("strong",{style:{color:"#38bdf8",marginLeft:"0.25rem",marginRight:"0.25rem"},children:n?K(b(n),A):""}),"from your mobile device using the credentials below:"]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(15, 23, 42, 0.6)",padding:"0.5rem 0.75rem",borderRadius:"6px",border:"1px solid rgba(255,255,255,0.05)"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{color:"#64748b",display:"block",fontSize:"0.75rem",fontWeight:600},children:"Business Till Number"}),e.jsx("strong",{style:{color:"#ffffff",fontFamily:"monospace",fontSize:"0.95rem"},children:"543210"})]}),e.jsx("button",{type:"button",style:{background:"#38bdf8",color:"#0f172a",border:"none",padding:"0.25rem 0.6rem",borderRadius:"4px",cursor:"pointer",fontWeight:700,fontSize:"0.7rem",textTransform:"uppercase"},onClick:()=>{navigator.clipboard.writeText("543210"),alert("Business Till Number (543210) copied to clipboard!")},children:"Copy"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(15, 23, 42, 0.6)",padding:"0.5rem 0.75rem",borderRadius:"6px",border:"1px solid rgba(255,255,255,0.05)"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{color:"#64748b",display:"block",fontSize:"0.75rem",fontWeight:600},children:"Reference Code"}),e.jsx("strong",{style:{color:"#ffffff",fontFamily:"monospace",fontSize:"0.95rem"},children:"SANELX"})]}),e.jsx("button",{type:"button",style:{background:"#38bdf8",color:"#0f172a",border:"none",padding:"0.25rem 0.6rem",borderRadius:"4px",cursor:"pointer",fontWeight:700,fontSize:"0.7rem",textTransform:"uppercase"},onClick:()=>{navigator.clipboard.writeText("SANELX"),alert("Reference Code (SANELX) copied to clipboard!")},children:"Copy"})]})]}),e.jsxs("div",{style:{marginTop:"1rem",color:"#94a3b8",fontSize:"0.78rem",fontStyle:"italic",borderTop:"1px solid rgba(255,255,255,0.05)",paddingTop:"0.5rem",lineHeight:"1.3"},children:[e.jsx("strong",{children:"Important:"})," After paying, click ",e.jsx("strong",{children:'"Confirm Payment"'})," below to proceed to the verification screen, where you will provide your Transaction Reference ID."]})]})]}):e.jsxs("div",{className:"modal-form",style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[e.jsxs("div",{className:"modal-form-group",children:[e.jsx("label",{className:"modal-label",children:"Card Number"}),e.jsx("input",{type:"text",required:!0,placeholder:"•••• •••• •••• ••••",value:ge,onChange:r=>he(r.target.value.replace(/\D/g,"").substring(0,16)),className:"checkout-input",disabled:c==="loading"})]}),e.jsxs("div",{className:"modal-form-row",children:[e.jsxs("div",{className:"modal-form-group",children:[e.jsx("label",{className:"modal-label",children:"Expiry Date"}),e.jsx("input",{type:"text",required:!0,placeholder:"MM/YY",value:fe,onChange:r=>xe(r.target.value.substring(0,5)),className:"checkout-input",disabled:c==="loading"})]}),e.jsxs("div",{className:"modal-form-group",children:[e.jsx("label",{className:"modal-label",children:"CVC"}),e.jsx("input",{type:"password",required:!0,placeholder:"•••",value:ue,onChange:r=>be(r.target.value.replace(/\D/g,"").substring(0,4)),className:"checkout-input",disabled:c==="loading"})]})]})]}),e.jsx("button",{type:"submit",className:"checkout-submit-btn",disabled:c==="loading",style:{marginTop:"1rem"},children:c==="loading"?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-loader"}),e.jsx("span",{children:"Initializing Payment..."})]}):d==="card"?"Authorize & Pay Now ➔":"Confirm Payment ➔"})]})]})]})})]})};export{fr as default};
