import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { LoginInRoutes } from './login.routing';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        RouterModule.forChild(LoginInRoutes),
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
