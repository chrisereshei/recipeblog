import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css'],
})
export class BottombarComponent implements OnInit {
  constructor(private recipes: RecipeServiceService) {}
  myrecipes: any;
  ngOnInit(): void {
    this.recipes.getAllrecipes().subscribe((data) => {
      this.myrecipes = data;
    });
  }
}
