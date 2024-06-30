import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appErrorState]',
  standalone: true,
})
export class ErrorStateDirective {
  @Input('appErrorState') movies: any;
  el = inject(ElementRef);
  renderer = inject(Renderer2);
  ngOnChanges() {
    if (this.movies?.length === 0) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
      this.renderer.setProperty(
        this.el.nativeElement,
        'textContent',
        'Movies Not Found'
      );
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      this.renderer.setProperty(this.el.nativeElement, 'textContent', '');
    }
  }
}
