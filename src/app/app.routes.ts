import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { FormattedPageComponent } from './formatted-page/formatted-page.component';

const routes:Routes=[{
	path:'formatter',
	component:FormattedPageComponent
},{
	path:'list',
	component:ListPageComponent
},{
	path:"",
	redirectTo:'/list',
	pathMatch:"full"
}];

export const appRouterModule = RouterModule.forRoot(routes);