import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pa-starter-angular';
  recipeForm: FormGroup;
  recipeList: {
    recipeName: string,
    recipeInstructions: string
  }[];
  
  constructor() { 
    this.recipeList = [];
    this.recipeForm = new FormGroup({
      recipeNameControl: new FormControl(""),
      recipeInstructionsControl: new FormControl("")
    })
  }
  showRecipeForm: boolean = false;

  /**
   * @description adds a recipe
   */
   public addRecipe() {
    // show the button again 
    this.showRecipeForm = false;
    // Add to list
    this.recipeList.push({
      recipeName: this.recipeForm.get('recipeNameControl')?.value,
      recipeInstructions: this.recipeForm.get('recipeInstructionControl')?.value
      }
    )
    // Reset the form
    this.recipeForm = this.createFormGroup();
  }

  private createFormGroup() {
    return new FormGroup({
      recipeNameControl: new FormControl(""),
      recipeInstructionsControl: new FormControl("")
    });
  }

  /**
   * @description shows the recipe form  
   */
   public toggleShowRecipeForm() {
    this.showRecipeForm = true;
  }

}
