import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'ngx-pdf',
		loadChildren: () => import('./app-ngx-pdf/app-ngx-pdf.module').then((x) => x.AppNgxPdfModule)
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})
export class AppRoutingModule {}
