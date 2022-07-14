import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  imgURL =
    'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg';

  imgAlt = 'Main Image';
  heading = 'FEATURED RECIPES';

  myrecipes: any;

  constructor(private recipes: RecipeServiceService) {}

  ngOnInit(): void {
    this.recipes.getAllrecipes().subscribe((data) => {
      this.myrecipes = data;
    });
  }
}
