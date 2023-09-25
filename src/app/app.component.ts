import {Component, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hidrogênio', weight: 1.0079, symbol: 'H'},
  {name: 'Hélio', weight: 4.0026, symbol: 'He'},
  {name: 'Lítio', weight: 6.941, symbol: 'Li'},
  {name: 'Berílio', weight: 9.0122, symbol: 'Be'},
  {name: 'Boro', weight: 10.811, symbol: 'B'},
  {name: 'Carbono', weight: 12.0107, symbol: 'C'},
  {name: 'Nitrogênio', weight: 14.0067, symbol: 'N'},
  {name: 'Oxigênio', weight: 15.9994, symbol: 'O'},
  {name: 'Flúor', weight: 18.9984, symbol: 'F'},
  {name: 'Neônio', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'interactivetablebuttons-app';
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
