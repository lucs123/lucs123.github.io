const languageSelector = document.getElementById('languageSelector');

i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      crossDomain: true
    }
    }
  ).then(()=>{
    const lngList = document.getElementById('languageSelector').children 
    for(let element of lngList){
        if(element.text===i18next.language){
            element.style['font-weight'] = 'bold'
        }
    }
  });

languageSelector.addEventListener('click', (event)=>{
    const lng = event.target.text;
    const lngList = event.target.parentElement.children
    for(let element of lngList){
        element.style['color'] = 'var(--text-color)'
        element.style['font-weight'] = 'lighter'
    }
    event.target.style['font-weight'] = 'bold'
    i18next.changeLanguage(lng);
}
)

const presentationWrapper = document.getElementById('presentationText') 
const typewriter = new Typewriter(presentationWrapper, {
    loop: false,
    delay: 20
});

function type(string){
    if(presentationWrapper.textContent){
        typewriter.deleteAll(15)
    }
    typewriter.typeString(string).start()
}

function updateContent() {
  document.getElementById('contactBtn').innerHTML = i18next.t('headerLinks.contact');
  document.getElementById('contactTitle').innerHTML = i18next.t('headerLinks.contact');
  document.getElementById('greetingWrapper').innerHTML = i18next.t('greeting');
  type(i18next.t('presentationText'))

  document.getElementById('project1Link').innerHTML = i18next.t('projectLinks.project1');
  document.getElementById('project2Link').innerHTML = i18next.t('projectLinks.project2');
  document.getElementById('project3Link').innerHTML = i18next.t('projectLinks.project3');

  document.getElementById('project1Presentation').innerHTML = i18next.t('projectPresentation1');
  document.getElementById('project2Presentation').innerHTML = i18next.t('projectPresentation2');
  document.getElementById('project3Presentation').innerHTML = i18next.t('projectPresentation3');

  document.getElementById('project3Title').innerHTML = i18next.t('project3Title');
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});

const contactBtn = document.querySelector("#contactBtn") 
const contactBg = document.querySelector("#contact-bg")
const closeBtn = document.querySelector('.close')

contactBtn.addEventListener('click',()=>{
    contactBg.style['visibility'] = 'visible' 
})

closeBtn.addEventListener('click',()=>{
    contactBg.style['visibility'] = 'hidden' 
})

if (window.matchMedia('(min-width: 450px)').matches){
  console.log(window.matchMedia('(min-width: 450px)'))
  ScrollReveal().reveal('.s2-title', { delay: 500 });
  ScrollReveal().reveal('.container', { delay: 800 });
  ScrollReveal().reveal('.project3-container', { delay: 800 });
}
