import getSelectedPOV, { PossibleEvent } from './get-selected-pov'

describe('getSelectedPOV', () => {
  const setter = jest.fn()

  afterEach(() => setter.mockReset())

  it('calls the setter if the target value is found', () => {
    const fn = getSelectedPOV(setter)
    const value = 'Test'
    const event: PossibleEvent = { target: { value } }
    fn(event)
    expect(setter).toHaveBeenCalledWith(value)
  })

  it('doesn\'t call the setter if no target value is found', () => {
    const fn = getSelectedPOV(setter)
    const event: PossibleEvent = {}
    fn(event)
    expect(setter).not.toHaveBeenCalled()
  })
})
