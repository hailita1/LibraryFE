import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart/chart.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    PdfViewerModule
  ]
})
export class ChartModule { }
