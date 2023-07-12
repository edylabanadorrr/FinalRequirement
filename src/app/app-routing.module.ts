import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProtectedPageComponent } from './protected-page/protected-page.component'; // Import the ProtectedPageComponent


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  { 
    path: 'landing', 
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  { 
    path: 'protected-page', 
    component: ProtectedPageComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'consumer-interface',
    loadChildren: () => import('./consumer-interface/consumer-interface.module').then( m => m.ConsumerInterfacePageModule)
  },
  {
    path: 'admin-interface',
    loadChildren: () => import('./admin-interface/admin-interface.module').then( m => m.AdminInterfacePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'cashier',
    loadChildren: () => import('./cashier/cashier.module').then( m => m.CashierPageModule)
  },
  {
    path: 'customer-service',
    loadChildren: () => import('./customer-service/customer-service.module').then( m => m.CustomerServicePageModule)
  },
  {
    path: 'superadmin-payment-module',
    loadChildren: () => import('./superadmin-payment-module/superadmin-payment-module.module').then( m => m.SuperadminPaymentModulePageModule)
  },  {
    path: 'customer-service-manage',
    loadChildren: () => import('./customer-service-manage/customer-service-manage.module').then( m => m.CustomerServiceManagePageModule)
  },
  {
    path: 'billing-inquiry',
    loadChildren: () => import('./billing-inquiry/billing-inquiry.module').then( m => m.BillingInquiryPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
