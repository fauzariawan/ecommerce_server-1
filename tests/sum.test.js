const sum = require('../helpers/sum')

test('test add 1 + 2 equal to 3', (done) => {
  expect(sum(1, 3)).toBe(4);
  done()
})

test('test object assignment', (done) => {
  let data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
  expect(data).not.toEqual({ one: 3, two: 4 })
  done()
})

test('untuk cek true and false', (done) => {


  done()
})