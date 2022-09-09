import { Component, OnInit } from '@angular/core';
import {Quotation} from "../models/quotation";
import {QUOTES} from "../models/database";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  quotes : Quotation[] = QUOTES;
  addVote(quotation: Quotation, value: number){
    quotation.votes += value;
  }
}
