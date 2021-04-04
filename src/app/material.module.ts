import { NgModule } from "@angular/core";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    declarations: [],
    imports: [
        MatExpansionModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule
    ],
    exports: [
        MatExpansionModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule
    ]
})
export class AppMaterialModule {}