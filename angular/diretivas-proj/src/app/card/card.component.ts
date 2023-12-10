import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  products: Array<string> = [];
  @Input() productName: string = '';
  constructor() {
    this.products.push('mouse');
    this.products.push('teclado');
    this.products.push('cabo');
    this.products.push('fonte');
  }
  add() {
    if (this.productName.length > 0) {
      this.products.push(this.productName);
      this.productName = '';
    }
  }
  addWithEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.add();
    }
  }
  remove(index: number) {
    if (this.products.length > 0) {
      this.products.splice(index, 1);
    }
  }
  ngOnInit(): void {}
}
