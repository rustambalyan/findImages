import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({providedIn: 'root'})

export class ImageService {
  constructor(
    private http: HttpClient,
  ) {
  }

  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;

  getImage(searchText) {
    const url = `${this.API_URL}/?key=${this.API_KEY}&q=${searchText}&image_type=photo&pretty=true`;
    return this.http.get(`${url}`).pipe(map((images: any) => images.hits));
  }

}
