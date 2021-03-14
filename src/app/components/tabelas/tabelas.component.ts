import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';
import { Tabela } from './tabelas';



@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.css']
})
export class TabelasComponent   {

  constructor(private fb: FormBuilder,
              private changeDetectorRefs: ChangeDetectorRef) { }
  cadastro = new FormGroup({
    nome: new FormControl(),
    descricao: new FormControl(),
    dateInicial: new FormControl(),
    dateFinal: new FormControl()
  });
   tabelas: Tabela[] = [];
  // tslint:disable-next-line:typedef
  get f() {
    return this.cadastro.controls;
  }

  displayedColumns: string[] = [ 'nome', 'descricao', 'dateInicial', 'dateFinal'];
  dataSource = new MatTableDataSource(this.tabelas);
  tabelasPreenchida = false;
  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

    submit(): void{
    const tabela = this.cadastro.getRawValue() as Tabela;
    this.salvar(tabela);
  }
   // tslint:disable-next-line:typedef
   salvar(tabela: Tabela){
     this.tabelas.push(tabela);
     this.tabelasPreenchida = true;
     this.dataSource.data = this.tabelas;
  }
}
