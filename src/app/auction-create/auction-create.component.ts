import { catchError, combineAll, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl, Form } from '@angular/forms';
import { Auction } from './../_models/Auction';
import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
import { error } from 'console';

@Component({
  selector: 'app-auction-create',
  templateUrl: './auction-create.component.html',
  styleUrls: ['./auction-create.component.css']
})
export class AuctionCreateComponent implements OnInit {
  model: Auction;
  auctionForm: FormGroup;
  icon: File;
  submitted = false;

  constructor(private FormBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.auctionForm = this.FormBuilder.group({
      title: [null, [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      price: ['', Validators.required],
      icon: ['', null]
    });
  }

  get f() {
    return this.auctionForm.controls;
  }

  onFileChange(files: FileList) {
    let file: File = files[0];
    if (file) {
      if (file.size > 16 * 1000 * 1000) {
        alert("File size is too big")
        return;
      }
      this.icon = file;
    }
  }

  onSubmit() {
    this.submitted = true;
    let fd: FormData = new FormData();
    fd.append('title', this.auctionForm.get('title').value);
    fd.append('description', this.auctionForm.get('description').value);
    fd.append('price', this.auctionForm.get('price').value);
    if (this.icon) {
      fd.append('icon', this.icon);
    }
    console.log("before post");
    this.http.post<any>(`${environment.apiUrl}/auctions`, fd).pipe(
      tap(_ => console.log("posting")),
      catchError((e) => { console.log(e); return null; })
    ).subscribe(response => {
      console.log(response);
    }
    );
  }
}
