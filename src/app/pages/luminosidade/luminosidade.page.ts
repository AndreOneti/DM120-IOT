import { DweetService } from 'src/app/services/dweet.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Dweet from 'src/models/Dweet';

@Component({
  selector: 'app-luminosidade',
  templateUrl: './luminosidade.page.html',
  styleUrls: ['./luminosidade.page.scss'],
})
export class LuminosidadePage implements OnInit {

  private isLoading: boolean = true;
  private dataPlotMax: Array<any>;
  private dataPlotMin: Array<any>;
  private dataPlot: Array<any>;
  private dweet: Dweet;
  private time: any;
  options: Object;

  constructor(
    public dweetService: DweetService,
    public router: Router,
  ) {
  }

  ngOnInit() {
    this.time = setInterval(() => { this.getLastDweets() }, 3000);
    this.getLastDweets();
  }

  ngOnDestroy(): void {
    clearInterval(this.time);
  }

  ionViewDidLeave() {
    clearInterval(this.time);
  }

  goBack() {
    this.router.navigate(['home']);
  }

  private getLastDweets() {
    this.dataPlot = [];
    this.dataPlotMax = [];
    this.dataPlotMin = [];
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
      this.dataPlot.push([epoch, _with.content.$luminosidade]);
      this.dataPlotMax.push([epoch, _with.content.$luminosidadeMax]);
      this.dataPlotMin.push([epoch, _with.content.$luminosidadeMin]);
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
            return this.value + "Lux";
          }
        },
      },
      title: { text: 'Luminosidade ' },
      series: [{
        name: 'Luminosidade',
        data: this.dataPlot.reverse(),
        pointInterval: 60 * 60
      }, {
        name: 'Luminosidade Max',
        data: this.dataPlotMax.reverse(),
        pointInterval: 60 * 60
      }, {
        name: 'Luminosidade Min',
        data: this.dataPlotMin.reverse(),
        pointInterval: 60 * 60
      }]
    };
  }
}
