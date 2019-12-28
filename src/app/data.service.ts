import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  createDb(){

    let  products =  [
      {  id:  1,  name:  'Azure Fundamentals' },
      {  id:  2,  name:  'Azure Containers and Kubernetes' },
      {  id:  3,  name:  'Azure Serverless Functions' },
      {  id:  4,  name:  'Azure Active Directory, Authentication and Autherization' },
      {  id:  5,  name:  'Azure Machine Learning' }      
    ];

    return { products };
  }
}
