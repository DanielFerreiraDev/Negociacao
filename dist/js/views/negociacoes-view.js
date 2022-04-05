export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template() {
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
    update() {
        this.elemento.innerHTML = this.template(); //Qualquer html que jogar dentro vai ser transformado em elementos do DOM(passando o elemento capturado no construtor). 
    }
}
