import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from '../material/material.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [LayoutComponent, IndexComponent, ContactComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
