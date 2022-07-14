import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-uploadblog',
  templateUrl: './uploadblog.component.html',
  styleUrls: ['./uploadblog.component.css'],
})
export class UploadblogComponent implements OnInit {
  constructor(private recipe: RecipeServiceService) {}

  ngOnInit(): void {}
  posttitle: string = '';
  postdescription: string = '';
  postimage: string = '';

  receivedRecipes: string[] = [];

  postrecipes(recipepost: any) {
    const newrecipes = {
      title: recipepost.value.posttitle,
      description: recipepost.value.postdescription,
    };

    // this.recipe.createRecipes(newrecipes).subscribe((data) => {
    //   console.log('recipe posted');
    // });
    // recipepost.reset();
  }
}
