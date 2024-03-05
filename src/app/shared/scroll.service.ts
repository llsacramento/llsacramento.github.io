// scroll.service.ts
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScrollService {
    // scrollTo(elementId: string): void {
    // const element = document.getElementById(elementId);

    // if (element) {
    //     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // }
    // }

    scrollTo(elementId: string): void {
        const element = document.getElementById(elementId);
    
        if (element) {
            console.log(`Scrolling to element with id: ${elementId}`);
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error(`Element with id ${elementId} not found`);
        }
    }
    
}
