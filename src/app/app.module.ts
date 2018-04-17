import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WaingungaComponent } from './waingunga/waingunga.component';
import { BarrageComponent } from './barrage/barrage.component';
import {HttpClientModule} from '@angular/common/http';
import {GoogleSheetService} from './services/google-sheet.service';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: AppComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    WaingungaComponent,
    BarrageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GoogleSheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
