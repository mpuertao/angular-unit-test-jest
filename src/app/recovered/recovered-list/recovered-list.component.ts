import { Component, OnInit } from '@angular/core';
import { RecoveredModel } from '../recovered-model/recovered.model';
import { RecoveredService } from '../service/recovered/recovered.service';

@Component({
  selector: 'app-recovered-list',
  templateUrl: './recovered-list.component.html',
  styleUrls: ['./recovered-list.component.css']
})
export class RecoveredListComponent implements OnInit {

  recovered: RecoveredModel[];

  constructor( private recoveredService: RecoveredService ) { }

  ngOnInit() {
    this.getAllRecovered();
  }

  getAllRecovered(): void {
    this.recoveredService.getAllRecovered().subscribe(recovered => this.recovered = recovered);
  }
}
