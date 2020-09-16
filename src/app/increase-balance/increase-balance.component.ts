import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increase-balance',
  templateUrl: './increase-balance.component.html',
  styleUrls: ['./increase-balance.component.css']
})
export class IncreaseBalanceComponent implements OnInit {
  balanceForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.balanceForm = this.formBuilder.group({
      amount: ['']
    });
  }

}
