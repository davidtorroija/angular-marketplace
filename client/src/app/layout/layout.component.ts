import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  start = false

  constructor() { }

  public currencies = ['USD', 'EUR'];
  public currency: any;

  public flags = [
    { name:'English', image: 'assets/images/flags/gb.svg' },
    { name:'German', image: 'assets/images/flags/de.svg' },
    { name:'French', image: 'assets/images/flags/fr.svg' },
    { name:'Russian', image: 'assets/images/flags/ru.svg' },
    { name:'Turkish', image: 'assets/images/flags/tr.svg' }
  ]
  public flag:any;

  toggle() {
    this.start = !this.start
  }


  ngOnInit(): void {
    this.currency = this.currencies[0];
    this.flag = this.flags[0];

  }
  public changeLang(flag: any){
    this.flag = flag;
  }

  public changeCurrency(currency: string) {
    this.currency = currency
  }
}
