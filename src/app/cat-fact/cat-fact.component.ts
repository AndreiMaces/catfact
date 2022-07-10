import { Component, OnInit } from '@angular/core';
import {CatFactServiceService} from "./cat-fact-service.service";

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.css']
})
export class CatFactComponent implements OnInit {

  fact: string = "This is a test fact";

  constructor(private catFactService: CatFactServiceService) { }

  ngOnInit(): void {
    this.getNewFact();
  }

  getNewFact()
  {
    this.catFactService.getFact().subscribe((newFact: any) => {
      this.fact = newFact.fact;
    });
  }

}
