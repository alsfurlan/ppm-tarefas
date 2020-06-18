import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.interface';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefa[];

  constructor() { 
    this.tarefas = [];
  }

  getTarefas() {
    return this.tarefas;
  }

  adicionar(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
  }
}
