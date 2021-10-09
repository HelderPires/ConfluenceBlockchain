import { Component, Input } from '@angular/core';
import { NavbarComponentType } from '../../../../types/navbar-components';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  @Input() leftComponents: Array<NavbarComponentType> = [];
  @Input() rightComponents: Array<NavbarComponentType> = [];
}
