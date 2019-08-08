import { Component, OnInit } from "@angular/core";
import { Meal } from "../../../shared/services/meals/meals.service";

@Component({
  selector: "meal",
  templateUrl: "./meal.component.html",
  styleUrls: ["./meal.component.scss"]
})
export class MealComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  addMeal(event: Meal) {
    console.log(event);
  }
}
