import { Component, OnInit } from '@angular/core';
import { DefaultModel } from '../../models/default';
import { DefaultService } from '../../services/default.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Router, ParamMap } from '@angular/router';

/**
 * @author Bruno Touron
 *
 */

@Component({
  selector: 'app-Veiculo-view',
  templateUrl: './Veiculo-view.component.html',
  styleUrls: ['./Veiculo-view.component.css']
})
export class VeiculoViewComponent implements OnInit {
  model = new DefaultModel();
  compkey = new String();

  constructor(
    protected service: DefaultService,
    protected activatedRoute: ActivatedRoute,
    private route: ActivatedRoute) {
    service.setRoute('veiculos');
  }

  ngOnInit() {

    this.route.queryParamMap.subscribe((params) => {

      //let paramsUrlKey = '/compkey/0196/%20%20/AIPC/25/81/3/07%20%20/2/em170e2aipc-25-01047%20%20%20%20%20';

      let paramsUrlKey = '/compkey/' + params.get('codProjAenv') +
        '/' + params.get('codModlAenv') +
        '/' + params.get('sglPubl') +
        '/' + params.get('codCapA100') +
        '/' + params.get('codSucpA100') +
        '/' + params.get('codSsecA100') +
        '/' + params.get('numFig') +
        '/' + params.get('codVarFig') +
        '/' + params.get('codIlst') + '/';


      this.service.getByIdComp(paramsUrlKey).subscribe((modelAPI) => {
        this.model = modelAPI;

        this.model['datInclDado'].setValue(new Date(modelAPI['datInclDado']).toISOString().substring(0, 10));

      });

    });

  }
}
