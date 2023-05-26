import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {BookLogicService} from "./book-logic.service";
import {HideableContentComponent} from "./hideable-content/hideable-content.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HideableContentComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    public readonly bookService = inject(BookLogicService);

    public handleCheckboxClick(index : number) : void {
        this.bookService.toggleRead(index);
    }
}
