import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  private MOBILE: number = 576
  private TABLET: number = 768
  private LAPTOP: number = 1200
  private DESKTOP: number = 1600

  private SCREEN_MOBILE: string = 'mobile'
  private SCREEN_TABLET: string = 'tablet'
  private SCREEN_LAPTOP: string = 'laptop'
  private SCREEN_DESKTOP: string = 'desktop'

  getBrowserWidth(): number {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  }

  getWidthMobile() {
    return this.MOBILE
  }
  getWidthTablet() {
    return this.TABLET
  }
  getWidthLaptop() {
    return this.LAPTOP
  }
  getWidthDesktop() {
    return this.DESKTOP
  }

  isMobile() {
    return this.getBrowserWidth() < this.MOBILE
  }

  isTablet() {
    return this.getBrowserWidth() >= this.MOBILE && this.getBrowserWidth() < this.TABLET
  }

  isLaptop() {
    return this.getBrowserWidth() >= this.TABLET &&  this.getBrowserWidth() < this.LAPTOP
  }

  isDesktop() {
    return this.getBrowserWidth() >= this.LAPTOP
  }

  getCurrentScreen() {
    if(this.isMobile()) {
      return this.SCREEN_MOBILE
    }
    if(this.isTablet()) {
      return this.SCREEN_TABLET
    }
    if(this.isLaptop()) {
      return this.SCREEN_LAPTOP
    }
    if(this.isDesktop()) {
      return this.SCREEN_DESKTOP
    }
    return ""
  }
}
