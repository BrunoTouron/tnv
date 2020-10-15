import { Component, OnInit } from '@angular/core';
import { DefaultListComponent } from '../../default-list/default-list.component';

/**
 * @author Bruno Touron
 *
 */

@Component({
  selector: 'app-Veiculo-list',
  templateUrl: './Veiculo-list.component.html',
  styleUrls: ['./Veiculo-list.component.css']
})
export class VeiculoListComponent extends DefaultListComponent implements OnInit {
  filters = { Veiculo: '' };

  ngOnInit() {
  }

}
