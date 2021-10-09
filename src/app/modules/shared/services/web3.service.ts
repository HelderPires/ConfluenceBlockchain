import { Injectable } from '@angular/core';
import Web3 from "web3";
import { AbiItem } from 'web3-utils'
import { Store, select } from '@ngrx/store';
import { selectTokens } from '../../../state/selectors/token.selectors';
import ERC20 from '../../../ABIs/ERC20.json';

declare const window:any;

// This service is based on external code and need further review

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  tokens$ = this.store.pipe(select(selectTokens));
  web3 = new Web3('https://main-light.eth.linkpool.io/');
  accounts: Array<String> = [];

  constructor(public store: Store) { }

  private getAccounts = async () => {
    try {
        return await window.ethereum.request({ method: 'eth_accounts' });
    } catch (e) {
        return [];
    }
  }

  public async getBalance(walletAddress: string) {
    console.log(ERC20)
    // this.tokens$.forEach((token) => {
      const contract = new this.web3.eth.Contract(ERC20 as any, '0xdAC17F958D2ee523a2206206994597C13D831ec7' as any);
      const result = await contract.methods.balanceOf(walletAddress).send;
      // const format = this.web3.utils.fromWei(result.toString());
      // console.log(contract);
      console.log(contract);
      // console.log(format);
    // });

    // try {
    //   return this.web3.eth.getBalance(address).then(v => console.log(v))
    // } catch (e) {
    //     return [];
    // }
  }
  public openMetamask = async () => {
    window.web3 = new Web3(window.ethereum);
    let addresses = await this.getAccounts();
    if (!addresses.length) {
        try {
            addresses = await window.ethereum.enable();
        } catch (e) {
            return false;
        }
    }
    return addresses.length ? addresses[0] : null;
  };

  async loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable;
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        window.alert('Non-Ethereum browser detected. You Should consider using MetaMask!');
    }
  }
}
