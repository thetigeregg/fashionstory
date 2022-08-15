import { Component } from "@angular/core";

import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "fashionstory";

  characterSexes: string[] = ["Male", "Female"];

  optionForm = new FormGroup({
    selectedSex: new FormControl("")
  });
}
