import { Routes } from '@angular/router';
import path from 'path';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

export const routes: Routes = [
    {path: 'home', component: ProfileComponent},
    {path: 'about-me', component: AboutMeComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'projects', component: ProjectsComponent}
];
