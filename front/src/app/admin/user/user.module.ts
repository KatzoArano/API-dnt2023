import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UIndexComponent } from './u-index/u-index.component';
import { UAddComponent } from './u-add/u-add.component';
import { UEditComponent } from './u-edit/u-edit.component';
import { UDeleteComponent } from './u-delete/u-delete.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UIndexComponent,
    UAddComponent,
    UEditComponent,
    UDeleteComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
