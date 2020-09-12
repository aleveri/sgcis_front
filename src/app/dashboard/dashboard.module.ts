import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'person', loadChildren: '../person/person.module#PersonModule' }
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    Ng4LoadingSpinnerModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
