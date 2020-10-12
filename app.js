i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    // ns: 'translation',
    // defaultNS: 'special',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      crossDomain: true
    }
    }
  //   , function(err, t) {
  //   // init set content
  //   updateContent();
  // }
  );

const presentationWrapper = document.getElementById('presentationText') 
const typewriter = new Typewriter(presentationWrapper, {
    loop: false,
    delay: 20
});
let count = 0;
function updateContent() {
  document.getElementById('contactBtn').innerHTML = i18next.t('headerLinks.contact');
  document.getElementById('greetingWrapper').innerHTML = i18next.t('greeting');

  document.getElementById('project1Link').innerHTML = i18next.t('projectLinks.project1');
  document.getElementById('project2Link').innerHTML = i18next.t('projectLinks.project2');
  document.getElementById('project3Link').innerHTML = i18next.t('projectLinks.project3');
  type(i18next.t('presentationText'))

  document.getElementById('project1Presentation').innerHTML = i18next.t('projectPresentation1');
  document.getElementById('project2Presentation').innerHTML = i18next.t('projectPresentation2');
  document.getElementById('project3Presentation').innerHTML = i18next.t('projectPresentation3');

  document.getElementById('project3Title').innerHTML = i18next.t('project3Title');

  // document.getElementById('info').innerHTML = `detected user language: "${i18next.language}"  --> loaded languages: "${i18next.languages.join(', ')}"`;
}

function type(string){
    typewriter.typeString(string).start()
}
// function changeLng(lng) {
//   i18next.changeLanguage(lng);
// }
//
i18next.on('languageChanged', () => {
  updateContent();
});


const contactBtn = document.querySelector("#contactBtn") 
const contactBg = document.querySelector("#contact-bg")
const closeBtn = document.querySelector('.close')

// console.log(contactBg)
contactBtn.addEventListener('click',()=>{
    contactBg.style['visibility'] = 'visible' 
})

closeBtn.addEventListener('click',()=>{
    contactBg.style['visibility'] = 'hidden' 
})

