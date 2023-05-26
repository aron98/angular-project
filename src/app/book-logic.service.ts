import { Injectable } from '@angular/core';
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookLogicService {
  private bookList: Book[] = [
    {
      id: "1",
      read: false,
      price: 10,
      title: "Example Book",
      author: "Author 1"
    },
    {
      id: "2",
      read: true,
      price: 100,
      title: "Example Book 2",
      author: "Author 2",
      description: "Short description lorem ipsum dolor sit amet"
    },
    {
      id: "3",
      read: false,
      price: 123,
      author: "Author 3",
      title: "Example Book 3",
      description: "Short description lorem ipsum dolor sit amt"
    }
  ];

  public getBookList() : Book[] {
    return this.bookList;
  } 
  
  public getBookById(id?: string | null) : Book | undefined {
    return this.bookList.find(x => (x.id == id));
  }

  public toggleRead(index: number) : void {
    this.bookList[index].read = !this.bookList[index].read;
  }
}
