import { Component, OnInit } from '@angular/core';
import * as aos from 'aos'

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {

  public tecnologias: { front: { name: string, exp: string, img: string }[], back: { name: string, exp: string, img: string }[], dbms: { name: string, exp: string, img: string }[], cloud: { name: string, exp: string, img: string }[]} = {
    front: [
      {
        name: 'Angular',
        img: './assets/img/angular_logo.svg',
        exp: '4 años'
      },
      {
        name: 'React',
        img: './assets/img/react_logo.svg',
        exp: '1 año'
      },
      {
        name: 'Bootstrap',
        img: './assets/img/bootstrap_logo.svg',
        exp: '3 años'
      },
      {
        name: 'Sass',
        img: './assets/img/sass_logo.svg',
        exp: '3 años'
      }
    ],
    back: [
      {
        name: 'Nodejs',
        img: './assets/img/nodejs_logo.svg',
        exp: '4 años'
      },
      {
        name: 'Typescript',
        img: './assets/img/typescript_logo.svg',
        exp: '4 años'
      },
      {
        name: 'PHP',
        img: './assets/img/php_logo.svg',
        exp: '2 años'
      },
      {
        name: 'Laravel',
        img: './assets/img/laravel_logo.svg',
        exp: '2 años'
      },
      {
        name: 'Docker',
        img: './assets/img/docker_logo.svg',
        exp: '4 años'
      },
    ],
    dbms: [
      {
        name: 'MongoDB',
        img: './assets/img/mongodb_logo.svg',
        exp: '4 años'
      },
      {
        name: 'Mysql',
        img: './assets/img/mysql_logo.svg',
        exp: '4 años'
      },
      {
        name: 'Postgresql',
        img: './assets/img/postgresql_logo.svg',
        exp: '2 años'
      },
    ],
    cloud: [
      {
        name: 'Heroku',
        img: './assets/img/heroku_logo.svg',
        exp: '3 años'
      },
      {
        name: 'Azure',
        img: './assets/img/microsoft_logo.svg',
        exp: '1 años'
      },
      {
        name: 'PM2',
        img: './assets/img/pm2_logo.svg',
        exp: '4 años'
      },
      {
        name: 'Nginx',
        img: './assets/img/nginx_logo.svg',
        exp: '3 años'
      },
      {
        name: 'Google Cloud Plataform',
        img: './assets/img/google-cloud_logo.svg',
        exp: '3 años'
      },
      {
        name: 'Ubuntu',
        img: './assets/img/ubuntu_logo.svg',
        exp: '4 años'
      },
    ]
  }

  ngOnInit(): void {
    aos.init()
    window.addEventListener('load', aos.refresh)
  }

}
