import {Negociacao} from './negociacao';
import { Modelo } from '../interfaces/modelo';

export class Negociacoes implements Modelo<Negociacoes>{
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return [...this.negociacoes];
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    public ehIgual(negociacao: Negociacoes) {
        return JSON.stringify(this.negociacoes) == JSON.stringify(negociacao.lista());
    }

}