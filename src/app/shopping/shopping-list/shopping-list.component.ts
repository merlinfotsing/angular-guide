import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [
    new IngredientModel('tomatoes', 15.0),
    new IngredientModel('bananas', 4.0),
    new IngredientModel('chocolate', 7.0)
  ];

  constructor() { }

  ngOnInit() {
  }

}
