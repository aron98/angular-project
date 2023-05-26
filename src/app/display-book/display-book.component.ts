import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookLogicService } from '../book-logic.service';
import { Book } from '../book';

@Component({
  selector: 'app-display-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export default class DisplayBookComponent  implements OnInit{
  constructor(private route: ActivatedRoute) {}

  /* ngOnChanges(changes: SimpleChanges): void {
    const bookId = this.route.snapshot.paramMap.get('bookId');
    this.book = this.bookServices.getBookById(bookId);
  } */

  readonly bookServices = inject(BookLogicService);
  book?: Book;

  public ngOnInit() {
    this.route.params.subscribe(routeParams => 
      {
        const bookId =  routeParams['bookId'];
        this.book = this.bookServices.getBookById(bookId); 
      });
    /* const bookId =  this.route.snapshot.paramMap.get('bookId');
    this.book = this.bookServices.getBookById(bookId); */
    }

}
