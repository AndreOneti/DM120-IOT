import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DweetService } from 'src/app/services/dweet.service';
import Dweet from 'src/models/Dweet';

@Component({
  selector: 'app-buzzer',
  templateUrl: './buzzer.page.html',
  styleUrls: ['./buzzer.page.scss'],
})
export class BuzzerPage implements OnInit, OnDestroy {

  private isLoading: boolean = true;
  private dweet: Dweet;
  private time: any;
  options: Object;

  constructor(
    public dweetService: DweetService,
    public router: Router,
  ) { }

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
  }

  getColor() {
    return this.dweet.with[0].content.$buzzer == "0"
      ? "color: red;"
      : "color: green;"
  }
}
