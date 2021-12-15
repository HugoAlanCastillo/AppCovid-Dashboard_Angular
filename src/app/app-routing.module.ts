import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { MainPagesComponent } from './pages/main-pages/main-pages.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: MainPagesComponent,
  children: [
    {path: '', component: HomeComponent }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
