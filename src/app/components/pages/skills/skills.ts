import { Component } from '@angular/core';
import K8s from './bloques/k8s/k8s';
import { Docker } from './bloques/docker/docker';
import { ArgoCd } from "./bloques/argo-cd/argo-cd";
import { Kafka } from "./bloques/kafka/kafka";

@Component({
  selector: 'app-skills',
  imports: [K8s, Docker, ArgoCd, Kafka],
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
