import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from "@angular/core";
import { Meal } from "../../../shared/services/meals/meals.service";
import {
  FormBuilder,
  Validators,
  FormArray,
  FormControl
} from "@angular/forms";

@Component({
  selector: "meal-form",
  templateUrl: "./meal-form.component.html",
  styleUrls: ["./meal-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealFormComponent implements OnInit {
  @Output() create = new EventEmitter<Meal>();

  form = this.fb.group({
    name: ["", Validators.required],
    ingredients: this.fb.array([""])
  });

  constructor(private fb: FormBuilder) {}

  get ingredients(): FormArray {
    return this.form.get("ingredients") as FormArray;
  }

  get required() {
    return (
      this.form.get("name").hasError("required") &&
      this.form.get("name").touched
    );
  }

  ngOnInit(): void {}

  addIngredient() {
    this.ingredients.push(new FormControl(""));
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  createMeal(): void {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }
}
