import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CaledarcomponentComponent } from './components/caledarcomponent/caledarcomponent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calendar', component: CaledarcomponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }