import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  public projects : Project[] =[{
    tittle : 'Monitoreo de plantas',
    description : 'Como proyecto personal, desarrollé una aplicación web full-stack utilizando Angular en el front-end y Java Spring Boot en el back-end. Esta aplicación permite a los usuarios explorar y analizar en profundidad datos de grandes corporaciones, como Coca-Cola. Al cargar los datos de una planta específica, los usuarios pueden visualizar una amplia gama de métricas y estadísticas. Además, la aplicación cuenta con un sistema de gestión de usuarios.',
    technologies : ['../../../assets/Icons/angular.svg', '../../../assets/Icons/spring.svg', '../../../assets/Icons/java.svg', '../../../assets/Icons/mysql.svg', '../../../assets/Icons/jwt.svg'],
    repository : 'https://github.com/marcosCora/monitoreo-plantas-api',
    img : '../../../assets/proyects/sipbites.png'
  },
  {
    tittle : 'Simulacion laboral en No Country',
    description : 'Construimos una plataforma para apoyar a santuarios de animales. Con Angular y Spring Boot, desarrollamos una solución que conecta a donantes con organizaciones, facilitando la recaudación de fondos. Utilizamos Scrum como metodología agil respetando los sprints como también las reuniones diarias y Jira para gestionar las tareas del proyecto y crear una herramienta con funcionalidades como la creación de campañas y el seguimiento de donaciones.',
    technologies : ['../../../assets/Icons/angular.svg', '../../../assets/Icons/bootstrap.svg','../../../assets/Icons/spring.svg',  '../../../assets/Icons/java.svg', '../../../assets/Icons/mysql.svg', '../../../assets/Icons/jwt.svg'],
    repository : 'https://github.com/marcosCora/Front-No-Country-ForeverFunding',
    img : '../../../assets/proyects/sipbites.png'
  },
  {
    tittle : 'API RestFull VTV',
    description : ' Luego de realizar un curso de Spring boot en TodoCode Academy decidi realizar una API RestFull simulando un sistema para la VTV Argentina, donde los distintos inspectores hacen inspecciones sobre vehículos devolviendo un resultado de estado en esos mismos. Para realizar exitosamente la conexión con la base de datos MySql utilice Hibernate como proveedor de JPA. Tambien decidi utilizar una arquitectura MVC para poder estructurar bien el proyecto con una buena organización.',
    technologies : ['../../../assets/Icons/spring.svg',  '../../../assets/Icons/java.svg', '../../../assets/Icons/mysql.svg', '../../../assets/Icons/postman.svg'],
    repository : 'https://github.com/marcosCora/vtvApi',
    img : '../../../assets/proyects/api-vtv.jpg'
  },
  {
    tittle : 'Blog sobre comidas y bebidas',
    description : ' Como proyecto de equipo, desarrollamos una plataforma web interactiva enfocada en el mundo de la cocina. Esta aplicación permite a los usuarios explorar, crear y compartir recetas, además de gestionar su propio recetario personal. Los usuarios pueden organizar sus recetas favoritas en listas personalizadas y descubrir nuevas opciones a través de un feed comunitario. Desarrollada como parte de un proyecto académico, esta plataforma fomenta la interacción entre los amantes de la cocina.',
    technologies : ['../../../assets/Icons/angular.svg', '../../../assets/Icons/typescript.svg', '../../../assets/Icons/html5.svg', '../../../assets/Icons/css.svg', '../../../assets/Icons/bootstrap.svg'],
    repository : 'https://github.com/marcosCora/sipAndBites-Laboratorio4',
    img : '../../../assets/proyects/sipbites.png'
  }];

}
