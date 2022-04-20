export abstract class View<T> { //Toda classe abstrata pode ter 0 ou mais métodos abstratos(um método que a classse pai não sabe como vai ser implementado)

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    public update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string; //Não pode esquecer de implementar esse método nas classes filhas caso for instanciado.
}