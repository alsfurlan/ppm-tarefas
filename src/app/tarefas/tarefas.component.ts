import { Component, OnInit } from '@angular/core';
import { Tarefa } from './tarefa.interface';
import { TarefaService } from './tarefa.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  novaTarefa: string;
  tarefas: Tarefa[];

  constructor(
    private tarefaService: TarefaService
  ) { 
    this.tarefas = this.tarefaService.getTarefas();
  }

  ngOnInit(): void {
  }

  adicionar() {
    const tarefa = { descricao: this.novaTarefa };
    this.tarefaService.adicionar(tarefa);
    this.novaTarefa = '';
  }

}
