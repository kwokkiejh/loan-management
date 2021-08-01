import { Component } from '@angular/core';

// Component decorator
// css selector --> see index.html (tells compiler when to insert/render this component)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-essentials';
  cartItems = ['apple', 'banana', 'cherry'];

  onCartItemsChanged(updatedCartItems) {
    this.cartItems = updatedCartItems;
    console.log(this.cartItems);
  }
}
