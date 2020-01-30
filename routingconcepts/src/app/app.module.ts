import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteAComponent } from './route-a/route-a.component';
import { RouteBComponent } from './route-b/route-b.component';
import { PostResolverService } from './post-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    RouteAComponent,
    RouteBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
