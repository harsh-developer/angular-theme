// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { DEFAULT_CONFIG } from "src/default/default";

export const environment = {
  production: false,
  php_api_url: DEFAULT_CONFIG.php_api_url,
  py_api_url: DEFAULT_CONFIG.py_api_url,
  api_url: DEFAULT_CONFIG.api_url,
  appVersion: DEFAULT_CONFIG.appVersion,
  appName: DEFAULT_CONFIG.appName,
  config: DEFAULT_CONFIG,
  cop_upload_url: DEFAULT_CONFIG.cop_upload_url,
  appMode: 'b',
  profile_img_bucket: 'profile_img',
  awsUrl: DEFAULT_CONFIG.upload_url,
  // app_version: require('../../package.json').version,
};
