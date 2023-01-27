import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

//Creating interface for the cat object
interface CatRandomResponse{
  file: string;
}

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private randomCatService : HttpClient) { }

  //Making the service call
  getRandomCat(){
    return this.randomCatService.get<CatRandomResponse>('https://aws.random.cat/meow');
  }
}
