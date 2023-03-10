import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {SideInputsComponent} from './main/side-inputs/side-inputs.component';
import {ResultsComponent} from "./main/results/results.component";
import {ValidityComponent} from './main/results/validity/validity.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideInputsComponent,
    ResultsComponent,
    ValidityComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent, pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
