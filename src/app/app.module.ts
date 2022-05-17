import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from './material/material.module';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NasaInterceptorService } from './core/interceptors/nasa-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SearchFormComponent,
    NavMenuComponent,
    SearchResultsComponent,
    SearchPageComponent,
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NasaInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
