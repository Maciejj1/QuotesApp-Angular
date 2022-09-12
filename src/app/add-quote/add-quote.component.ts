import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Quotation} from "../models/quotation";
import {QUOTES} from "../models/database";

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent {
  @Output () newQuotation = new EventEmitter<Quotation>();
  showForm = false;
  onSwitchForm(){
    this.showForm = !this.showForm;
  }
  quotation: Quotation={author: '', sentence: '', votes: 0};

  addQuotation(){
    this.newQuotation.emit(this.quotation)
    this.quotation = {author: '',sentence:'',votes:0};
  }






}
