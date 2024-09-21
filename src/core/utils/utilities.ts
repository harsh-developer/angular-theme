import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.prod";
declare var google: any;

@Injectable()
export class Utilities {
  constructor(private http: HttpClient) { }

  getRandomInt(max: any) {
    return Math.floor(Math.random() * max);
  }

  base64_decode(encodedData: any) {
    // eslint-disable-line camelcase
    // tslint:disable-next-line:prefer-const
    var b64 =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1;
    var o2;
    var o3;
    var h1;
    var h2;
    var h3;
    var h4;
    var bits;
    var i = 0;
    var ac = 0;
    var dec = "";
    var tmpArr = [];

    if (!encodedData) {
      return encodedData;
    }

    encodedData += "";

    do {
      // unpack four hexets into three octets using index points in b64
      h1 = b64.indexOf(encodedData.charAt(i++));
      h2 = b64.indexOf(encodedData.charAt(i++));
      h3 = b64.indexOf(encodedData.charAt(i++));
      h4 = b64.indexOf(encodedData.charAt(i++));

      bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4;

      o1 = (bits >> 16) & 0xff;
      o2 = (bits >> 8) & 0xff;
      o3 = bits & 0xff;

      if (h3 === 64) {
        tmpArr[ac++] = String.fromCharCode(o1);
      } else if (h4 === 64) {
        tmpArr[ac++] = String.fromCharCode(o1, o2);
      } else {
        tmpArr[ac++] = String.fromCharCode(o1, o2, o3);
      }
    } while (i < encodedData.length);

    dec = tmpArr.join("");

    return decodeURIComponent(escape(dec.replace(/\0+$/, "")));
  }

  replaceSpecialCharacters(str: string, replacement: any) {
    return str && str.length
      ? str.replace(/[^a-zA-Z0-9]/g, replacement).toLowerCase()
      : str;
  }

  dataURItoBlob(dataURI: any) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var binary = atob(dataURI.split(",")[1]);
    var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: mimeString });
  }

  stringTruncate(input: any, truncateLength: any) {
    if (input.length > truncateLength)
      return input.substring(0, truncateLength) + "...";
    else return input;
  }

  convertNumberInThreeDigit(n: any, length: any) {
    var len = length - ("" + n).length;
    return (len > 0 ? new Array(++len).join("0") : "") + n;
  }

  getRandomColor() {
    var letters = "012345".split("");
    var color = "#";
    color += letters[Math.round(Math.random() * 5)];
    letters = "0123456789ABCDEF".split("");
    for (var i = 0; i < 5; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }

  reindexArray(array: any) {
    return array.filter(function (val: any) {
      return val;
    });
  }

  similarity(s1: any, s2: any) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (
      (longerLength - this.editDistance(longer, shorter)) /
      parseFloat(longerLength)
    );
  }

  editDistance(s1: any, s2: any) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0) costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

  getGraphsColorCodes() {
    return [
      "#f3993a",
      "#4f971d",
      "#9c4899",
      "#3799c6",
      "#dd4877",
      "#316395",
      "#16A085",
      "#F4D03F",
      "#1D8348",
      "#943126",
      "#f3993a",
      "#4f971d",
      "#9c4899",
      "#3799c6",
      "#dd4877",
      "#316395",
      "#16A085",
      "#F4D03F",
      "#1D8348",
      "#943126",
    ];
  }

  // dateInTwoDigit(date) {
  //   var d = new Date(date);
  //   date = [
  //     d.getFullYear(),
  //     ("0" + (d.getMonth() + 1)).slice(-2),
  //     ("0" + d.getDate()).slice(-2),
  //   ].join("-");
  //   return date;
  // }

  // preparePCOPName(data) {
  //   let id = "000000000" + data.id;
  //   let year = data.hasOwnProperty("year_created")
  //     ? data.year_created
  //     : data.created.substring(0, 4);
  //   let n = id.substr(id.length - 6);
  //   let cop_name = "p-COP-" + year + "-" + n;
  //   return cop_name;
  // }

  // isEven(n) {
  //   return n % 2 == 0;
  // }

  // isOdd(n) {
  //   return Math.abs(n % 2) == 1;
  // }

  // getCOPSDefaultDates() {
  //   return {
  //     setf: "01-01-2019",
  //     sett: "12-31-2021",
  //     srcf: "2019-01-01",
  //     srct: "2021-12-31",
  //   };
  // }

  // getECOPNLPDefaultDates() {
  //   return {
  //     setf: "01-01-2021",
  //     sett: "12-31-2021",
  //     srcf: "2021-01-01",
  //     srct: "2021-12-31",
  //   };
  // }

  // getConfigJson(): Observable<any> {
  //   var milliseconds = new Date().getTime();
  //   return this.http
  //     .get(
  //       environment.config.frontEndUrl +
  //       "/assets/config/config.json?ms=" +
  //       milliseconds
  //     )
  //     .map((res: any) => res.json());
  // }

  // isNumeric(n: any) {
  //   return !isNaN(parseFloat(n)) && isFinite(n);
  // }

  // unique(data) {
  //   let arr = [];
  //   for (let i = 0; i < data.length; i++) {
  //     if (!arr.includes(data[i])) {
  //       arr.push(data[i]);
  //     }
  //   }
  //   return arr;
  // }

  // downloadExcelFile(data: any, filename) {
  //   const blob = new Blob([data], { type: "application/vnd.ms-excel" });
  //   const link = document.createElement("a");
  //   link.href = window.URL.createObjectURL(blob);
  //   link.download = filename;
  //   document.body.appendChild(link);
  //   link.click();
  // }

  // prepareExcel(data, fields_mapping = null) {
  //   if (fields_mapping == null) {
  //     fields_mapping = { "Sr. No": "sr_no", Label: "label", Count: "value" };
  //   }
  //   let fields = Object.keys(fields_mapping);
  //   let excelData = fields.join("\t") + "\n";
  //   let sr = 0;
  //   for (let i = 0; i < data.length; i++) {
  //     sr++;
  //     let rowData = [sr];
  //     for (const key in fields_mapping) {
  //       let val = fields_mapping[key];
  //       if (val != "sr_no") {
  //         rowData.push(data[i][val]);
  //       }
  //     }
  //     // rowData = this.filterData(rowData);
  //     excelData += rowData.join("\t") + "\n";
  //   }
  //   return excelData;
  // }

  // filterExcelDataArr(str) {
  //   //not used
  //   str = str.replace("/\t/", "\\t");
  //   str = str.replace("/\r?\n/", "\\n");
  //   if (str.indexOf('"')) str = '"' + str.replace('"', '""') + '"';
  //   return str;
  // }

  // gChartaddPercentageInLegends(data) {
  //   let gdata = new google.visualization.arrayToDataTable(data);
  //   var count = gdata.getNumberOfRows();
  //   var total = 0;
  //   for (var i = 0; i < count; i++) {
  //     total = total + gdata.getValue(i, 1);
  //   }
  //   for (var i = 0; i < count; i++) {
  //     var label = gdata.getValue(i, 0);
  //     var val = gdata.getValue(i, 1);
  //     var percentual = ((val / total) * 100).toFixed(1);
  //     gdata.setFormattedValue(i, 0, label + " (" + percentual + "%)");
  //   }
  //   return gdata;
  // }

  // gChartaddCustomTooltip(graph_data, limit) {
  //   var data = [];
  //   var totalCount = 0;
  //   var othersData = [];
  //   var othervalue = null;
  //   graph_data.map((val) => {
  //     totalCount += parseInt(val.value);
  //   });
  //   data.push([
  //     "Observation",
  //     "Count",
  //     { type: "string", role: "tooltip", p: { html: true } },
  //   ]);
  //   for (var i = 0; i < graph_data.length; i++) {
  //     if (i <= limit) {
  //       data.push([
  //         graph_data[i].label,
  //         parseInt(graph_data[i].value),
  //         this.createCustomTooltip(
  //           graph_data[i].label,
  //           parseInt(graph_data[i].value),
  //           totalCount
  //         ),
  //       ]);
  //     } else {
  //       othervalue += parseInt(graph_data[i].value);
  //       othersData.push([graph_data[i].label, parseInt(graph_data[i].value)]);
  //     }
  //   }
  //   if (othervalue) {
  //     data.push([
  //       "others 2",
  //       othervalue,
  //       this.othersTooltip(othersData, totalCount),
  //     ]);
  //   }
  //   let gdata = this.gChartaddPercentageInLegends(data);
  //   return gdata;
  // }

  // createCustomTooltip(label, value, totalCount) {
  //   return (
  //     '<div style="padding:8px;  color:black; display: flex; flex-direction:column; justify-content:space-around;   ">' +
  //     `<span style ='font-size:1.3rem;  min-width:max-content; font-weight:500; line-height: normal;'>${label} </span>` +
  //     `<b>${value} (${((value / totalCount) * 100).toFixed(1)}%)</b>` +
  //     "</div>"
  //   );
  // }

  // othersTooltip(other, totalCount) {
  //   return (
  //     '<div style="padding:5px -10px; color:black;">' +
  //     "<ol style ='font-weight:600; padding:10px 0px 10px 25px;'>" +
  //     other
  //       .map(function (val) {
  //         return (
  //           "<li >" +
  //           "<span style ='font-size:1.3rem; font-weight:500;'>" +
  //           val[0] +
  //           "</span>" +
  //           " " +
  //           `<b>${val[1]}</b>` +
  //           " (" +
  //           `<b>${((val[1] / totalCount) * 100).toFixed(1)}%</b>` +
  //           ")" +
  //           "</li>"
  //         );
  //       })
  //       .join("") +
  //     "</ol>" +
  //     "</div>"
  //   );
  // }
}
