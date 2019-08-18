import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Quotes About Living a Beautiful Life';

  quotes: Quote[] = [
    new Quote(1, 'Author: Budha.', 'All that we are is the result of what we have thought.', 'Admin', new Date(2016, 6, 17)),
    new Quote(2, 'Author: Steve Jobs.', 'Stay hungry, stay foolish.', 'Admin', new Date(2005, 8, 20)),
    new Quote(3, 'Author: William Shakespeare.', 'Wisely and slow. They stumble that run fast.', 'Admin', new Date(1995, 11, 12))
  ];

  toggleQuotes(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  quoteDelete(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
