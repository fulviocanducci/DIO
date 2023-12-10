import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atribute',
  templateUrl: './comp-atribute.component.html',
  styleUrls: ['./comp-atribute.component.css'],
})
export class CompAtributeComponent implements OnInit {
  style: string = 'enable';
  item: string = '';
  items: Array<string> = [];
  constructor() {}

  ngOnInit(): void {}

  toogle() {
    this.style = this.style === 'enable' ? 'disable' : 'enable';
  }

  add() {
    this.items.push(this.item);
  }
}
