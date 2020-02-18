import {Component, OnInit} from '@angular/core';
import {StockService} from "../../services/stockService";
import {filter, debounceTime, map} from 'rxjs/operators';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Stock} from "../../models/Stocks";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  searchInput: FormControl = new FormControl('');
  timeoutId;
  stockDetails: Stock

  constructor(private stockService: StockService) {


    this.searchInput
      .valueChanges.pipe(
      //map(a => a + 'vinod'),
      debounceTime(500)
    )
      .subscribe(ticker => this.stockService.getStocks(ticker).subscribe(stock => this.stockDetails = stock))
  }


  inputChanged(x) {
    console.log(x)
  }

  ngOnInit() {
  }

  getNumbers(event) {
    console.log(event.target.value);
    this.stockService.getNumbers().pipe(
      filter(x => x >= 27)
    )
      .subscribe(res => console.log(res))

  }

  getStockPrice(event) {
    console.log(event.target.value);
    this.stockService.getStocks(event.target.value)
    //.subscribe(res => console.log(res))
  }

  testTimeOut(event) {
    console.log(event.target.value)
    let newSymbol = event.target.value
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }

    //setTimeout(this.timeOutCheck, 5000)
    this.timeoutId = setTimeout(this.timeOutCheck, 5000)
  }

  timeOutCheck() {
    console.log("vinod i started after 5 sec ")
  }

}
