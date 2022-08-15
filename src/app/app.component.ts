import { Component, OnInit } from "@angular/core";

import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Character } from "src/models/character";
import { Item } from "src/models/item";
import HairstylesJson from "../../src/data/hairstyles.json";
import BaseCharacter from "../../src/data/char.json";
import { Position } from "src/models/position";
import FacesJson from "../../src/data/faces.json";
import BaseScene from "../../src/data/scene.json";
import { Scene } from "src/models/scene";

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
    selectedHairstyles: new FormControl("", [Validators.required]),
    selectedFaces: new FormControl("", [Validators.required])
  });

  ngOnInit(): void {}

  getErrorMessage(): string {
    return "Required";
  }

  generateScene(): void {
    if (this.optionForm.valid) {
      const characters = this.generateCharacters();

      const scene: Scene = BaseScene;
      scene.characters = characters;
      console.log(scene);

      this.saveSceneFile(scene);
    } else {
      Object.keys(this.optionForm.controls).forEach(formControlName => {
        this.optionForm.get(formControlName)?.markAsDirty();
        this.optionForm.get(formControlName)?.markAsTouched();
      });
    }
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

  saveSceneFile(scene: Scene): void {
    const sceneBlob = new Blob([JSON.stringify(scene, null, 2)], {
      type: "application/json"
    });

    const blobUrl = window.URL.createObjectURL(sceneBlob);

    const link = document.createElement("a");
    link.setAttribute("target", "_self");
    link.setAttribute("href", blobUrl);
    link.setAttribute("download", `fs-scene.json`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
