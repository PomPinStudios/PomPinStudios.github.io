import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [NavbarComponent, MainPageComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
