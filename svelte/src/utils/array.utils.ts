export function checkIfIsArrayWithItens(array: Array<any>): boolean {
  return array && Array.isArray(array) && array.length > 0;
}
