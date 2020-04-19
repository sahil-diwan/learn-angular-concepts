import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigFeatureComponent } from './big-feature/big-feature.component';


const routes: Routes = [
  { path: '', component: BigFeatureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BigModuleRoutingModule { }
