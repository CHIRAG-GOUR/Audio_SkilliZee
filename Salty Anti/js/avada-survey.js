(function() {
  // const BASE_URL = 'https://ag-survey-staging-1.firebaseapp.com/scripttag';
  // const BASE_URL = 'https://localhost:3001/scripttag';
  const BASE_URL = 'https://survey-cdn-2om.pages.dev/scripttag';

  const scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.async = !0;
  scriptElement.src = BASE_URL + `/avada-survey-main.min.js?v=${new Date().getTime()}`;
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(scriptElement, firstScript);
})();
