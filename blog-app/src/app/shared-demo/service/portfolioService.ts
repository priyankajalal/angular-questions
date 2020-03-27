import { Injectable } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";
import { PortfolioEvent } from "../models/portfolioEvent";

@Injectable()
export class PortfolioService {
  private subject$ = new Subject();

  emit(event: PortfolioEvent) {
    this.subject$.next(event);
  }

  on(eventName: string, action: any): Subscription {
    return this.subject$
      .pipe(
        filter((e: PortfolioEvent) => e.name === eventName),
        map((e: PortfolioEvent) => e.value)
      )
      .subscribe(action);
  }
  constructor() {}
}
