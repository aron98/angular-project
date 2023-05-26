import { Injectable } from '@angular/core';
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookLogicService {
  private bookList: Book[] = [
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
      title: "Example Book 2",
      description: "Short description lorem ipsum dolor sit amet"
    },
    {
      id: 3,
      read: false,
      price: 123,
      title: "Example Book 3"
    }
  ];

  public getBookList() : Book[] {
    return this.bookList;
  }

  public toggleRead(index: number) : void {
    this.bookList[index].read = !this.bookList[index].read;
  }
}
