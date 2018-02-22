import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormateToUsnumber]'
})
export class FormateToUsnumberDirective {

  constructor( private el:ElementRef) { }
  @HostListener('blur') onblur(){
      let phNum:string = this.el.nativeElement.value;
      let temp1 = phNum.substr(0,3);
      console.log(temp1);
      let temp2 = phNum.substr(3,3);
      console.log(temp2);
      let temp3 = phNum.substr(6,3);
      console.log(temp3);
      let formatedNum = '(' + temp1 + ')' + temp2 + '-' + temp3;
      this.el.nativeElement.value = formatedNum;
  }

}
