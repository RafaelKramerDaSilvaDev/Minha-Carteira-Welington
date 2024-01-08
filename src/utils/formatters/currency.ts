export function currency(value?: string | number): string {
  if (!value) return "R$ 0,00";

  const formater = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formater.format(Number(value));
}
