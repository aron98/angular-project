import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Book} from "../book";

@Component({
  selector: 'app-book-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent {
  @Input() book!: Book;
}
