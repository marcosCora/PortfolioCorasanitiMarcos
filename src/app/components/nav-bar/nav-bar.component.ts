import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @Output() sectionClicked = new EventEmitter<string>();

  onClick(sectionId: string) {
    
    this.sectionClicked.emit(sectionId);
  }
}

/*   scrollSkills(){
    console.log('inc de la funcion');
    window.location.hash = 'skills'
   /*  let sectionSkills = document.getElementById('skills');
    console.log('holi', sectionSkills);
    
    if(sectionSkills){
      sectionSkills.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      }); 
      
      
    }
    console.log('fina de la funcion');
  } */



