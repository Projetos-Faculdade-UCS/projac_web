/**
 * Converte um número para uma string formatada como moeda,
 * com duas casas decimais, vírgulas para decimais e pontos para milhares.
 * @param value
 * @returns
 * @example
 * number2Currency(12233.34) => 12.233,34
 * number2Currency(12233.00) => 12.233,00
 */
export function number2Currency(value: number): string {
    let newValue =  value.toFixed(2).replace('.', ',');
    newValue = newValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    return newValue;
}