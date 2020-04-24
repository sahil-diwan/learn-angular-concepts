# LazyLoading

## One advantage of splitting the application into modules is the ability to load certain modules only when needed. When using Lazy Loading modules, loading is only done when the use navigates to the route of the respective module.

```
  ng generate module big-module --routing
  ng g c big-module/big-feature
```

## app-routing.module.ts

```
  import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'bigComponent',loadChildren: () => import('./big-module/big-module.module').then(m => m.BigModuleModule)} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

## big-module-routing.module.ts

```
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

```
