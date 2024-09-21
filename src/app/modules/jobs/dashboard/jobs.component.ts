import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';
import { ApiService } from 'src/core';
// import { ApiService } from 'src/core/services/api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  constructor(
    private http: ApiService,
  ) {
    this.getMetadataTabsDetails()
  }

  ngOnInit(): void { }
  public getMetadataTabsDetails() {
    this.http.makePostRequest("getjobs", { "data": { "start": 0, "jobid": 0, "count": 10, "typeofjob": "activejobs", "srchobj": {}, "filterobj": {} }, "vid": "63c7eea139504" }).then((resp: any) => {
      if (!resp.error) {
        console.log(resp)
      }
    });
  }

  // check() {
  //   this.http.post('http://ohire.oges.us/api/v1/getjobs', { "data": { "start": 0, "jobid": 0, "count": 10, "typeofjob": "activejobs", "srchobj": {}, "filterobj": {} }, "vid": "63c7eea139504" }).subscribe(data => {
  //     console.log(data);
  //   });
  // }
}
