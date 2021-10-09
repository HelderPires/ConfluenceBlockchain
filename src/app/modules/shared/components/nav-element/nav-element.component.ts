import { Component, Input } from '@angular/core';
import { NavbarComponentType } from '../../../../types/navbar-components';

@Component({
  selector: 'app-nav-element',
  templateUrl: './nav-element.component.html',
  styleUrls: ['./nav-element.component.scss']
})
export class NavElementComponent {
  @Input() component: NavbarComponentType = {type: 'text', link: ''};
}
