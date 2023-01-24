import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {TriangleComponent} from './home/triangle.component';
import {SideInputsComponent} from './home/side-inputs/side-inputs.component';
import {ResultsComponent} from "./home/results/results.component";
import {ValidityComponent} from './home/results/validity/validity.component';

@NgModule({
  declarations: [
    AppComponent,
    TriangleComponent,
    SideInputsComponent,
    ResultsComponent,
    ValidityComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: TriangleComponent, pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
