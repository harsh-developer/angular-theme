import { DEFAULT_CONFIG } from "src/default/default";

export const environment = {
  production: true,
  php_api_url: DEFAULT_CONFIG.php_api_url,
  py_api_url: DEFAULT_CONFIG.py_api_url,
  api_url: DEFAULT_CONFIG.api_url,
  appName: DEFAULT_CONFIG.appName,
  cop_upload_url: DEFAULT_CONFIG.cop_upload_url,
  appVersion: 2,
  config: DEFAULT_CONFIG,
  appMode: 'p',
  profile_img_bucket: 'cairn_profile_img',
  awsUrl: DEFAULT_CONFIG.upload_url,
  // app_version: require('../../package.json').version
};
