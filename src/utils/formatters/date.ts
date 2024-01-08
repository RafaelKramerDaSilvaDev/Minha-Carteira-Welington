export function shortDate(value?: Date | string | number): string {
  if (!value) return '';

  if (typeof value === 'string' || typeof value === 'number') {
    value = new Date(value);
  }

  return value?.toLocaleDateString('pt-BR', {
    dateStyle: 'short',
  });
}
