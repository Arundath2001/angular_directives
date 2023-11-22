import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showTable = false;
  currentColumnStyle = 'default';

  toggleTable() {
    this.showTable = !this.showTable;
  }

  changeColumnStyle() {
    this.currentColumnStyle = this.currentColumnStyle === 'default' ? 'alternate' : 'default';
  }
}
