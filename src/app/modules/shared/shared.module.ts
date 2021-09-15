import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollBarComponent } from './components/scroll-bar/scroll-bar.component';
import { ListComponent } from './components/list/list.component';
import { PanelComponent } from './components/panel/panel.component';
import { InputComponent } from './components/input/input.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';


@NgModule({
  declarations: [
    ScrollBarComponent,
    ListComponent,
    PanelComponent,
    InputComponent,
    TooltipComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ScrollBarComponent,
    ListComponent,
    PanelComponent,
    InputComponent,
    TooltipComponent
  ]
})
export class SharedModule { }
