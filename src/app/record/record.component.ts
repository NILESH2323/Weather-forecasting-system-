import { Component, OnInit } from '@angular/core';

import {RecordService} from '../services/record.service'

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
  providers: [RecordService]
})
export class RecordComponent implements OnInit {
  

  constructor(private recordService:RecordService) { }

  ngOnInit(): void {
  }


}
