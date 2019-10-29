import { NgModule } from '@angular/core';
import { MatNativeDateModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
    imports: [
        MatTabsModule,
        MatSelectModule,
        MatNativeDateModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatTabsModule,
        MatSelectModule,
        MatNativeDateModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule
    ],

})

export class MaterialModule { }
