import { Routes } from '@angular/router';
import path from 'path';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    {path: 'about-me', component: ProfileComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'projects', component: ProjectsComponent}
];
