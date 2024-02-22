import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { ContactComponent } from './components/contact/contact.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavBarComponent, ProfileComponent, SkillsComponent, ProjectsComponent , ContactComponent]
})
export class AppComponent {

    scrollToSection(sectionId: string) {
        let element = document.getElementById(sectionId);
        
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

}