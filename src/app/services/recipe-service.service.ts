import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { Recipes } from '../recipes';
import { environment } from 'src/environments/environment.dev';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RecipeServiceService {
  constructor(private http: HttpClient) {}

  //Users

  createUser(userBody: any): Observable<Users> {
    const userURL = 'http://localhost:3000/user';
    return this.http.post<Users>(userURL, userBody);
  }

  getAllnotes(): Observable<Users> {
    //const userURL = environment.USER.BASE_URL + environment.USER.GET_ALL_USER;
    const userURL = 'http://localhost:3000/user';
    return this.http.get<Users>(userURL);
  }

  //Recipes

  getAllrecipes(): Observable<Recipes> {
    //const userURL = environment.USER.BASE_URL + environment.USER.GET_ALL_USER;
    const recipeURL = 'http://localhost:3000/recipes';
    return this.http.get<Recipes>(recipeURL);
  }

  createRecipes(recipeBody: any): Observable<Recipes> {
    const recipeURL = 'http://localhost:3000/recipes';
    return this.http.post<Recipes>(recipeURL, recipeBody);
  }
}
