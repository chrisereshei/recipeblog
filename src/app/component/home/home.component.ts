import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imgURL =
    'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg';

  imgAlt = 'Main Image';
  heading = 'FEATURED RECIPES';

  myrecipes: any;

  constructor(private recipes: RecipeServiceService) {}

  ngOnInit(): void {
    this.recipes.getAllnotes().subscribe((data) => {
      this.myrecipes = data;
    });
  }
}
