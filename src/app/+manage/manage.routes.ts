import { Route } from '@angular/router';
import { ManageComponent } from './index';
import { PropPhaseComponent } from './+student/+propphase/index';
import { StudentComponent } from './+student/index';
import { AuthGuard } from '../shared/index';

export const ManageRoutes: Route[] = [
{
    path: 'manage',
    component: ManageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'student',
        component: StudentComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'prophase',
            pathMatch: 'full'
          },
          {
            path: 'propphase',
            component: PropPhaseComponent,
            canActivate: [AuthGuard]
          }
        ]
      }
    ]
  }
];
