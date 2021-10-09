import { FormControlModel } from './form-control-model';
import { TextboxFormField } from './texbox-control-model';

export const tokenFormFields: FormControlModel<string>[] = [
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

export const exchangeFormFields: FormControlModel<string>[] = [
  new TextboxFormField({
    key: 'ExchangeName',
    label: 'Exchange name',
    type: 'text',
    required: true,
    order: 1
  }),

  new TextboxFormField({
    key: 'ExchangeAddress',
    label: 'Exchange Address',
    type: 'text',
    required: true,
    order: 2
  })
];

export const lenderFormFields: FormControlModel<string>[] = [
  new TextboxFormField({
    key: 'LenderName',
    label: 'Lender name',
    type: 'text',
    required: true,
    order: 1
  }),

  new TextboxFormField({
    key: 'LenderAddress',
    label: 'Lender Address',
    type: 'text',
    required: true,
    order: 2
  })
];

export const networkFormFields: FormControlModel<string>[] = [
  new TextboxFormField({
    key: 'NetworkName',
    label: 'Network name',
    type: 'text',
    required: true,
    order: 1
  }),

  new TextboxFormField({
    key: 'RPCURL',
    label: 'RPC URL',
    type: 'text',
    required: true,
    order: 2
  }),

  new TextboxFormField({
    key: 'ChainID',
    label: 'Chain ID',
    type: 'text',
    required: true,
    order: 3
  }),

  new TextboxFormField({
    key: 'CurrencySymbol',
    label: 'Currency Symbol',
    type: 'text',
    order: 4
  }),

  new TextboxFormField({
    key: 'BlockExplorer',
    label: 'Block Explorer',
    type: 'text',
    order: 5
  }),
];
