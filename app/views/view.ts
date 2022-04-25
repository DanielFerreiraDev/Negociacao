export abstract class View<T> { //Toda classe abstrata pode ter 0 ou mais métodos abstratos(um método que a classse pai não sabe como vai ser implementado)

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor) as HTMLInputElement;
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template
            .replace(/<script>[\s\S/]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string; //Não pode esquecer de implementar esse método nas classes filhas caso for instanciado.
}