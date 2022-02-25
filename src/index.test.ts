jest.useFakeTimers()
jest.spyOn(global, `setTimeout`)

import esperar from './index'

describe(`esperar`, () => {
  it.each([0, 0.5, 1, 2])(`deve esperar por %s segundos`, (espera: number) => {
    esperar(espera)
    
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), espera * 1000)
  })
})
