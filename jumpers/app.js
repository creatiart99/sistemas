const profiles={
 todos:"Todos los sectores comparten una base de tecnología, ventas y operaciones; los módulos cambian según su metodología.",
 fitness:"Fitness & bienestar: programas, hábitos, check-ins, acompañamiento y continuidad. Datos de salud solo con controles y autorizaciones adecuados.",
 vida:"Coaching de vida: metas, hábitos, compromisos y evolución personal, sin presentar la IA como terapeuta.",
 psicologia:"Psicología: agenda, administración y seguimiento entre sesiones con supervisión profesional. Sin diagnóstico automatizado ni calificación comercial basada en salud.",
 mentoria:"Mentores: convertir conocimiento en programas, controlar entregables, automatizar ventas y gestionar a sus alumnos."
};
const products=[
 {id:"diagnostico",title:"Diagnóstico Business OS",category:"Inteligencia",desc:"Mapa de cuellos de botella y oportunidades en los seis pilares del negocio.",benefit:"Resultado: plan de acción priorizado",includes:["Auditoría rápida de oferta, ventas y operación","Mapa de procesos y herramientas","Roadmap de mejoras a 90 días"],profiles:["fitness","vida","psicologia","mentoria"],min:250,max:600,moMin:0,moMax:0},
 {id:"embudo-ia",title:"Embudo inteligente con IA",category:"Captación",desc:"Captura prospectos desde contenido y anuncios con preguntas comerciales útiles.",benefit:"Resultado: más oportunidades ordenadas",includes:["Landing o formulario conversacional","Preguntas de precalificación y derivación","Agenda y registro en CRM"],profiles:["fitness","vida","mentoria"],min:500,max:1200,moMin:39,moMax:119},
 {id:"dm-ia",title:"Asistente de Instagram + WhatsApp",category:"Captación",desc:"Responde preguntas frecuentes, etiqueta contactos y deriva a un humano.",benefit:"Resultado: menos mensajes sin respuesta",includes:["Flujos desde comentarios y mensajes","Base de respuestas comerciales aprobadas","Traspaso a asesor y seguimiento"],profiles:["fitness","vida","mentoria"],min:400,max:950,moMin:49,moMax:149},
 {id:"autoridad",title:"Landing + oferta irresistible",category:"Captación",desc:"Presenta el método, beneficios, prueba social y llamada a la acción.",benefit:"Resultado: una oferta fácil de entender",includes:["Arquitectura de oferta","Página de conversión responsive","Medición de contactos y clics"],profiles:["fitness","vida","mentoria"],min:450,max:1100,moMin:25,moMax:65},
 {id:"crm",title:"CRM + máquina de seguimiento",category:"Ventas",desc:"Pipeline con responsables, citas, oportunidades y seguimiento comercial.",benefit:"Resultado: menos prospectos perdidos",includes:["Etapas de venta y etiquetas","Alertas de tareas y agenda","Reporte de conversión por etapa"],profiles:["fitness","vida","mentoria"],min:500,max:1150,moMin:49,moMax:159},
 {id:"setters",title:"Desk para setters y closers",category:"Ventas",desc:"Espacio de trabajo para asignar conversaciones y supervisar cierres.",benefit:"Resultado: mayor control del equipo",includes:["Asignación por responsable","Estado de llamadas y seguimiento","Indicadores por vendedor"],profiles:["fitness","vida","mentoria"],min:550,max:1350,moMin:59,moMax:179},
 {id:"onboarding",title:"Pago + bienvenida automática",category:"Operación",desc:"Del pago al primer día del programa, sin repetir tareas manuales.",benefit:"Resultado: clientes activados sin fricción",includes:["Confirmación y registro de compra","Accesos y mensaje de bienvenida","Checklist de incorporación"],profiles:["fitness","vida","mentoria"],min:350,max:850,moMin:29,moMax:109},
 {id:"tracking",title:"Tracking inteligente 1:1",category:"Experiencia",desc:"Cada cliente ve objetivos, actividades y progreso en su espacio privado.",benefit:"Resultado: acompañamiento personalizado",includes:["Plan por etapas y seguimiento semanal","Check-ins y actividad completada","Panel de evolución para el coach"],profiles:["fitness","vida","mentoria"],min:950,max:2200,moMin:129,moMax:349},
 {id:"portal",title:"Portal de alumnos marca blanca",category:"Experiencia",desc:"Tu propio espacio digital con logo, programas, recursos y sesiones.",benefit:"Resultado: una experiencia premium",includes:["Portal móvil con identidad de marca","Acceso individual y biblioteca","Calendario y área de recursos"],profiles:["fitness","vida","mentoria"],min:1250,max:2900,moMin:159,moMax:399},
 {id:"checkins",title:"Check-ins + alertas de inactividad",category:"Experiencia",desc:"Seguimiento del cumplimiento y alertas operativas para intervenir a tiempo.",benefit:"Resultado: mejor continuidad del programa",includes:["Formularios periódicos","Recordatorios autorizados","Alertas de baja participación"],profiles:["fitness","vida","mentoria"],min:450,max:1100,moMin:49,moMax:159},
 {id:"biblioteca",title:"Biblioteca del método",category:"Operación",desc:"Convierte los materiales dispersos del profesional en una ruta organizada.",benefit:"Resultado: conocimiento replicable",includes:["Estructura por módulos y semanas","Plantillas, videos y descargables","Control de acceso según programa"],profiles:["fitness","vida","mentoria"],min:450,max:1100,moMin:29,moMax:99},
 {id:"renovaciones",title:"Motor de renovaciones y referidos",category:"Ventas",desc:"Detecta finales de ciclo y facilita una propuesta oportuna y humana.",benefit:"Resultado: mayor continuidad comercial",includes:["Calendario de finales de programa","Solicitud de opinión y satisfacción","Flujos de renovación y referidos"],profiles:["fitness","vida","mentoria"],min:350,max:900,moMin:39,moMax:119},
 {id:"agenda-clinica",title:"Agenda profesional segura",category:"Operación",desc:"Reservas, recordatorios discretos y gestión administrativa de sesiones.",benefit:"Resultado: menos carga administrativa",includes:["Agenda y reprogramaciones","Recordatorios discretos consentidos","Roles de acceso y controles de privacidad"],profiles:["psicologia"],min:500,max:1250,moMin:49,moMax:159},
 {id:"seguimiento-clinico",title:"Seguimiento entre sesiones",category:"Experiencia",desc:"Tareas acordadas con el psicólogo, registros voluntarios y revisión humana.",benefit:"Resultado: continuidad bajo supervisión",includes:["Actividades definidas por el profesional","Registro privado controlado por el paciente","Consentimiento, auditoría y revisión de seguridad"],profiles:["psicologia"],min:1100,max:2800,moMin:149,moMax:379},
 {id:"admin-pro",title:"CRM administrativo profesional",category:"Operación",desc:"Organiza solicitudes, pagos y citas sin puntuar datos clínicos para vender.",benefit:"Resultado: gestión clara y confidencial",includes:["Fichas administrativas y estados","Cobros y recordatorios autorizados","Separación de información clínica"],profiles:["psicologia"],min:600,max:1450,moMin:59,moMax:189},
 {id:"operaciones",title:"Operaciones + automatización",category:"Operación",desc:"Procesos, responsables y tareas repetitivas conectadas de punta a punta.",benefit:"Resultado: horas recuperadas",includes:["Mapa de flujo operativo","Automatizaciones y documentación","Tablero de tareas del equipo"],profiles:["fitness","vida","psicologia","mentoria"],min:650,max:1600,moMin:69,moMax:199},
 {id:"dashboard",title:"Dashboard de negocio",category:"Inteligencia",desc:"Una vista de ventas, ingresos, costos y actividad para decidir mejor.",benefit:"Resultado: decisiones con datos",includes:["KPIs y origen de oportunidades","Ingresos y gastos por oferta","Informe ejecutivo mensual"],profiles:["fitness","vida","psicologia","mentoria"],min:500,max:1350,moMin:49,moMax:179},
 {id:"integraciones",title:"Integración del ecosistema",category:"Inteligencia",desc:"Conecta las herramientas que ya usa el negocio en lugar de duplicarlas.",benefit:"Resultado: sistemas que conversan",includes:["Mapa de aplicaciones y APIs","Integraciones viables y controles","Registros de errores y soporte"],profiles:["fitness","vida","psicologia","mentoria"],min:650,max:1850,moMin:69,moMax:219}
];
const bundles=[
 {number:"01",name:"Jumpstart IA",tag:"Entrada",desc:"Para coaches que necesitan convertir atención en citas, sin perder conversaciones.",setup:"US$900–1.900",monthly:"US$89–229 / mes",audience:"Coaches de vida · Fitness · Mentores",profiles:["fitness","vida","mentoria"],chips:["Embudo con IA","CRM","Agenda","Follow-up"],pitch:"Convertimos tu contenido y tus mensajes en un proceso claro para captar, filtrar y agendar prospectos."},
 {number:"02",name:"Client Experience OS",tag:"Producto estrella",featured:true,desc:"Para profesionales que quieren acompañar mejor sin crecer en tareas manuales.",setup:"US$1.900–4.200",monthly:"US$189–449 / mes",audience:"Coaches de vida · Fitness · Mentores",profiles:["fitness","vida","mentoria"],chips:["Portal privado","Tracking 1:1","Check-ins","Alertas"],pitch:"Cada cliente recibe su espacio personalizado; tú visualizas su participación y mantienes el control del acompañamiento."},
 {number:"03",name:"Coach Business OS",tag:"Consultoría + sistemas",desc:"Para transformar una actividad profesional rentable en un negocio con procesos.",setup:"US$2.900–6.500",monthly:"US$249–749 / mes",audience:"Coaches con oferta validada y equipo en crecimiento",profiles:["fitness","vida","mentoria"],chips:["Seis pilares","CRM","Operaciones","Dashboard"],pitch:"Unimos dirección, ventas, experiencia y automatización para que tu negocio crezca con una operación más ordenada."},
 {number:"04",name:"Consultorio Conectado",tag:"Profesionales de psicología",desc:"Para modernizar la gestión administrativa y el seguimiento supervisado.",setup:"US$1.200–3.400",monthly:"US$119–349 / mes",audience:"Psicólogos · Consultorios · Equipos profesionales",profiles:["psicologia"],chips:["Agenda segura","Administración","Tareas entre sesiones","Privacidad"],pitch:"Organiza citas, recordatorios y actividades acordadas con tus pacientes, respetando privacidad y supervisión profesional. Sujeto a revisión legal y clínica."},
 {number:"05",name:"Studio Scale",tag:"A medida",desc:"Para marcas con equipo, varias ofertas y necesidades de integración más exigentes.",setup:"Desde US$4.500",monthly:"Desde US$449 / mes",audience:"Negocios de coaching y mentoría en expansión",profiles:["fitness","vida","mentoria"],chips:["Integraciones","Multirol","Dashboards","Automatización avanzada"],pitch:"Diseñamos la arquitectura de crecimiento de tu empresa, conectando los procesos comerciales, operativos y de atención en una sola infraestructura."}
];
let activeProfile="todos",activeCategory="todos",searchTerm="";
const selected=new Set();
const $=id=>document.getElementById(id);
const money=n=>"US$"+new Intl.NumberFormat("es-CO",{maximumFractionDigits:0}).format(n);
const span=(a,b)=>a===b?money(a):money(a)+"–"+money(b);
const profileText={fitness:"Fitness",vida:"Vida",psicologia:"Psicología",mentoria:"Mentoría"};
const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const normalize=s=>s.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g,"");
function renderProducts(){
 const q=normalize(searchTerm);
 const visible=products.filter(p=>(activeProfile==="todos"||p.profiles.includes(activeProfile))&&(activeCategory==="todos"||p.category===activeCategory)&&normalize([p.title,p.desc,p.category,p.benefit,...p.includes].join(" ")).includes(q));
 $("product-grid").innerHTML=visible.map((p,i)=>'<article class="product-card"><div class="product-card-head"><span class="product-index">MÓDULO / '+String(products.indexOf(p)+1).padStart(2,"0")+'</span><span class="type-tag">'+escapeHtml(p.category)+'</span></div><h3>'+escapeHtml(p.title)+'</h3><p class="product-desc">'+escapeHtml(p.desc)+'</p><div class="product-benefit">'+escapeHtml(p.benefit)+'</div><div class="product-target">'+p.profiles.map(v=>escapeHtml(profileText[v])).join(" · ")+'</div><details class="product-detail"><summary>Qué incluye</summary><ul>'+p.includes.map(x=>"<li>"+escapeHtml(x)+"</li>").join("")+'</ul></details><div class="product-foot"><div class="price-mini"><span>Implementación desde</span><strong>'+money(p.min)+'</strong></div><button type="button" class="add-product" data-add="'+p.id+'" aria-pressed="'+selected.has(p.id)+'">'+(selected.has(p.id)?"✓ Añadido":"+ Añadir")+'</button></div></article>').join("");
 $("results-label").textContent=visible.length+" "+(visible.length===1?"producto encontrado":"productos encontrados");
 $("empty-state").hidden=visible.length!==0;
 document.querySelectorAll("[data-add]").forEach(b=>b.addEventListener("click",()=>toggleProduct(b.dataset.add)));
}
function renderBundles(){
 const visible=bundles.filter(b=>activeProfile==="todos"||b.profiles.includes(activeProfile));
 $("bundle-grid").innerHTML=visible.map(b=>'<article class="bundle-card '+(b.featured?"featured":"")+'"><div class="bundle-top"><span class="bundle-number">OFERTA / '+b.number+'</span><span class="bundle-label">'+escapeHtml(b.tag)+'</span></div><h3>'+escapeHtml(b.name)+'</h3><p class="bundle-description">'+escapeHtml(b.desc)+'</p><div class="bundle-setup"><small>Implementación inicial</small>'+escapeHtml(b.setup)+'</div><div class="bundle-monthly">Soporte y plataforma: '+escapeHtml(b.monthly)+'</div><div class="bundle-includes">'+b.chips.map(c=>"<span>"+escapeHtml(c)+"</span>").join("")+'</div><div class="bundle-target">'+escapeHtml(b.audience)+'</div><button class="bundle-copy" type="button" data-bundle="'+b.number+'">Copiar esta oferta <span>↗</span></button></article>').join("");
 document.querySelectorAll("[data-bundle]").forEach(b=>b.addEventListener("click",()=>copyBundle(b.dataset.bundle,b)));
}
function renderBuilder(){
 const items=products.filter(p=>selected.has(p.id));
 const count=items.length;
 $("builder-count").textContent=count+" "+(count===1?"módulo":"módulos");
 $("selection-title").textContent=count?"Tu propuesta en construcción":"Aún no has añadido productos";
 $("builder-items").innerHTML=count?items.map(p=>'<div class="builder-item"><div><h4>'+escapeHtml(p.title)+'</h4><p>Implementación '+span(p.min,p.max)+' · mensual '+(p.moMax?span(p.moMin,p.moMax):"sin cuota definida")+'</p></div><button type="button" class="remove-item" data-remove="'+p.id+'" aria-label="Quitar '+escapeHtml(p.title)+'">×</button></div>').join(""):'<div class="builder-placeholder"><span>+</span><p>Usa el botón “Añadir” de cualquier producto para empezar a diseñar una oferta.</p></div>';
 $("setup-range").textContent=count?span(items.reduce((s,p)=>s+p.min,0),items.reduce((s,p)=>s+p.max,0)):"US$0";
 $("monthly-range").textContent=count?span(items.reduce((s,p)=>s+p.moMin,0),items.reduce((s,p)=>s+p.moMax,0)):"US$0";
 document.querySelectorAll("[data-remove]").forEach(b=>b.addEventListener("click",()=>toggleProduct(b.dataset.remove)));
}
function toggleProduct(id){selected.has(id)?selected.delete(id):selected.add(id);renderProducts();renderBuilder();}
function setProfile(key){
 activeProfile=key;
 document.querySelectorAll("[data-profile]").forEach(b=>{const chosen=b.dataset.profile===key;b.classList.toggle("active",chosen);b.setAttribute("aria-pressed",String(chosen));});
 $("segment-explainer").textContent=profiles[key];
 renderProducts();renderBundles();
}
function setCategory(key){
 activeCategory=key;
 document.querySelectorAll("[data-category]").forEach(b=>{const chosen=b.dataset.category===key;b.classList.toggle("selected",chosen);b.setAttribute("aria-pressed",String(chosen));});
 renderProducts();
}
function resetFilters(){
 $("search").value="";searchTerm="";setProfile("todos");setCategory("todos");
}
function getProposalText(){
 const items=products.filter(p=>selected.has(p.id));
 const name=$("proposal-name").value.trim()||"Cliente por definir";
 const a=items.reduce((s,p)=>s+p.min,0),b=items.reduce((s,p)=>s+p.max,0),c=items.reduce((s,p)=>s+p.moMin,0),d=items.reduce((s,p)=>s+p.moMax,0);
 return ["PROPUESTA PRELIMINAR · JUMPERS × SAMUEL ACUÑA","Cliente: "+name,"",...items.map((p,i)=>(i+1)+". "+p.title+" — "+p.benefit.replace("Resultado: ","")),"","Implementación estimada: "+span(a,b),"Mensualidad estimada: "+span(c,d),"","Alcance, calendario y costos de herramientas sujetos a diagnóstico. Precios orientativos no vinculantes.","Nota: en servicios de psicología, se requiere evaluación de cumplimiento y privacidad antes de implementar.","","Jumpers: captación y crecimiento comercial. Samuel Acuña: estrategia operativa, sistemas y tecnología."].join("\n");
}
async function copyText(s,button,defaultText){
 try{
  if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(s);}
  else{const el=document.createElement("textarea");el.value=s;el.style.position="fixed";el.style.opacity="0";document.body.appendChild(el);el.select();if(!document.execCommand("copy"))throw new Error("copy_failed");el.remove();}
  if(button){button.textContent="✓ Copiado";setTimeout(()=>button.innerHTML=defaultText,1800);}
  return true;
 }catch(e){if(button){button.textContent="No se pudo copiar";setTimeout(()=>button.innerHTML=defaultText,2400);}return false;}
}
function copyBundle(id,button){
 const b=bundles.find(x=>x.number===id);if(!b)return;
 const s=["OFERTA · "+b.name,"",b.pitch,"","Incluye: "+b.chips.join(", "),"Inversión inicial orientativa: "+b.setup,"Soporte / plataforma: "+b.monthly,"Para: "+b.audience,"","Los rangos no incluyen necesariamente licencias, consumo de APIs o costos de terceros. Sujeto a diagnóstico, alcance, privacidad y cotización final.","Jumpers × Samuel Acuña"].join("\n");
 copyText(s,button,'Copiar esta oferta <span>↗</span>');
}
document.addEventListener("DOMContentLoaded",()=>{
 $("product-total").textContent=products.length;
 document.querySelectorAll("[data-profile]").forEach(b=>b.addEventListener("click",()=>setProfile(b.dataset.profile)));
 document.querySelectorAll("[data-category]").forEach(b=>b.addEventListener("click",()=>setCategory(b.dataset.category)));
 $("search").addEventListener("input",e=>{searchTerm=e.target.value;renderProducts();});
 $("reset-filters").addEventListener("click",resetFilters);
 $("clear-from-empty").addEventListener("click",resetFilters);
 $("clear-builder").addEventListener("click",()=>{selected.clear();renderProducts();renderBuilder();$("copy-feedback").textContent="";});
 $("copy-proposal").addEventListener("click",async()=>{
  const feedback=$("copy-feedback");if(!selected.size){feedback.textContent="Añade al menos un producto al catálogo.";return;}
  const ok=await copyText(getProposalText(),$("copy-proposal"),'Copiar borrador de propuesta <span>↗</span>');
  feedback.textContent=ok?"Propuesta copiada. Puedes pegarla en WhatsApp o un documento.":"Selecciona el texto manualmente si tu navegador bloquea el portapapeles.";
 });
 renderProducts();renderBundles();renderBuilder();
});