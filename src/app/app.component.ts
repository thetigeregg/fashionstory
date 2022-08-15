import { Component, OnInit } from "@angular/core";

import { FormControl, FormGroup } from "@angular/forms";
import { Character } from "src/models/character";
import { Item } from "src/models/item";
import HairstylesJson from "../../src/data/hairstyles.json";
import BaseCharacter from "../../src/data/char.json";
import { Position } from "src/models/position";
import FacesJson from "../../src/data/faces.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  hairstyles: Item[] = HairstylesJson;
  faces: Item[] = FacesJson;

  title = "fashionstory";
  loading = true;

  optionForm = new FormGroup({
    selectedHairstyles: new FormControl(""),
    selectedFaces: new FormControl("")
  });

  ngOnInit(): void {}

  generateScene(): void {
    console.log(this.generateCharacters());
  }

  generateCharacters(): Character[] {
    const characterArray: Character[] = [];

    const baseId = Math.floor(Math.random() * 100000) + 10000;
    let count = 0;

    const selectedHairstyles: Item[] = this.optionForm.get("selectedHairstyles")
      ?.value as any;

    const selectedFaces: Item[] = this.optionForm.get("selectedFaces")
      ?.value as any;

    selectedHairstyles.forEach((hairstyle, hairstyleIndex) => {
      const newYPosition = hairstyleIndex * 100;

      selectedFaces.forEach((face, faceIndex) => {
        const newXPosition = faceIndex * 70;

        characterArray.push(
          this.generateCharacter({
            id: baseId + count,
            hair: hairstyle,
            face,
            position: { x: newXPosition, y: newYPosition }
          })
        );

        count++;
      });
    });

    return characterArray;
  }

  generateCharacter(charData: {
    id: number;
    hair: Item;
    face: Item;
    position: Position;
  }): Character {
    const baseCharacter: Character = BaseCharacter;
    console.log("base: ", baseCharacter);

    baseCharacter.id = charData.id;
    // baseCharacter.name = 'char' + charData.id;
    baseCharacter.selectedItems.Hair = charData.hair;
    baseCharacter.selectedItems.Face = charData.face;
    baseCharacter.position = charData.position;

    return baseCharacter;
  }
}
