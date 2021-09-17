import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollBarComponent } from './components/scroll-bar/scroll-bar.component';
import { InputComponent } from './components/input/input.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './components/card/card.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { GlassPanelComponent } from './components/glass-panel/glass-panel.component';
import { FormComponent } from './components/form/form.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ScrollBarComponent,
    InputComponent,
    TooltipComponent,
    CardComponent,
    GlassPanelComponent,
    FormComponent,
    DialogComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    CardComponent,
    ScrollBarComponent,
    InputComponent,
    TooltipComponent,
    DialogComponent,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    InputComponent
  ]
})
export class SharedModule { }
