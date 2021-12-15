import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NabvarComponent } from './nabvar/nabvar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

//Componentes
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NabvarComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports:[
    NabvarComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
