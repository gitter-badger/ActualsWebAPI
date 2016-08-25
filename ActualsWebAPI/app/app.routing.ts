import { Routes, RouterModule } from '@angular/router';

import { ApplicationListComponent } from './applications/application-list.component';   
import { SkillListComponent } from './skills/skill-list.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';

const appRoutes: Routes = [    
    {
        path: 'applications',
        component: ApplicationListComponent
    },
    {
        path: 'skills',
        component: SkillListComponent
    },        
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
