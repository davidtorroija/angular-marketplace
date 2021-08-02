import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './allProducts.component.html',
  styleUrls: ['./allProducts.styles.scss']
})
export class AllProductsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

   products:Product[]  = [
    {
      id: "1",
      name: 'Call of Duty Black Ops',
      description: "Some description here",
       imageUrl: 'https://wallpaperaccess.com/full/1657033.jpg',
       price: 19.99,
       favorite: false
    },
    {
      id: "2",
      name: 'The Witcher 3 Wild Hunt',
      description: "Some description here",
       imageUrl: 'https://images2.alphacoders.com/600/thumbbig-600255.webp',
       price: 19.99,
       favorite: false
    },
    {
      id: "3",
      name: 'Assassin\'s Creed Unity',
      description: "Some description here",
       imageUrl: 'https://images8.alphacoders.com/566/thumbbig-566159.webp',
       price: 19.99,
       favorite: false
    },
    {
      id: "4",
      name: 'Dota 2',
      description: "Some description here",
       imageUrl: 'https://images2.alphacoders.com/474/thumbbig-474206.webp',
       price: 19.99,
       favorite: false
    },
    {
      id: "5",
      name: 'Tom Clancy\'s Rainbow Six: Siege',
      description: "Some description here",
       imageUrl: 'https://images5.alphacoders.com/700/thumbbig-700496.webp',
       price: 19.99,
       favorite: false
    },
    {
      id: "6",
      name: 'For Honor',
      description: "Some description here",
       imageUrl: 'https://images3.alphacoders.com/600/thumbbig-600978.webp',
       price: 19.99,
       favorite: false
    },
  ];
}
