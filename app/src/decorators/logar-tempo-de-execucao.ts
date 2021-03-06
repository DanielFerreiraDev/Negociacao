export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any, //Se coloca um decorator numa método estatico, esse target é a função construtora da classe, se não retorna o prototype da classe
        propertyKey: string, //Nome do método que foi decorado
        descriptor: PropertyDescriptor //Sabe tudo sobre o método que queremos modificar, referência pro método original
    ) {

        const metodoOriginal = descriptor.value;
        
        descriptor.value = function(...args: any[]) {
            let divisor = 1;
            let unidade = 'milesegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args); //Chamar método original
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/divisor} ${unidade}`);
            retorno
        };

        return descriptor;
    }
}