import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { CoursesComponent } from "./courses/courses.component";
import { FundamentalsComponent } from "./fundamentals/fundamentals.component";
import { AzureAuthenticationComponent } from "./azure-authentication/azure-authentication.component";
import { AzureIAMPortalComponent } from "./azure-iamportal/azure-iamportal.component";
import { AzureKubernetesComponent } from "./azure-kubernetes/azure-kubernetes.component";
import { AzureMachineLearningComponent } from "./azure-machine-learning/azure-machine-learning.component";
import { AzureServerlessFuncComponent } from "./azure-serverless-func/azure-serverless-func.component";


const routes: Routes = [
  {path: 'AzureFundamentals' , component: FundamentalsComponent},
  {path: 'AzureAuthentication' , component: AzureAuthenticationComponent},
  {path: 'AzureIAMPortal' , component: AzureIAMPortalComponent},
  {path: 'AzureKubernetes' , component: AzureKubernetesComponent},
  {path: 'AzureMachineLearning' , component: AzureMachineLearningComponent},
  {path: 'AzureServerlessFunc' , component: AzureServerlessFuncComponent},
  {path: 'Courses' , component: CoursesComponent},
  {path: 'products' , component: ProductListComponent},
  { path: '',  redirectTo: '/products', pathMatch: 'full' },
  {path: 'product/:id' , component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
