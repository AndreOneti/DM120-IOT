import { DweetService } from 'src/app/services/dweet.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Dweet from 'src/models/Dweet';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.page.html',
  styleUrls: ['./temperature.page.scss'],
})
export class TemperaturePage implements OnInit, OnDestroy {

  private isLoading: boolean = true;
  private dataPlot: Array<any>;
  private dweet: Dweet;
  private time: any;
  options: Object;

  constructor(
    public dweetService: DweetService,
    public router: Router,
  ) {
    this.time = setInterval(() => { this.getLastDweets() }, 3000);
  }

  ngOnInit() {
    this.getLastDweets();
  }

  ngOnDestroy(): void {
    clearInterval(this.time);
  }

  goBack() {
    this.router.navigate(['home']);
  }

  private getLastDweets() {
    this.dataPlot = []
    this.dweetService
      .loadLastDweets()
      .subscribe(
        data => this.preencherDweet(data),
        err => console.log("Erro: ", err),
        () => this.isLoading = false
      )
  }

  private preencherDweet(data: any) {
    this.dweet = this.dweetService.preencherDweet(data);
    this.loadDataForPlot(this.dweet);
    this.plotChart();
  }

  private loadDataForPlot(dweet: Dweet) {
    for (let _with of dweet.with) {
      let epoch = new Date(_with.created).getTime();
      this.dataPlot.push([epoch, _with.content.$temperatura]);
    }
  }

  private plotChart() {
    this.options = {
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        labels: {
          formatter: function () {
            return this.value + "ºC";
          }
        },
      },
      title: { text: 'Temperatura ' },
      series: [{
        name: 'temperatura',
        data: this.dataPlot.reverse(),
        pointInterval: 60 * 60
      }]
    };
  }
}
