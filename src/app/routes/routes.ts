import { LayoutComponent } from '../layout/layout.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },            
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'usuarios', component: UsuariosComponent },            
            
        ]
    }

];
