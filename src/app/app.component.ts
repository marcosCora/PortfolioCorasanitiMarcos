import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AbautMeComponent } from './components/about-me/abaut-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.ShadowDom,
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavBarComponent, ProfileComponent, SkillsComponent, AbautMeComponent, ProjectsComponent, FooterComponent]
})
export class AppComponent {

    ngAfterViewInit() {
        this.scrollToSection('skills'); // o el ID que necesites
      }

    scrollToSection(sectionId: string) {
        let element = document.getElementById(sectionId);
        console.log(sectionId, 'hola');
        console.log(element, 'hola');
        
        if (element) {
            console.log('holalala');
            
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

}