import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> { //Toda classe abstrata pode ter 0 ou mais métodos abstratos(um método que a classse pai não sabe como vai ser implementado)

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique.`)
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string; //Não pode esquecer de implementar esse método nas classes filhas caso for instanciado.
}