import { Component } from '@angular/core';

@Component({
  selector: 'pipes-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  greeting: Promise<string>|null = null;
  arrived: boolean = false;

  private resolve: Function|null = null;

  constructor() {
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }
// para usar en el CurrencyPipe
  a: number = 0.259;
  b: number = 1.3495;

//Para usar en el DatePipe
 fechaHora = Date.now();
//DecimalPipe
pi: number = 3.14159265359;
//I18nPluralPipe
messages: any[] = ['a','b','c'];
messageMapping:{[k: string]: string} = {'=0': 'No messages.', '=1': 'One message.', 'other': '# messages.'};

//I18nSelectPipe
gender: string = 'female';
inviteMap: any = {
  'male': 'Invite him.',
  'female': 'Invite her.',
  'other': 'Invite them.'};

//JsonPipe
nombre: string= 'Aaron';

//KeyValue
object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
map = new Map([[2, 'foo'], [1, 'bar']]);

//LowerCasePipe
nombre1:string = 'AARON';

//UpperCasePipe
nombre2:string = 'bianca';

//TitleCasePipe
texto:string = 'sPAce exPlARATIon TECHnoLOGIes cORp., cONOCIDa cOMo sPACEX';

//PercentPipe
c: number = 0.2594;
d: number = 0.0523;

//SlicePipe
collection: string[] = ['a', 'b', 'c', 'd', 'e','f','g'];
}
