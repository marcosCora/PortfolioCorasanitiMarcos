import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.ShadowDom,
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavBarComponent]
})
export class AppComponent {


}
