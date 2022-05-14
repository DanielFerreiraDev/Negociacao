export function logarTempoDeExecucao() {
    return function(
        target: any, //Se coloca um decorator numa método estatico, esse target é a função construtora da classe, se não retorna o prototype da classe
        propertyKey: string, //Nome do método que foi decorado
        descriptor: PropertyDescriptor //Sabe tudo sobre o método que queremos modificar, referência pro método original
    ) {
        return descriptor;
    }
}