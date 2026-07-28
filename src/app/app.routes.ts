import { Routes } from '@angular/router';
import HomeComponent from './components/pages/home/home';
import AboutComponent from './components/pages/about/about';
import ExperienceComponent from './components/pages/experience/experience';
import ProjectsComponent from './components/pages/projects/projects';
import SkillsComponent from './components/pages/skills/skills';
import ContactComponent from './components/pages/contact/contact';
import ArquitecturaComponent from './components/pages/arquitectura/arquitectura';
import Error404Component from './components/pages/error404/error404';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'arquitectura', component: ArquitecturaComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: Error404Component, pathMatch: 'full' },
];