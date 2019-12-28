import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { DataService } from "./data.service";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CoursesComponent } from './courses/courses.component';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { AzureKubernetesComponent } from './azure-kubernetes/azure-kubernetes.component';
import { AzureServerlessFuncComponent } from './azure-serverless-func/azure-serverless-func.component';
import { AzureAuthenticationComponent } from './azure-authentication/azure-authentication.component';
import { AzureIAMPortalComponent } from './azure-iamportal/azure-iamportal.component';
import { AzureMachineLearningComponent } from './azure-machine-learning/azure-machine-learning.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    MenuComponent,
    CoursesComponent,
    FundamentalsComponent,
    AzureKubernetesComponent,
    AzureServerlessFuncComponent,
    AzureAuthenticationComponent,
    AzureIAMPortalComponent,
    AzureMachineLearningComponent
  ],
  imports: [
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
