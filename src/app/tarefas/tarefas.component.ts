import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  novaTarefa: string;
  tarefas: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  adicionar() {
    this.tarefas.push(this.novaTarefa);
    this.novaTarefa = '';
  }

}
