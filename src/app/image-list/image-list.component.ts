import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageService } from 'src/app/shared/image.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  imagesItem = new Subject<any>();
  myForm: FormGroup;
  inp: boolean = true;


  get searchValue(): string {
    return this.myForm.controls['searchText'].value;
  }


  constructor(public imageService: ImageService) {
    this.myForm = new FormGroup({

      "searchText": new FormControl(null, Validators.required),
    });
  }

  clear() {
    const inputElement = document.getElementById('myInput') as HTMLInputElement;
    inputElement.value = '';

  }

  submit() {
    this.searchText();
  }

  searchText() {
    this.imageService.getImage(this.searchValue).subscribe(val => this.imagesItem.next(val))
  }

  handle(event) {
    if (event.target.value.length !== 0 && event.target.value.trim() !== '') {
      this.inp = false;
    } else {
      this.inp = true;
    }
  }

  ngOnInit() {

  }

}
