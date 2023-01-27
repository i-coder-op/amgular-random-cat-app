import { Component } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imageUrl : string = "";

  constructor(private catService : CatService){
    this.catService.getRandomCat().subscribe((randomCatResponse) => {
      console.log(randomCatResponse.file);
      this.imageUrl = randomCatResponse.file;
    });
  }

  getRandomImage(){
    this.catService.getRandomCat().subscribe((randomCatResponse) => {
      console.log(randomCatResponse.file);
      this.imageUrl = randomCatResponse.file;
    });
  }
}
