import { DEFAULT_APP_DATA } from "./app-data";

let platform = 'development';
let APP_DATA = (DEFAULT_APP_DATA as any)[platform];

export const DEFAULT_CONFIG = {
  appVersion: 2,
  frontEndUrl: window.location.protocol + '//' + window.location.host + '/',
  api_url: APP_DATA.ubase,
  php_api_url: APP_DATA.php_api_url,
  py_api_url: APP_DATA.py_api_url,
  upload_url: APP_DATA.uploadUri,
  cop_upload_url: APP_DATA.cop_upload_url,
  appName: 'OSPL',
  enterpriseInfo: '',
  header: {
    brand: {
      logo: '/assets/default/logo.svg',
      name: 'OSPL',
      enpLogo: '',
      height: '42',
      width: '140'
    },
  },
  ...DEFAULT_APP_DATA
};
