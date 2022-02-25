export default (esperaEmSegundos: number = 0) =>
  new Promise<void>(resolve => setTimeout(() => resolve(), esperaEmSegundos * 1000))
