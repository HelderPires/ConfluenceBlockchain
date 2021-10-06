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
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { MatOptionModule } from '@angular/material/core';
import { FormControlService } from '../shared/services/form-control-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';
import { ScrollbarComponent } from './components/scrollbar/scrollbar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    ScrollBarComponent,
    InputComponent,
    TooltipComponent,
    CardComponent,
    GlassPanelComponent,
    FormComponent,
    FormModalComponent,
    InputComponent,
    FormFieldComponent,
    NavbarComponent,
    ListComponent,
    ScrollbarComponent
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
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatFormFieldModule,
    ScrollingModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    InputComponent,
    FormFieldComponent,
    FormComponent,
    CardComponent,
    ScrollBarComponent,
    TooltipComponent,
    FormModalComponent,
    NavbarComponent,
    ListComponent,
    ScrollbarComponent,
    ScrollingModule
  ],
  providers:[
    FormControlService
  ]
})
export class SharedModule { }
