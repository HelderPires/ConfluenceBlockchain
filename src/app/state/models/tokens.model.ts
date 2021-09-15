import { Exchange } from './exchange.model';
export interface Token {
    name: string;
    address: string;
    exchanges?: Array<Exchange>
}
