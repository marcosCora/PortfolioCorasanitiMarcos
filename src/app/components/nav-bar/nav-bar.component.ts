import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  scrollSkills(){
    let sectionSkills = document.getElementById('skills');
    if(sectionSkills){
      sectionSkills.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
    }
  }


}
