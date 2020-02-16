import { Directive,Input, HostBinding } from '@angular/core';

enum CardType { VISA = 'visa', MASTERCARD = 'master', AMERICAN_EXPRESS = 'amex', UNKOWN = 'unknown'}

@Directive({
  selector: '[ccLogo]'
})

export class CreditCardLogoDirective {

  @Input() cardNumber: string;

  @HostBinding('src')
    imageSource;

  ngOnChange(){
      this.imageSource = 'assets/img/' + this.getCardTypeFromNumber() ;
  }

  getCardTypeFromNumber(): CardType {
      if (this.cardNumber){
          if(this.cardNumber.startsWith('37')){
              return CardType.AMERICAN_EXPRESS;
              }
          else if (this.cardNumber.startsWith('4')) {
              return CardType.AMERICAN_EXPRESS;
              }
          else if (this.cardNumber.startsWith('5')) {
              return CardType.MASTERCARD;
              }
      }

  }
}
