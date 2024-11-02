import { Component } from '@angular/core';
import { BooksService } from '../books/service/books.service';
import { Author } from '../books/model/book';

@Component({
  selector: 'app-author-query',
  templateUrl: './author-query.component.html',
  styleUrls: ['./author-query.component.css']
})
export class AuthorQueryComponent {
  authorId?: number;
  author?: Author;
  errorMessage?: string;

  constructor(private booksService: BooksService) {}

  // Method to update authorId with safe casting
  updateAuthorId(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.authorId = inputElement.value ? Number(inputElement.value) : undefined;
  }

  searchAuthor(): void {
    if (this.authorId !== undefined) {
      this.booksService.getAuthor(this.authorId).subscribe({
        next: (data) => {
          this.author = data;
          this.errorMessage = undefined;
        },
        error: () => {
          this.author = undefined;
          this.errorMessage = 'Author not found';
        }
      });
    } else {
      this.errorMessage = 'Please enter a valid author ID';
    }
  }
}
