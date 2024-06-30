import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appImageFallback]',
  standalone: true,
})
export class ImageFallbackDirective {
  appImageFallback: string = '/assets/images/fallback.png';
  el = inject(ElementRef);
  @HostListener('error')
  onError() {
    const element: HTMLImageElement = <HTMLImageElement>this.el.nativeElement;
    element.src = this.appImageFallback;
  }
}
