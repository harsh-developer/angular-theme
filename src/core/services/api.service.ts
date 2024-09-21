import { map } from 'rxjs/operators';

import { throwError } from "rxjs";
import { Injectable } from "@angular/core";

// import { AuthService } from "./auth.service";
// import { LoaderService } from "./loader-service";
import { Utilities } from '../utils/utilities';
import { RequestOptions } from '@angular/http';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
export class RequestData {
  constructor(public data: any, public token?: string) { }
}
@Injectable()
export class ApiService {
  private sendData: RequestData = new RequestData({}, "");
  options: RequestOptions = new RequestOptions;
  constructor(

    private http: HttpClient,
    private utils: Utilities,
    // private _auth: AuthService,
    // private _loaderSerive: LoaderService
  ) { }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  makePostRequest(method: string, params: any) {
    return new Promise((resolve, reject) => {
      const headers: any = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("source", "app");
      params = params || {};
      this.sendData.data = params;
      // const jwToken = this._auth.getToken();
      const logid: any = environment.hasOwnProperty('log_id');

      // if (logid) {
      //   this.sendData['log_id'] = environment['log_id'];
      // }
      // if (jwToken) {
      //   this.sendData.token = jwToken;
      // }
      console.log(environment)
      this.http
        .post(environment.php_api_url + method, JSON.stringify(this.sendData), {}).pipe(
          map((res: any) => res.json()))
        .subscribe(
          (data: any) => {
            var jsondata = this.utils.base64_decode(data.response);
            resolve(JSON.parse(jsondata));
          },
          (err: any) => {
            if (err.status == 401) {
              resolve(err);
              // this._loaderSerive.hide();
              // this._auth.destroyToken();
              window.location.href = "/login";
            } else if ((err.status == 500 || err.status == 501)) {
              this.errorLog(err);
              resolve({ error: true, msg: 'Internal Server Error' });
            } else if (err.status === 503) {
              this.errorLog(err);
              resolve({ error: true, msg: 'Server Maintenance error' });
            } else if (err.status) {
              this.errorLog(err);
              resolve({ error: true, msg: 'Unexpected Error' });
            } else {
              this.errorLog(err);
              resolve({ error: true, msg: 'Internet Connection Lost', status: 400 });
            }
          }
        );
    });
  }

  makePYPostRequest(method: string, params: any) {
    return new Promise((resolve, reject) => {
      const headers: any = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("source", "app");
      params = params || {};
      this.sendData.data = params;
      // const jwToken = this._auth.getToken();
      // if (jwToken) {
      //   this.sendData.data['token'] = jwToken;
      // }
      this.http
        .post(environment.py_api_url + method, JSON.stringify(this.sendData), { headers: headers }).pipe(
          map((res: any) => res.json()))
        .subscribe(
          (data: any) => {
            resolve(data.response);
          },
          (err: any) => {
            if (err.status === 401) {
              // this._auth.destroyToken();
              window.location.href = "/login?returnUrl=" + window.location.pathname; //unauth redirect to login
            } else {
              reject(err);
            }
          }
        );
    });
  }

  postWithEndPoint(api_url: string, method: string, params: any) {
    return new Promise((resolve, reject) => {
      const headers: any = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("source", "app");
      params = params || {};
      this.sendData.data = params;
      // const jwToken = this._auth.getToken();
      const logid: any = environment.hasOwnProperty('log_id');

      // if (logid) {
      //   this.sendData['log_id'] = environment['log_id'];
      // }
      // if (jwToken) {
      //   // this.sendData.token = jwToken;
      // }
      this.http
        .post(api_url + method, JSON.stringify(this.sendData), {}).pipe(
          map((res: any) => res.json()))
        .subscribe(
          (data: any) => {
            var jsondata = this.utils.base64_decode(data.response);
            resolve(JSON.parse(jsondata));
          },
          (err: any) => {
            if (err.status == 401) {
              resolve(err);
              // this._loaderSerive.hide();
              // this._auth.destroyToken();
              window.location.href = "/login";
            } else if ((err.status == 500 || err.status == 501)) {
              this.errorLog(err);
              resolve({ error: true, message: 'Internal Server Error' });
            } else if (err.status === 503) {
              this.errorLog(err);
              resolve({ error: true, message: 'Server Maintenance error' });
            } else if (err.status) {
              this.errorLog(err);
              resolve({ error: true, message: 'Unexpected Error' });
            } else {
              this.errorLog(err);
              resolve({ error: true, message: 'Internet Connection Lost or VPN Not Connected', status: 400 });
            }
          }
        );
    });
  }

  makeGetRequest(method: string, rparams: any) {
    return new Promise((resolve, reject) => {
      const headers: any = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("source", "app");
      rparams = rparams || {};
      this.http
        .get(environment.php_api_url + method, { params: rparams }).pipe(
          map((res: any) => res.json()))
        .subscribe(
          (data: any) => {
            var jsondata = this.utils.base64_decode(data.response);
            resolve(JSON.parse(jsondata));
          },
          (err: any) => {
            reject(err);
          }
        );
    });
  }

  errorLog(data: any) {
    // const jwToken = this._auth.getToken();
    // if (jwToken) {
    //   this.makePostErrorRequest('saveErrorLog', { data: data });
    // }
  }

}
