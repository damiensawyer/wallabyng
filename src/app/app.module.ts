import { DamienService } from './services/damien.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatsComponent } from './components/cats/cats.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'cats', component: CatsComponent }
];

@NgModule({
  declarations: [AppComponent, CatsComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [DamienService],
  bootstrap: [AppComponent]
})
export class AppModule {}
