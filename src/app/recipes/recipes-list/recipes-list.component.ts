import { Component, OnInit } from '@angular/core';
import {RecipesModel} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: RecipesModel[] = [ new RecipesModel('A test Recipe', 'Ths is simple a test',
    'https://cdn.pixabay.com/photo/2017/11/05/11/17/recipes-2920065_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
