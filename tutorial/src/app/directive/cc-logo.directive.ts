import {Directive, HostBinding, Input} from '@angular/core';

enum CardType { VISA = 'visa', MASTERCARD = 'master', AMERICAN_EXPRESS = 'amex', UNKNOWN = 'unknown'}


@Directive({
  selector: '[ccLogo]'
})
export class CcLogoDirective {

  @HostBinding('src')
  imageSource;

  @Input()
  cardNumber: string

  ngOnChanges() {
    this.imageSource = 'assets/card-types/' + this.getCardTypeFromNumber() + '.png';
  }

  getCardTypeFromNumber(): CardType {

    if (this.cardNumber) {
      if (this.cardNumber.startsWith('37')) {
        return CardType.AMERICAN_EXPRESS;
      } else if (this.cardNumber.startsWith('4')) {
        return CardType.VISA;
      } else if (this.cardNumber.startsWith('5')) {
        return CardType.MASTERCARD;
      }
    }
    return CardType.UNKNOWN;
  }

}
