export const DEFAULT_APP_DATA = {
  top: {
    uploadUri: "http://lens.oges.us/uploads/",
    ubase: "http://lens.oges.us/",
    php_api_url: "http://hser.oges.us/api/v1/",
    py_api_url: "http://lens.oges.us/",
  },
  development: {
    uploadUri: "http://lens.oges.us/img/",
    cop_upload_url: "https://hse.cairnindia.com/toplens/",
    ubase: "http://lens.oges.us/",
    php_api_url: "http://ohire.oges.us/api/v1/",
    py_api_url: "http://lens.oges.us/",
  },
  cairn_hse: {
    uploadUri: "https://hse.cairnindia.com/img/",
    cop_upload_url: "https://hse.cairnindia.com/toplens/",
    ubase: "https://hse.cairnindia.com/",
    php_api_url: "https://hse.cairnindia.com/api/v1/",
    py_api_url: "https://hse.cairnindia.com/pyapi/",
  },
  localhost: {
    uploadUri: window.location.protocol + "//" + window.location.hostname.split('.')[0] + window.location.hostname.replace(window.location.hostname.split('.')[0], "") + ":5000/uploads/",
    ubase: window.location.protocol + "//" + window.location.hostname.split('.')[0] + window.location.hostname.replace(window.location.hostname.split('.')[0], "") + ":5000/"
  },
  ogesone: {
    uploadUri: window.location.protocol + "//" + window.location.host + "/img/",
    cop_upload_url: window.location.protocol + "//" + window.location.host + "/toplens/",
    ubase: window.location.protocol + "//" + window.location.host + "/",
    php_api_url: window.location.protocol + "//" + window.location.host + "/api/v1/",
    py_api_url: window.location.protocol + "//" + window.location.host + "/pyapi/",
  },

};
