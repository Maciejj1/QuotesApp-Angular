import {Component, Input, OnInit} from '@angular/core';
import {Quotation} from "../models/quotation";
import {QUOTES} from "../models/database";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
  @Input()
  quotes : Quotation[];
  @Input()
  title: string;



}
