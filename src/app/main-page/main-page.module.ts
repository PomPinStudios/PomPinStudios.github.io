import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [NavbarComponent, MainPageComponent, ContactoComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
