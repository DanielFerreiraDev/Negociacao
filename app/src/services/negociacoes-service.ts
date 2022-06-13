import {Negociacao} from "../models/negociacao.js";
import {NegociacaoDoDia} from "../interfaces/negociacao-do-dia.js";

export class NegociacoesService {

    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(response => response.json())
            .then((dados: NegociacaoDoDia[]) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao(
                        new Date(),
                        dadoDeHoje.vezes,
                        dadoDeHoje.montante
                    )
                })
            })
    }
}