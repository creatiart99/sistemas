(function(){
"use strict";
var DB=window.GROWTH_DATA;
if(!DB){document.body.textContent="No se pudieron cargar los datos del mapa.";return;}
var $=function(id){return document.getElementById(id);};
var state={pillar:null,system:null,month:0,zoom:.68,view:"map"};
var positions=[{side:"left",x:30,y:56},{side:"right",x:1422,y:56},{side:"left",x:30,y:468},{side:"right",x:1422,y:468},{side:"left",x:30,y:880},{side:"right",x:1422,y:880}];
var status={}; try{status=JSON.parse(localStorage.getItem("stand-map-status-v1")||"{}")||{}}catch(e){}
var escapeHtml=function(v){return String(v).replace(/[&<>"']/g,function(x){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x];});};
var sysById=function(id){return DB.systems.find(function(s){return s.id===id});};
var pad=function(n){return String(n).padStart(2,"0")};
function store(){try{localStorage.setItem("stand-map-status-v1",JSON.stringify(status))}catch(e){}}
function notify(t){var el=$("toast");el.textContent=t;el.classList.add("show");clearTimeout(notify.timer);notify.timer=setTimeout(function(){el.classList.remove("show")},2700)}
function svgLines(){
 var center={x:1072,y:642},paths=[];
 positions.forEach(function(pos,i){
  var x=pos.side==="left"?pos.x+675:pos.x, y=pos.y+61;
  var c=DB.pillars[i].color;
  var mid=(center.x+x)/2;
  paths.push('<path d="M'+center.x+' '+center.y+' C'+mid+' '+center.y+' '+mid+' '+y+' '+x+' '+y+'" stroke="'+c+'" stroke-width="3.6" fill="none" opacity=".77"/>');
  paths.push('<circle cx="'+x+'" cy="'+y+'" r="6.5" fill="'+c+'"/>');
  var sysX=pos.side==="left"?pos.x+309:pos.x+154;
  var headX=pos.side==="left"?pos.x+330:pos.x;
  var headY=pos.y+122;
  paths.push('<path d="M'+headX+' '+headY+' C'+sysX+' '+(headY+24)+' '+sysX+' '+(headY+22)+' '+sysX+' '+(headY+45)+'" stroke="'+c+'" fill="none" stroke-width="2" opacity=".5"/>');
 });
 $("mapLines").innerHTML=paths.join("");
}
function cluster(p,i){
 var pos=positions[i],dir=pos.side;
 var ss=DB.systems.filter(function(s){return s.p===p.id});
 var systems='<div class="mini-title">SISTEMAS QUE CREAREMOS <span>04</span></div>'+ss.map(function(s,j){return '<button class="system-leaf" type="button" data-system="'+s.id+'" title="Ver ficha de '+escapeHtml(s.name)+'"><span class="leaf-dot">'+pad(j+1)+'</span><span>'+escapeHtml(s.name)+'</span><span class="leaf-arrow">↗</span></button>';}).join('');
 var outcomes='<div class="mini-title">RESULTADOS QUE BUSCAMOS</div>'+p.result.map(function(x){return '<div class="outcome-leaf"><span class="check-icon">✓</span><span>'+escapeHtml(x)+'</span></div>';}).join('');
 var header='<button type="button" class="pillar-node" data-pillar="'+i+'" aria-label="Explorar pilar '+p.id+': '+escapeHtml(p.full)+'"><span class="pillar-number">'+pad(p.id)+'</span><span><small>'+escapeHtml(p.tag)+'</small><strong>'+escapeHtml(p.title)+'</strong></span><span class="pillar-arrow">↗</span></button>';
 return '<div class="branch '+dir+'" data-branch="'+i+'" style="left:'+pos.x+'px;top:'+pos.y+'px;--branch:'+p.color+'">'+header+'<div class="branch-children"><div class="systems-box">'+systems+'</div><div class="outcomes-box">'+outcomes+'</div></div></div>';
}
function renderMap(){
 svgLines();$("mapStage").insertAdjacentHTML("beforeend",DB.pillars.map(cluster).join(""));
 $("pillarFilters").innerHTML='<button class="filter-btn active" type="button" data-filter="all"><span class="filter-star">✳</span><span>Todos los pilares</span><span>06</span></button>'+DB.pillars.map(function(p,i){return '<button class="filter-btn" type="button" data-filter="'+i+'"><span class="filter-dot" style="background:'+p.color+'">'+pad(p.id)+'</span><span>'+escapeHtml(p.title)+'</span><span>↗</span></button>'}).join('');
 $("mapStage").addEventListener("click",function(e){var b=e.target.closest("[data-system], [data-pillar]");if(!b)return;if(b.dataset.system){openSystem(b.dataset.system)}else{openPillar(Number(b.dataset.pillar))}});
 $("pillarFilters").addEventListener("click",function(e){var b=e.target.closest("[data-filter]");if(!b)return;var p=b.dataset.filter;selectPillar(p==="all"?null:Number(p),true)});
}
function selectPillar(i,center){
 state.pillar=i;
 document.querySelectorAll("[data-branch]").forEach(function(b){b.classList.toggle("muted-branch",i!==null&&Number(b.dataset.branch)!==i);b.classList.toggle("chosen-branch",i!==null&&Number(b.dataset.branch)===i)});
 document.querySelectorAll(".filter-btn").forEach(function(b){b.classList.toggle("active",(i===null?"all":String(i))===b.dataset.filter)});
 if(i!==null){renderPillarPanel(DB.pillars[i]);if(center){setZoom(.95);var pos=positions[i];$("mapScroll").scrollTo({left:Math.max(0,(pos.x+330)*state.zoom-$("mapScroll").clientWidth/2),top:Math.max(0,(pos.y+185)*state.zoom-$("mapScroll").clientHeight/2),behavior:"smooth"})}}else{renderMapGuide()}
}
function openPillar(i){selectPillar(i,false);$("inspector").classList.add("visible");$("inspector").setAttribute("aria-hidden","false");}
function showInspector(html){
 $("inspectorBody").innerHTML=html;
 $("inspector").classList.add("visible");$("inspector").setAttribute("aria-hidden","false");
}
function renderPillarPanel(p){
 var sys=DB.systems.filter(function(s){return s.p===p.id});
 showInspector('<div class="drawer-eyebrow">PILAR '+pad(p.id)+' / 06</div><h2>'+escapeHtml(p.full)+'</h2><p class="drawer-sub">Cuatro sistemas propuestos para conseguir resultados concretos.</p><div class="drawer-section-label">Sistemas de este pilar</div><div class="drawer-system-list">'+sys.map(function(s){return '<button type="button" data-open-system="'+s.id+'"><strong>'+escapeHtml(s.name)+'</strong><span>'+escapeHtml(s.desc)+'</span><em>Ver detalle ↗</em></button>'}).join('')+'</div><div class="drawer-section-label">Resultados esperados</div><ul class="nice-list">'+p.result.map(function(x){return '<li>'+escapeHtml(x)+'</li>'}).join('')+'</ul><div class="drawer-section-label">Indicadores de control</div><p class="drawer-small">'+escapeHtml(p.kpis.join(" · "))+'</p>');
}
function renderMapGuide(){
 showInspector('<div class="drawer-eyebrow">LEER ESTE MAPA</div><h2>De la estrategia a sistemas reales.</h2><p class="drawer-sub">El centro representa El Stand de la Mujer. Cada rama tiene un pilar, cuatro sistemas a construir y tres resultados que buscamos conseguir.</p><div class="step-guide"><span>01</span><p>Selecciona una <b>rama</b> para ver el objetivo del pilar.</p></div><div class="step-guide"><span>02</span><p>Abre un <b>sistema</b> para consultar su funcionamiento, entregable, indicador y dependencias.</p></div><div class="step-guide"><span>03</span><p>Ve a <b>6 meses</b> para conocer qué desarrollaremos en cada etapa.</p></div><div class="soft-info"><strong>Importante</strong><p>Todos los sistemas son propuestas sujetas a diagnóstico y viabilidad técnica. No están construidos ni conectados actualmente.</p></div>');
}
function openSystem(id){
 var s=sysById(id);if(!s)return;state.system=id;state.pillar=s.p-1;
 selectPillar(s.p-1,false);
 var m=s.months.map(function(n){return '<span class="mchip">M'+n+'</span>'}).join('');
 var html='<div class="drawer-eyebrow">SISTEMA '+escapeHtml(s.id)+' · PILAR '+pad(s.p)+'</div><h2>'+escapeHtml(s.name)+'</h2><p class="drawer-sub">'+escapeHtml(s.desc)+'</p><div class="drawer-section-label">Qué construiremos exactamente</div><p class="drawer-small">'+escapeHtml(s.how)+'</p><div class="drawer-section-label">Qué lograremos con él</div><div class="benefit"><span>↗</span>'+escapeHtml(s.out)+'</div><div class="drawer-section-label">Entregable que quedará</div><p class="drawer-small">'+escapeHtml(s.deliver)+'</p><div class="drawer-section-label">Cómo mediremos el resultado</div><p class="drawer-small">'+escapeHtml(s.metric)+'</p><div class="drawer-section-label">Dependencias para construirlo</div><p class="drawer-small">'+escapeHtml(s.deps)+'</p><div class="drawer-section-label">Intervención prevista</div><div class="mchips">'+m+'</div><div class="soft-info"><strong>Estado: propuesta</strong><p>La implementación exige validación de procesos, datos, permisos, inversión y prioridades.</p></div>';
 showInspector(html);
 document.querySelectorAll(".system-leaf").forEach(function(b){b.classList.toggle("leaf-active",b.dataset.system===id)});
}
function closeInspector(){$("inspector").classList.remove("visible");$("inspector").setAttribute("aria-hidden","true")}
function setZoom(z){
 state.zoom=Math.max(.42,Math.min(1.35,Math.round(z*100)/100));
 $("mapStage").style.transform="scale("+state.zoom+")";
 $("mapSizer").style.width=(2130*state.zoom)+"px";
 $("mapSizer").style.height=(1295*state.zoom)+"px";
 $("zoomText").textContent=Math.round(state.zoom*100)+"%";
}
function fit(){
 var view=$("mapScroll"),z=Math.min(.92,Math.max(.42,(view.clientWidth-30)/2130));
 setZoom(z);view.scrollLeft=0;view.scrollTop=0;
}
function setupPan(){
 var el=$("mapScroll"),down=false,x=0,y=0,left=0,top=0;
 el.addEventListener("pointerdown",function(e){if(e.button!==0||e.target.closest("button"))return;down=true;x=e.clientX;y=e.clientY;left=el.scrollLeft;top=el.scrollTop;el.classList.add("dragging");try{el.setPointerCapture(e.pointerId)}catch(e){}});
 el.addEventListener("pointermove",function(e){if(!down)return;el.scrollLeft=left-(e.clientX-x);el.scrollTop=top-(e.clientY-y)});
 function end(){down=false;el.classList.remove("dragging")}el.addEventListener("pointerup",end);el.addEventListener("pointercancel",end);
}
function initMap(){renderMap();renderMapGuide();closeInspector();requestAnimationFrame(fit);setupPan();}
function renderMonths(){
 $("monthTabs").innerHTML=DB.months.map(function(m,i){return '<button type="button" data-month="'+i+'" class="'+(i===state.month?"active":"")+'"><strong>M'+pad(i+1)+'</strong><span>'+escapeHtml(m.title)+'</span></button>'}).join("");
 var m=DB.months[state.month];
 $("monthTitle").textContent="Mes "+(state.month+1)+" · "+m.title;
 $("monthGoal").textContent=m.goal;
 $("monthDeliverable").textContent=m.deliverable;
 $("monthRows").innerHTML=DB.pillars.map(function(p){
  return '<article class="month-row"><div class="month-row-head"><span class="month-row-number">'+pad(p.id)+'</span><div><small>PILAR '+pad(p.id)+'</small><h3>'+escapeHtml(p.full)+'</h3></div></div><ul>'+p.month[state.month].map(function(a){return '<li>'+escapeHtml(a)+'</li>'}).join("")+'</ul><div class="month-row-bottom">'+DB.systems.filter(function(s){return s.p===p.id&&s.months.indexOf(state.month+1)!==-1}).map(function(s){return '<button type="button" data-open-system="'+s.id+'">'+escapeHtml(s.name)+' ↗</button>'}).join("")+'</div></article>';
 }).join("");
 $("monthTabs").querySelectorAll("[data-month]").forEach(function(b){b.addEventListener("click",function(){state.month=Number(b.dataset.month);renderMonths()})});
}
function renderCatalog(){
 var q=$("sysQuery").value.toLowerCase().trim(),filter=$("sysFilter").value;
 var ss=DB.systems.filter(function(s){return (filter==="all"||String(s.p)===filter)&&(!q||(s.name+" "+s.desc+" "+s.how+" "+s.out).toLowerCase().indexOf(q)!==-1)});
 $("sysCount").textContent=ss.length+" sistemas encontrados";
 $("systemGrid").innerHTML=ss.map(function(s){return '<button type="button" class="catalog-card" data-open-system="'+s.id+'"><div class="catalog-number">'+pad(s.p)+' / '+escapeHtml(s.id)+'</div><h3>'+escapeHtml(s.name)+'</h3><p>'+escapeHtml(s.desc)+'</p><div class="catalog-result"><span>RESULTADO BUSCADO</span><strong>'+escapeHtml(s.out)+'</strong></div><div class="catalog-foot">Intervención '+s.months.map(function(n){return "M"+n}).join(" · ")+' <span>↗</span></div></button>'}).join("");
}
function renderOutcomes(){
 $("outcomesGrid").innerHTML=DB.pillars.map(function(p){return '<article class="outcomes-card"><span class="outcomes-number">'+pad(p.id)+'</span><h3>'+escapeHtml(p.full)+'</h3><small>LOGRAREMOS</small>'+p.result.map(function(o){return '<p class="outcome-point"><b>✓</b>'+escapeHtml(o)+'</p>'}).join("")+'<div class="outcomes-kpis"><small>LO MEDIREMOS CON</small><span>'+escapeHtml(p.kpis.join(" · "))+'</span></div></article>'}).join("");
}
function switchView(id){
 state.view=id;document.querySelectorAll("[data-view]").forEach(function(b){b.classList.toggle("active",b.dataset.view===id);b.setAttribute("aria-pressed",b.dataset.view===id?"true":"false")});
 document.querySelectorAll(".view").forEach(function(v){v.hidden=(v.id!=="view-"+id)});
 closeInspector();window.scrollTo({top:0,behavior:"smooth"});if(id==="map")requestAnimationFrame(fit);
}
function exportCsv(){
 var lines=[["Pilar","Sistema","Qué construimos","Funcionamiento","Resultado buscado","Entregable","Indicador","Meses","Dependencias"].join(",")];
 DB.systems.forEach(function(s){var p=DB.pillars[s.p-1],v=[p.full,s.name,s.desc,s.how,s.out,s.deliver,s.metric,s.months.join(" "),s.deps].map(function(s){return '"'+String(s).replace(/"/g,'""')+'"'});lines.push(v.join(","))});
 var blob=new Blob(["\ufeff"+lines.join("\r\n")],{type:"text/csv;charset=utf-8"});
 var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="El-Stand-de-la-Mujer-Sistemas-6-Meses.csv";a.click();setTimeout(function(){URL.revokeObjectURL(a.href)},1500);notify("Inventario de sistemas exportado");
}
function bind(){
 document.querySelectorAll("[data-view]").forEach(function(b){b.addEventListener("click",function(){switchView(b.dataset.view)})});
 $("closeInspector").addEventListener("click",closeInspector);
 $("inspector").addEventListener("click",function(e){var b=e.target.closest("[data-open-system]");if(b)openSystem(b.dataset.openSystem)});
 document.addEventListener("click",function(e){var b=e.target.closest("[data-open-system]");if(b&&(!$("inspector").contains(b)))openSystem(b.dataset.openSystem)});
 document.addEventListener("keydown",function(e){if(e.key==="Escape")closeInspector()});
 $("zoomIn").addEventListener("click",function(){setZoom(state.zoom+.12)});
 $("zoomOut").addEventListener("click",function(){setZoom(state.zoom-.12)});
 $("zoomFit").addEventListener("click",fit);
 $("sysQuery").addEventListener("input",renderCatalog);
 $("sysFilter").addEventListener("change",renderCatalog);
 $("exportCsv").addEventListener("click",exportCsv);
 $("printPage").addEventListener("click",function(){window.print()});
 $("openFirst").addEventListener("click",function(){switchView("map");openSystem("CRM")});
}
initMap();renderMonths();renderCatalog();renderOutcomes();bind();switchView("map");
})();
