import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ProfileComponent } from './components/profile/profile.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.ShadowDom,
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavBarComponent, ProfileComponent]
})
export class AppComponent {


}
