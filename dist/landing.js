const requestedLanguage=new URLSearchParams(location.search).get('lang');if(requestedLanguage==='ne'||requestedLanguage==='en')document.documentElement.lang=requestedLanguage;
document.getElementById('guide-form')?.addEventListener('submit',e=>e.preventDefault());
const switcher=document.getElementById('site-language');
function updateLanguage(){const l=document.documentElement.lang;switcher.textContent=l==='ne'?'English':'नेपाली';document.querySelectorAll('option[data-en]').forEach(o=>o.textContent=o.dataset[l]);document.querySelectorAll('a[href^="patient-guide.html"]').forEach(a=>a.href='patient-guide.html?lang='+l);}
switcher?.addEventListener('click',()=>{document.documentElement.lang=document.documentElement.lang==='ne'?'en':'ne';updateLanguage();});updateLanguage();
