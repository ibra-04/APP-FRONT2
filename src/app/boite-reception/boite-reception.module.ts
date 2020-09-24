import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoiteReceptionRoutingModule } from './boite-reception-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';


@NgModule({
  declarations: [InboxComponent, ComposeComponent],
  imports: [
    CommonModule,
    BoiteReceptionRoutingModule
  ]
})
export class BoiteReceptionModule { }
