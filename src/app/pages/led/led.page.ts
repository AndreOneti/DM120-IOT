import { DweetService } from 'src/app/services/dweet.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Dweet from 'src/models/Dweet';

@Component({
  selector: 'app-led',
  templateUrl: './led.page.html',
  styleUrls: ['./led.page.scss'],
})
export class LedPage implements OnInit {

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

  getColor(): string {
    if (
      this.dweet.with[0].content.$color === "Vermelha"
      || this.dweet.with[0].content.$color === "red"
    ) return "color: red;";
    if (
      this.dweet.with[0].content.$color === "Verde"
      || this.dweet.with[0].content.$color === "green"
    ) return "color: green;";
    if (
      this.dweet.with[0].content.$color === "Azul"
      || this.dweet.with[0].content.$color === "blue"
    ) return "color: blue;";
  }
}
