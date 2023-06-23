import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageService } from './shared/image.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,



  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, CommonModule,
    RouterModule

  ],
  
  providers: [ImageService, HttpClient],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})

export class AppModule { 



}
