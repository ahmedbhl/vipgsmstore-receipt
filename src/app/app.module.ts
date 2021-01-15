import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClarityModule } from "@clr/angular";

import { AppComponent } from "./app.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { PrintPageComponent } from "./print-page/print-page.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { SidenavComponent } from "./shared/components/sidenav/sidenav.component";
import { ToolbarComponent } from "./shared/components/toolbar/toolbar.component";
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";
import { ModalModule } from "ngx-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { fakeBackendProvider } from "./_helpers/fake-backend";
import { JwtInterceptor } from "./_helpers/jwt.interceptor";
import { ErrorInterceptor } from "./_helpers/error.interceptor";
import { AlertComponent } from "./_components/alert.component";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClarityModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    MainPageComponent,
    PrintPageComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    SidenavComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
