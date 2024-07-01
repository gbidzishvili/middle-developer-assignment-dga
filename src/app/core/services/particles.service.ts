import { Injectable } from '@angular/core';
declare const particlesJS: any;

@Injectable({
  providedIn: 'root',
})
export class ParticlesService {
  constructor() {}
  loadParticles(configPath: string, elementId: string): void {
    particlesJS.load(elementId, configPath, function () {
      console.log('particles.js config loaded');
    });
  }
}
