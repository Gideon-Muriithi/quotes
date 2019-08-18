import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighestUpvotesHighlight]'
})
export class HighestUpvotesHighlightDirective {
  constructor(private elem: ElementRef) { }

  @HostListener('click') upVotes() {
    this.highlight('highlight');
  }
  @HostListener('dblclick') onDoubleClicks() {
    this.highlight('highlight');
  }
  private highlight(highlight: string) {
    this.elem.nativeElement.style.backgroundColor = '#87ceeb'; // style will be fill with yellow as bg color on click trigger
  }
}
