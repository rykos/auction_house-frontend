import { Router } from '@angular/router';
import { catchError, combineAll, tap } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
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
  error: any;

  constructor(private FormBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

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
    this.http.post<any>(`${environment.apiUrl}/auctions`, fd).subscribe(
      response => {
        this.router.navigate([`/auction/${response.id}`]);
      },
      err => { this.error = err; return null; }
    );
  }
}
