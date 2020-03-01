import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {MatVideoModule} from 'mat-video';
import {RestrictGuard} from './guard/restrict.guard';
// import {HttpModule} from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
// import{BrowserAnimationsModule} from '@angular/platform-browser/animations';


// import { MatCardModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { CarteComponent } from './carte/carte.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ContactComponent } from './contact/contact.component';
import {
   MatToolbarModule, 
   MatButtonModule, 
   MatSidenavModule, 
   MatIconModule, 
   MatListModule,
   MatDividerModule, 
   MatCardModule, 
   MatInputModule,
   MatFormFieldModule,
   MatNativeDateModule,
   MatDatepickerModule,
   MatSelectModule,
   MAT_DATE_LOCALE} from '@angular/material';
import { MainDashComponent } from './main-dash/main-dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { DishTableComponent } from './dish-table/dish-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { QuickLunchService } from './services/quick-lunch.service';
import { ScheduleComponent } from './schedule/schedule.component';
import { from } from 'rxjs';
import { PhoneComponent } from './phone/phone.component';
import { CrudComponent } from './crud/crud.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CrudUserComponent } from './crud-user/crud-user.component';
import { UpdateOfUsersComponent } from './update-of-users/update-of-users.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { CrudRoomComponent } from './crud-room/crud-room.component';
import { UpdateOfRoomsComponent } from './update-of-rooms/update-of-rooms.component';
import { LoginComponent } from './login/login.component';
import { BookedComponent } from './booked/booked.component';
import { BookedBySmComponent } from './booked-by-sm/booked-by-sm.component';
import { PayedComponent } from './payed/payed.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // localhost:4200/home
  // { path: 'carte', component: CarteComponent }, // localhost:4200/carte
  { path: 'reserve', component: ReserveComponent }, // localhost:4200/reserve
  // { path: 'contact', component: ContactComponent },  // localhost:4200/contact
  // { path: 'schedule', component: ScheduleComponent}, // localhost:4200/schedule
  // { path: 'crud', component: CrudComponent},
  {path: 'booked-by-sm', component: BookedBySmComponent},
  {path: 'booked', component: BookedComponent},
  {path: 'payed', component: PayedComponent},
  {
    path: 'add-user', component: AddUserComponent, canActivate: [RestrictGuard],
    data: {
      agreeRoles: ['Admin']
    }
  },
  {
    path: 'crud-user', component: CrudUserComponent, canActivate: [RestrictGuard],
    data: {
      agreeRoles: ['Admin']
    }
  },
  {
    path: 'update-of-users', component: UpdateOfUsersComponent, canActivate: [RestrictGuard],
    data: {
      agreeRoles: ['Admin']
    }
  },
  {
    path: 'add-room', component: AddRoomComponent, canActivate: [RestrictGuard],
    data: {
      agreeRoles: ['Admin']
    }
  },
  {
    path: 'crud-room', component: CrudRoomComponent, canActivate: [RestrictGuard],
    data: {
      agreeRoles: ['Admin']
    }
  },
  {
    path: 'update-of-rooms', component: UpdateOfRoomsComponent, canActivate: [RestrictGuard],
    data: {
      agreeRoles: ['Admin']
    }
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    CarteComponent,
    ReserveComponent,
    ContactComponent,
    MainDashComponent,
    DishTableComponent,
    ScheduleComponent,
    PhoneComponent,
    CrudComponent,
    AddUserComponent,
    CrudUserComponent,
    UpdateOfUsersComponent,
    AddRoomComponent,
    CrudRoomComponent,
    UpdateOfRoomsComponent,
    LoginComponent,
    BookedComponent,
    BookedBySmComponent,
    PayedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatVideoModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDividerModule,
    HttpClientModule,
    AlertModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}, RestrictGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
