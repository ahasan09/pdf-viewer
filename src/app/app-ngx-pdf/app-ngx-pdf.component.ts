import { Component, OnInit } from '@angular/core';
// import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-app-ngx-pdf',
  templateUrl: './app-ngx-pdf.component.html',
  styleUrls: ['./app-ngx-pdf.component.css']
})
export class AppNgxPdfComponent implements OnInit {

  constructor() {
    // pdfDefaultOptions.assetsFolder = 'bleeding-edge';
   }

  ngOnInit(): void {
  }

}
