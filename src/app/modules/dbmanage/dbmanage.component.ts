import { Component, OnInit } from '@angular/core';
import { TokenAPIService } from 'src/app/modules/shared/services/token-api.service';
import { Store, select } from '@ngrx/store';
import { retrievedTokenList } from '../../state/actions/tokens.actions';
import { selectTokens } from '../../state/selectors/token.selectors';
import { selectExchanges } from '../../state/selectors/exchanges.selectors';
import { retrievedExchangeList } from '../../state/actions/exchange.actions';
import { MatDialog } from '@angular/material/dialog';
import { Token } from '../../state/models/tokens.model';
import { FormModalComponent } from '../shared/components/form-modal/form-modal.component';
import { FormControlModel } from '../../models/form-control-model';
import { TextboxFormField } from '../../models/texbox-control-model';
import { FormControlService } from '../../modules/shared/services/form-control-service';

const fields: FormControlModel<string>[] = [
  new TextboxFormField({
    key: 'TokenName',
    label: 'Token name',
    type: 'text',
    required: true,
    order: 1
  }),

  new TextboxFormField({
    key: 'TokenAddress',
    label: 'TokenAddress',
    type: 'text',
    required: true,
    order: 2
  })
];
@Component({
  selector: 'app-dbmanage',
  templateUrl: './dbmanage.component.html',
  styleUrls: ['./dbmanage.component.scss']
})
export class DBManageComponent implements OnInit {

  tokens$ = this.store.pipe(select(selectTokens));
  exchanges$ = this.store.pipe(select(selectExchanges));

  form = this.formService.toFormGroup(fields)

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
  openModal(): void {
    const dialogRef = this.dialog.open(FormModalComponent, {
      data: {
        form: this.form,
        title: 'Add Token',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('token is', result);
    });
  }
}
