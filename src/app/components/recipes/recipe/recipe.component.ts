import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test name', 'a test description', 'a test image')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
