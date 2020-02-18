import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {Emp} from '../models/Emp'
import {Stock} from "../models/Stocks";


@Injectable()
export class StockService {
  constructor(private http: HttpClient) {
  }

  stocks = [
    {
      symbol: 'A',
      name: 'Aligent Tech',
      price: 29
    },
    {
      symbol: 'AA',
      name: 'AA Tec',
      price: 29
    },
    {
      symbol: 'AAP',
      name: 'AAP  Tech',
      price: 29
    },
    {
      symbol: 'AAPL',
      name: 'Apple Inc',
      price: 29
    }
  ]

  public getNumbers(): Observable<number> {
    return from([1, 2, 3, 4, 88, 6])
      .pipe(
        map(a => a * 9)
      )
  }

  public getStocks(symbol: string): Observable<Stock> {
    const arraySource = from(this.stocks);
    return arraySource.pipe(
      map(jsonRow => Object.assign({}, jsonRow))
      , filter(stock => stock.symbol == symbol.toUpperCase())
    )
  }


}
