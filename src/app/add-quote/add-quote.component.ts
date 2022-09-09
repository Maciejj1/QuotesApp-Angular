import { Component, OnInit } from '@angular/core';
import {Quotation} from "../models/quotation";
import {QUOTES} from "../models/database";

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  showForm = false;
  onSwitchForm(){
    this.showForm = !this.showForm;
  }
  quotation: Quotation={author: '', sentence: '', votes: 0};
  constructor() { }
  addQuotation(){
    this.quotes.unshift(this.quotation);
    this.quotation = {author: '',sentence:'',votes:0};
  }
  quotes : Quotation[] = QUOTES;

  ngOnInit(): void {

  }

}
