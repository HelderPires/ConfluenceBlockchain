import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Token } from '../../../state/models/tokens.model';
@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor() { }
}


@Injectable({ providedIn: 'root' })
export class TokenAPIService {
  // constructor(private http: HttpClient) {}
  constructor() {}

  getTokens(): Observable<Array<Token>> {
    return of([
      {
        name: 'DAI',
        address: 'xOOOOOOOOOO'
      },
      {
        name: 'USDT',
        address: 'xOOOOOOOOOO'
      },
      {
        name: 'USDC',
        address: 'xOOOOOOOOOO'
      },
      {
        name: 'USDC',
        address: 'xOOOOOOOOOO'
      },
      {
        name: 'USDC',
        address: 'xOOOOOOOOOO'
      },
      {
        name: 'USDC',
        address: 'xOOOOOOOOOO'
      },
      {
        name: 'USDC',
        address: 'xOOOOOOOOOO'
      },
      {
        name: 'USDC',
        address: 'xOOOOOOOOOO'
      },
      {
        name: 'USDC',
        address: 'xOOOOOOOOOO'
      }
    ])
  }
  getExchanges(): Observable<Array<Token>> {
    return of([
      {
        name: '1inch',
        address: 'xOOOOOOOOOO'
      },
      {
        name: 'QuickSwap',
        address: 'xOOOOOOOOOO'
      },
      {
        name: 'SushiSwap',
        address: 'xOOOOOOOOOO'
      }
    ])
  }
}
