import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display: none}}
    `]
})
export class NavBarComponent {

}
