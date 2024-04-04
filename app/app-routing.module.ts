import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent}from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { AllproductshopclothComponent } from './allproductshopcloth/allproductshopcloth.component';
import { WomenComponent } from './women/women.component';
import { GirlComponent } from './girl/girl.component';
import { BoyComponent } from './boy/boy.component';
import { ClickimgboyComponent } from './clickimgboy/clickimgboy.component';
import { ClickimgmenComponent } from './clickimgmen/clickimgmen.component';
import { ClickimgwomenComponent } from './clickimgwomen/clickimgwomen.component';
import { ClickimggirlComponent } from './clickimggirl/clickimggirl.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { GroceryComponent } from './grocery/grocery.component';
const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'about',
  component:AboutComponent
},
{
  path:'services',
  component:ServicesComponent
},
{
  path:'contact',
  component:ContactComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'forgetpwd',
  component:ForgetpwdComponent
},
{
  path:'shopping',
  component:ShoppingComponent
},
{
  path:'allproductshopcloth',
  component:AllproductshopclothComponent
},
{
  path:'women',
  component:WomenComponent
},
{
  path:'girl',
  component:GirlComponent
},
{
  path:'boy',
  component:BoyComponent
},
{
  path:'clickimgboy',
  component:ClickimgboyComponent
},
{
  path:'clickimgmen',
  component:ClickimgmenComponent
},
{
  path:'clickimggirl',
  component:ClickimggirlComponent
},
{
  path:'clickimgwomen',
  component:ClickimgwomenComponent
},
{
  path:'electronics',
  component:ElectronicsComponent
},
{
  path:'furniture',
  component:FurnitureComponent
},
{
  path:'grocery',
  component:GroceryComponent
},

{
  path:'**',
  component:ErrorComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
