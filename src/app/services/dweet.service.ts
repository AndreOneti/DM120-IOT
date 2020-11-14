import { DweetSettingsEnum } from 'src/enum/DweetSettingsEnum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Content from 'src/models/Content';
import Dweet from 'src/models/Dweet';
import With from 'src/models/With';

@Injectable({
  providedIn: 'root'
})
export class DweetService {

  private dweetioApiUrl = DweetSettingsEnum.DWEET_URL_GET_ALL;
  private thingName = DweetSettingsEnum.DWEET_THING_NAME;

  constructor(
    private http: HttpClient,
  ) { }

  loadLastDweets() {
    let url: string = this.dweetioApiUrl + this.thingName.toString();
    return this.http.get(url);
  }

  private formatDate(date: any): string {
    let originalDate: string = date;
    var dateParse = originalDate.slice(0, 10);
    let [year, month, day] = dateParse.split("-");
    return `${day}/${month}/${year}`;
  }

  private formatTime(date: any): string {
    let originalDate: string = date;
    var timeParse = originalDate.slice(11, 19);
    return timeParse;
  }

  preencherDweet(data: DweetData): Dweet {
    let _withs: Array<With>;
    let _time: string;
    let _date: string;
    let dweet: Dweet;

    _withs = new Array<With>();

    for (let _with of data.with) {
      let content: Content;
      content = new Content({
        temperatura: _with.content.temperatura,
        temperaturaMax: _with.content.tempMax,
        temperaturaMin: _with.content.tempMin,

        luminosidade: _with.content.luminosidade,
        luminosidadeMax: _with.content.lumMax,
        luminosidadeMin: _with.content.lumMin,

        umidade: _with.content.umidade,
        umidadeMax: _with.content.umidMax,
        umidadeMin: _with.content.umidMin,

        color: _with.content.current_color,
        buzzer: _with.content.status_buzzer,
      });
      _date = this.formatDate(_with.created);
      _time = this.formatTime(_with.created);
      let tempWith: With;
      tempWith = new With(_with.thing, _with.created, content, _date, _time);
      _withs.push(tempWith);
    }
    dweet = new Dweet(data.this, data.by, data.the, _withs);
    return dweet;
  }
}

interface DweetData {
  "this": string,
  "the": string,
  "by": string,
  "with": {
    "created": string,
    "thing": string,
    "content": {
      "current_color": string,
      "status_buzzer": any,
      "luminosidade": any,
      "temperatura": any,
      "tempMax": any,
      "tempMin": any,
      "umidade": any,
      "umidMax": any,
      "umidMin": any,
      "lumMax": any,
      "lumMin": any,
    }
  }[]
}
