import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNgxPdfComponent } from './app-ngx-pdf.component';
import { RouterModule } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



@NgModule({
  declarations: [AppNgxPdfComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: AppNgxPdfComponent
        }
      ]
    ),
    NgxExtendedPdfViewerModule
  ],
  entryComponents:[AppNgxPdfComponent]
})
export class AppNgxPdfModule { }
