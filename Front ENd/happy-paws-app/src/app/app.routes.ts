import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PetpageComponent } from './pages/petpage/petpage.component';
import { AppointmentpageComponent } from './pages/appointmentpage/appointmentpage.component';
import { ShoppageComponent } from './pages/shoppage/shoppage.component';
import { BlogpageComponent } from './pages/blogpage/blogpage.component';

export const routes: Routes = [
    {
        path:"homepage",
        component:HomepageComponent
    },
    {
        path:"yourpet",
        component:PetpageComponent
    },
    {
        path:"appointments",
        component:AppointmentpageComponent
    },
    {
        path:"shop",
        component:ShoppageComponent
    },
    {
        path:"blog",
        component:BlogpageComponent
    }
];
