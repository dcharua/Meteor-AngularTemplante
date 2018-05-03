import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import template from './navbar.component.html';
import style from './navbar.component.scss';

declare var $:any;

@Component({
	selector: 'navbar',
	template,
	styles: [ style ]
})
export class NavbarComponent {
	public url: string;
	public icons: Array<String>;
	constructor(private router: Router) {

	}


}
