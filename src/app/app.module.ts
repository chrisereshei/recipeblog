import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { HomeComponent } from './component/home/home.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { BottombarComponent } from './component/bottombar/bottombar.component';
import { UploadblogComponent } from './component/uploadblog/uploadblog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomeComponent,
    ContactusComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
    BottombarComponent,
    UploadblogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
