import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'samsung',
    loadChildren: () => import('./pages/samsung/samsung.module').then( m => m.SamsungPageModule)
  },
  {
    path: 'xiaomi',
    loadChildren: () => import('./pages/xiaomi/xiaomi.module').then( m => m.XiaomiPageModule)
  },
  {
    path: 'xiaomi1',
    loadChildren: () => import('./pages/xiaomi1/xiaomi1.module').then( m => m.Xiaomi1PageModule)
  },
  {
    path: 'xiaomi2',
    loadChildren: () => import('./pages/xiaomi2/xiaomi2.module').then( m => m.Xiaomi2PageModule)
  },
  {
    path: 'xiaomi3',
    loadChildren: () => import('./pages/xiaomi3/xiaomi3.module').then( m => m.Xiaomi3PageModule)
  },
  {
    path: 'iphone',
    loadChildren: () => import('./pages/iphone/iphone.module').then( m => m.IphonePageModule)
  },
  {
    path: 'iphone1',
    loadChildren: () => import('./pages/iphone1/iphone1.module').then( m => m.Iphone1PageModule)
  },
  {
    path: 'iphone2',
    loadChildren: () => import('./pages/iphone2/iphone2.module').then( m => m.Iphone2PageModule)
  },
  {
    path: 'iphone3',
    loadChildren: () => import('./pages/iphone3/iphone3.module').then( m => m.Iphone3PageModule)
  },
  {
    path: 'pagina1',
    loadChildren: () => import('./pages/pagina1/pagina1.module').then( m => m.Pagina1PageModule)
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./pages/pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
  {
    path: 'pagina4',
    loadChildren: () => import('./pages/pagina4/pagina4.module').then( m => m.Pagina4PageModule)
  },
  {
    path: 'pantallaadmin',
    loadChildren: () => import('./pages/pantallaadmin/pantallaadmin.module').then( m => m.PantallaadminPageModule)
  },
  {
    path: 'samsung1',
    loadChildren: () => import('./pages/samsung1/samsung1.module').then( m => m.Samsung1PageModule)
  },
  {
    path: 'samsung2',
    loadChildren: () => import('./pages/samsung2/samsung2.module').then( m => m.Samsung2PageModule)
  },
  {
    path: 'samsung3',
    loadChildren: () => import('./pages/samsung3/samsung3.module').then( m => m.Samsung3PageModule)
  },
  {
    path: 'listacel',
    loadChildren: () => import('./pages/listacel/listacel.module').then( m => m.ListacelPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cambiocontra',
    loadChildren: () => import('./pages/cambiocontra/cambiocontra.module').then( m => m.CambiocontraPageModule)
  },
  {
/* La de abajo es la pagina de error, siempre debe ir al ultimo,
   cuando creen una pagina, deben mover la recien creada arriba de la pag de error*/
    path: '**',
    loadChildren: () => import('./pages/pagina3/pagina3.module').then( m => m.Pagina3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
