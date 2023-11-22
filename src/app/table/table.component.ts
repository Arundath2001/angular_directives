import { Component } from '@angular/core';
interface empolyee {
  empid: number;
  empname: string;
  age: number;
  place : string;
  [key: string]: number | string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  data: empolyee[] = [
    { empid: 1, empname: 'Arundath', age: 22, place :'Kozhikode' },
    { empid: 2, empname: 'Jareesh', age: 20 , place : 'Thalassery' },
    { empid: 3, empname: 'Rohith', age: 23, place: 'Kannur' },
    { empid: 4, empname: 'Akhil', age: 21, place: 'Kannur' },
    { empid: 2, empname: 'Aromal', age: 22, place : 'Thalassery' },
    
  ];
displaydata = false;
changecolor = false;
display() {
  this.displaydata = !this.displaydata;
  }
columncolor() {
  this.changecolor = !this.changecolor;
}
header(): { [key: string]: string } {
  if (this.changecolor) {
    return {
      'background-color': 'darkblue',
      'color': 'white'
    };
  } else {
    return {
      'background-color': 'greenyellow',
      'color': 'darkblue'
    };
  }
}
content(): { [key: string]: string } {
  if (this.changecolor) {
    return {
      'background-color': 'greenyellow',
      'color': 'white'
    };
  } else {
    return {
      'background-color': 'darkblue',
      'color': 'white'
    };
  }
}
}