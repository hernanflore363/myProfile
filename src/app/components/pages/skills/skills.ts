import { Component } from '@angular/core';
import K8s from './bloques/k8s/k8s';
import { Docker } from './bloques/docker/docker';
import { ArgoCd } from "./bloques/argo-cd/argo-cd";
import { Kafka } from "./bloques/kafka/kafka";
import { Redis } from './bloques/redis/redis';
import { Angular } from "./bloques/angular/angular";
import { Golang } from "./bloques/golang/golang";
import { Nestjs } from './bloques/nestjs/nestjs';

@Component({
  selector: 'app-skills',
  imports: [K8s, Docker, ArgoCd, Kafka, Redis, Angular, Golang, Nestjs],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export default class Skills {

  isOpen = false;
  isSelect = "";

  open(band: string) {
    this.isOpen = true;
    this.isSelect = band;
  }

  close() {
    this.isOpen = false;
    this.isSelect = "";
  }
}
