const { deepClone } = require('../index')

const originData = [
  {
    name: 'test',
  }
]

const expectData = [
  {
    name: 'test'
  }
]

describe('default export', () => {
  it('case 001', () => {
    const result = deepClone(originData)
    result[0].name = 'test1'
    expect(originData[0].name).toEqual(expectData[0].name)
  })
  it('case anyway', () => {
    expect(1).toEqual(1)
  })
})
