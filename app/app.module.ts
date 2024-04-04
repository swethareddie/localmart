import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
 import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { AboutComponent } from './about/about.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { GroceryComponent } from './grocery/grocery.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { AllproductshopclothComponent } from './allproductshopcloth/allproductshopcloth.component';
import { WomenComponent } from './women/women.component';
import { BoyComponent } from './boy/boy.component';
import { GirlComponent } from './girl/girl.component';
import { ClickimgmenComponent } from './clickimgmen/clickimgmen.component';
import { ClickimgwomenComponent } from './clickimgwomen/clickimgwomen.component';
import { ClickimgboyComponent } from './clickimgboy/clickimgboy.component';
import { ClickimggirlComponent } from './clickimggirl/clickimggirl.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ErrorComponent,
    ForgetpwdComponent,
    AboutComponent,
    ShoppingComponent,
    GroceryComponent,
    ElectronicsComponent,
    FurnitureComponent,
    AllproductshopclothComponent,
    WomenComponent,
    BoyComponent,
    GirlComponent,
    ClickimgmenComponent,
    ClickimgwomenComponent,
    ClickimgboyComponent,
    ClickimggirlComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,ReactiveFormsModule,
     HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
