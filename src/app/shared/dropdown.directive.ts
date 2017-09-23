import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  isOpen: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }
  }
}
