import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { DeviceNewComponent } from './device-new/device-new.component';
import { NotificationsComponent } from './notifications/notifications.component';

export const routes: Routes = [
    {
        path: 'login', component: AuthComponent
    },
    {path: 'profile', component: ProfileComponent},
    {path: 'devices', component: DevicesComponent},
    {path: 'device/new', component: DeviceNewComponent},
    {path: 'device/:id', component: DeviceEditComponent},
    {path: 'notifications', component: NotificationsComponent}
];
