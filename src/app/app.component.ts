import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {BookComponentComponent} from "./book-component/book-component.component";
import {Book} from "./book";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, BookComponentComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    bookList: Book[] = [
        {
            id: 1,
            read: false,
            price: 10,
            title: "Example Book"
        },
        {
            id: 2,
            read: true,
            price: 100,
            title: "Example Book 2"
        }
    ];
}
