export function checkIfIsArrayWithItens(array?: Array<any>): boolean {
  if (!array) return false;

  return Array.isArray(array) && array.length > 0;
}
