import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListPersonComponent } from './list/list-person.component';
import { CreatePersonComponent } from './create/create-person.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

const routes: Routes = [
  { path: '', component: ListPersonComponent },
  { path: 'create', component: CreatePersonComponent }
];

@NgModule({
  declarations: [ListPersonComponent, CreatePersonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule,
    RouterModule.forChild(routes)
  ]
})
export class PersonModule { }
