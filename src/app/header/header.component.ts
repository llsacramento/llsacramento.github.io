import { Component } from '@angular/core';
import { ScrollService } from '../shared/scroll.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  

  constructor(private scrollService: ScrollService) {
    window.addEventListener('scroll', function(){
      var mattoolbar:any = document.querySelector("mat-toolbar");
      mattoolbar.classList.toggle("sticky", window.scrollY > 0);
    }
    )
  }

  scrollToContact(): void {
    this.scrollService.scrollTo('contact');
  }

  scrollToPhotography(): void {
    this.scrollService.scrollTo('photography');
  }

  scrollToProjects(): void {
    this.scrollService.scrollTo('projects');
  }

}
