import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { MenuComponent } from '../shared/menu/menu.component';

@NgModule({
  declarations: [HeaderComponent, MenuComponent, FooterComponent],
  imports: [BrowserModule, RouterModule],
  exports: [HeaderComponent, MenuComponent, FooterComponent],
})
export class SharedModule {}
