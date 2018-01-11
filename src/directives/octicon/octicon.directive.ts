import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import * as octicons from 'octicons';

@Directive({
  selector: '[octicon]'
})
export class OcticonDirective implements OnInit {

  @Input() octicon: string;
  @Input() color: string;
  @Input() width: number;

  constructor(private elRef:ElementRef, private rdrr:Renderer2) { }

  ngOnInit():void {
    const el = this.elRef.nativeElement;
    el.innerHTML = octicons[this.octicon].toSVG();

    const icon: Node = el.firstChild;
    if(this.color) {
      this.rdrr.setStyle(icon,'fill', this.color);
    }
    if(this.width) {
      this.rdrr.setStyle(icon,'width', this.width);
      this.rdrr.setStyle(icon,'height', '100%');
    }
  }

}
