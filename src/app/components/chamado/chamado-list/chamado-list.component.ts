import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from 'src/app/models/chamado';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {

  ELEMENT_DATA: Chamado[] = [
    {
      id: 1,
      dataAbertura: '21/06/2021',
      dataFechamento: '21/06/2021',
      prioridade: 'ALTA',
      status: 'ANDAMENTO',
      titulo: 'CHAMADO 1',
      descricao: 'Teste chamado 1',
      tecnico: 1,
      cliente: 6,
      nomeCliente: 'Valdir Cezar',
      nomeTecnico:  'Albert einsten' 
    }
  ]

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
