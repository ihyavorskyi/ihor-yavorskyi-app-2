import { Component, OnInit } from '@angular/core';
import { Item } from '../../shared/item';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  catalog: Item[] = [];

  constructor() {}

  ngOnInit() {
    items.forEach((val) => this.catalog.push(Object.assign({}, val)));
  }
}

const items = [
  new Item(
    '1',
    'Name 1',
    'https://picsum.photos/1000',
    'Category 1',
    'Label 1',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    '100$',
    true
  ),
  new Item(
    '2',
    'Name 2',
    'https://picsum.photos/1000',
    'Category 2',
    'Label 2',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    '200$',
    true
  ),
  new Item(
    '3',
    'Name 3',
    'https://picsum.photos/1000',
    'Category 3',
    'Label 3',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    '300$',
    false
  ),
  new Item(
    '4',
    'Name 4',
    'https://picsum.photos/1000',
    'Category 4',
    'Label 4',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    '400$',
    true
  ),
  new Item(
    '5',
    'Name 5',
    'https://picsum.photos/1000',
    'Category 5',
    'Label 5',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    '500$',
    false
  ),
  new Item(
    '6',
    'Name 6',
    'https://picsum.photos/1000',
    'Category 6',
    'Label 6',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    '600$',
    true
  ),
];
