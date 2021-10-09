
import { Component, OnInit } from '@angular/core';
import { TokenAPIService } from 'src/app/modules/shared/services/token-api.service';
import { Store, select } from '@ngrx/store';
import { retrievedTokenList } from '../../state/actions/tokens.actions';
import { selectTokens } from '../../state/selectors/token.selectors';
import { selectExchanges } from '../../state/selectors/exchanges.selectors';
import { retrievedExchangeList } from '../../state/actions/exchange.actions';
import { MatDialog } from '@angular/material/dialog';
import { FormModalComponent } from '../shared/components/form-modal/form-modal.component';
import { FormControlService } from '../../modules/shared/services/form-control-service';
import { tokenFormFields, exchangeFormFields, networkFormFields, lenderFormFields } from '../../models/form-fields';


@Component({
  selector: 'app-dbmanage',
  templateUrl: './dbmanage.component.html',
  styleUrls: ['./dbmanage.component.scss']
})
export class DBManageComponent implements OnInit {

  tokens$ = this.store.pipe(select(selectTokens));
  exchanges$ = this.store.pipe(select(selectExchanges));

  tokenFormData = {
    data: {
      form: this.formService.toFormGroup(tokenFormFields),
      labels: this.formService.getLabels(tokenFormFields),
      title: 'Add Token',
    }
  }
  exchangeFormData = {
    data: {
      form: this.formService.toFormGroup(exchangeFormFields),
      labels: this.formService.getLabels(exchangeFormFields),
      title: 'Add Exchange',
    }
  }
  networkFormData = {
    data: {
      form: this.formService.toFormGroup(networkFormFields),
      labels: this.formService.getLabels(networkFormFields),
      title: 'Add Network',
    }
  }
  lenderFormData = {
    data: {
      form: this.formService.toFormGroup(lenderFormFields),
      labels: this.formService.getLabels(lenderFormFields),
      title: 'Add Lender',
    }
  }

  constructor(
    private tokensService: TokenAPIService,
    private store: Store,
    public dialog: MatDialog,
    public formService: FormControlService
  ) {}

  ngOnInit() {
    this.tokensService
      .getTokens()
      .subscribe((tokens) => {
        this.store.dispatch(retrievedTokenList({ tokens }))
      });
      this.tokensService
      .getExchanges()
      .subscribe((exchanges) => {
        this.store.dispatch(retrievedExchangeList({ exchanges }))
      });
  }
  openModal(formData: any): void {
    const dialogRef = this.dialog.open(FormModalComponent, formData
    );

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
