export class NegociacoesView {

    private elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    template(): string { //Declarar o template para a view
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        `;
    }
    update(): void {
        this.elemento.innerHTML = this.template();  //Qualquer html que jogar dentro vai ser transformado em elementos do DOM(passando o elemento capturado no construtor). 
    }

}