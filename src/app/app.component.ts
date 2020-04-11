import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any = [];
  images: any = [];
  start = 0;
  URLs: any = [];

  constructor(private http: Http){}

  // setting 20 images initially
  setInitialValues(data){
    for (let i=0; i<this.data.hits.length; i++){
      this.URLs.push(this.data.hits[i].webformatURL);
    }
    for(let i=0; i<20; i++){
      this.images.push(this.URLs[i]);
    }
    this.start = 19;
  }

  // getting data from API
  getImages(query){
    this.images = [];
    this.URLs = [];
	   return(this.http.get('https://pixabay.com/api/?key=8110539-c6f6e019f5183553611e1e92d&image_type=photo&per_page=200&q='+query))
	    .subscribe(
		      (res:Response) => {
			         this.data = res.json();
               this.setInitialValues(this.data);
		      }
	  )
  }
  // Scrolling - load 10 images while scrolling
  onScroll(){
    let end = this.start+10;
    for(let i = this.start+1; i<end; i++){
      this.images.push(this.URLs[i]);
      this.start = i;
    }
  }
}
