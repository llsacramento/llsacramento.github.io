import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private scrollService: ScrollService,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/instagram.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/twitter.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/facebook.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'tiktok',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/tiktok.svg"),
    );    
  }

  scrollToTop(): void {
    this.scrollService.scrollTo('top'); // Use the appropriate ID or element for scrolling to the top
  }

}
