import { Directive, ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  @Input('color') color='pink'
  @Input('color2') color2='white'

  constructor(private el:ElementRef) { }
@HostListener('mouseenter') onMouseEnter(){
  this.el.nativeElement.style.backgroundColor=this.color;
}
@HostListener('mouseleave') onMouseLeave(){
  this.el.nativeElement.style.backgroundColor=this.color2;
}
}