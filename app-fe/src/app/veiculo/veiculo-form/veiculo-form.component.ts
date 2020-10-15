import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DefaultModel } from '../../models/default';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DefaultService } from '../../services/default.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

/**
 * @author Bruno Touron
 *
 */

@Component({
  selector: 'app-Veiculo-form',
  templateUrl: './Veiculo-form.component.html',
  styleUrls: ['./Veiculo-form.component.css']
})

export class VeiculoFormComponent implements OnInit {
  model = new DefaultModel();
  formCadastro: FormGroup;
  showMessages = false;
  errorMessage: string;

  @ViewChild('inputInicial') inputInicial: ElementRef<HTMLInputElement>;

  constructor(protected service: DefaultService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
    service.setRoute('veiculos');
  }

  ngOnInit() {

    this.formCadastro = this.formBuilder.group({
      veiculo: [''],
      marca: [''],
      ano: [''],
      descricao: [''],
      vendido: [''],
    });

    if (this.activatedRoute.snapshot.params.id) {

        this.service.getById(this.activatedRoute.snapshot.params.id).subscribe((modelAPI) => {
          this.model = modelAPI;
          this.formCadastro.patchValue(modelAPI);
        });
      }


    this.inputInicial.nativeElement.focus();

  }

  public async save() {

    this.model = { ...this.model, ...this.formCadastro.value };

    this.errorMessage = '';

    if (this.formCadastro.invalid) {
      this.showMessages = true;
    } else {
      this.service.save(this.model).subscribe(() => {
        this.router.navigate(['veiculos']);
      },
        (erro) => { this.errorMessage = erro.error; });
    }
  }

}
