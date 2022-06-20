import {Negociacao} from './negociacao';
import {Imprimivel} from "../interfaces/imprimivel.js";
import { Comparavel } from '../interfaces/comparavel.js';

export class Negociacoes implements Imprimivel, Comparavel<Negociacoes>{
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