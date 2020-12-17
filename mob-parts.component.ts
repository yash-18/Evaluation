import { Component, OnInit } from "@angular/core";
import { MobInfo } from "./mob-parts";
import { MOBINFO } from "./mock";
@Component({
  selector: "app-mob-parts",
  templateUrl: "./mob-parts.component.html",
  styleUrls: ["./mob-parts.component.css"]
})
export class MobPartsComponent implements OnInit{
  mobInfo: MobInfo[];
  
  constructor() {
    console.log("constructor Block..");
  }

  ngOnInit() {
    this.mobInfo = MOBINFO;

    
  }
  totalMob() {
    let sum = 0;
    if (Array.isArray(this.mobInfo)) {
      for (let prod of this.mobInfo) {
        sum = sum + prod.inStock;
      }
    }
    return sum;
  }
}
