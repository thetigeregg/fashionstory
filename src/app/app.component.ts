import { Component, OnInit } from "@angular/core";

import { FormControl, FormGroup } from "@angular/forms";
import { Item } from "src/models/item";
import HairstylesJson from "../../src/data/hairstyles.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  hairstyles: Item[] = HairstylesJson;
  title = "fashionstory";
  loading = true;

  characterSexes: string[] = ["Male", "Female"];

  optionForm = new FormGroup({
    selectedSex: new FormControl(""),
    selectedHairstyles: new FormControl("")
  });

  ngOnInit(): void {}
}
