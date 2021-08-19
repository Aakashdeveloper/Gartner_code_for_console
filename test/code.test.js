const clickCount = require('../app');

// Using Jest for testing
test('function should only return when count is less than 10', () => {
  var inputArray = [
    {
      ip: '22.22.22.22',
      count: 12,
      data: {
        '3': [Object],
        '6': [Object],
        '7': [Object],
        '8': [Object],
        '9': [Object],
        '10': [Object],
        '11': [Object],
        '12': [Object],
        '14': [Object],
        '17': [Object],
        '24': [Object]
      }
    },
    {
      ip: '11.11.11.11',
      count: 6,
      data: { '3': [Object], '7': [Object], '8': [Object] }
    },
    {
      ip: '44.44.44.44',
      count: 3,
      data: { '3': [Object], '7': [Object], '14': [Object] }
    },
    { ip: '33.33.33.33', count: 1, data: { '8': [Object] } },
    { ip: '66.66.66.66', count: 1, data: { '8': [Object] } },
    {
      ip: '55.55.55.55',
      count: 10,
      data: {
        '14': [Object],
        '15': [Object],
        '16': [Object],
        '17': [Object],
        '18': [Object],
        '19': [Object]
      }
    }
  ]
  var expectedArray = [
    {
      ip: '11.11.11.11',
      count: 6,
      data: { '3': [Object], '7': [Object], '8': [Object] }
    },
    {
      ip: '44.44.44.44',
      count: 3,
      data: { '3': [Object], '7': [Object], '14': [Object] }
    },
    { ip: '33.33.33.33', count: 1, data: { '8': [Object] } },
    { ip: '66.66.66.66', count: 1, data: { '8': [Object] } },
    {
      ip: '55.55.55.55',
      count: 10,
      data: {
        '14': [Object],
        '15': [Object],
        '16': [Object],
        '17': [Object],
        '18': [Object],
        '19': [Object]
      }
    }
  ]
  expect(clickCount.checkLength(inputArray)).toEqual(expectedArray)
})

test('Testing with not equal for provided array', () => {
  var inputArray = [
    {
      ip: '22.22.22.22',
      count: 10,
      data: {
        '3': [Object],
        '6': [Object],
        '7': [Object],
        '8': [Object],
        '9': [Object],
        '10': [Object],
        '11': [Object],
        '12': [Object],
        '14': [Object],
        '17': [Object],
        '24': [Object]
      }
    },
    {
      ip: '11.11.11.11',
      count: 6,
      data: { '3': [Object], '7': [Object], '8': [Object] }
    },
    {
      ip: '44.44.44.44',
      count: 3,
      data: { '3': [Object], '7': [Object], '14': [Object] }
    },
    { ip: '33.33.33.33', count: 1, data: { '8': [Object] } },
    { ip: '66.66.66.66', count: 1, data: { '8': [Object] } },
    {
      ip: '55.55.55.55',
      count: 10,
      data: {
        '14': [Object],
        '15': [Object],
        '16': [Object],
        '17': [Object],
        '18': [Object],
        '19': [Object]
      }
    }
  ]
  var expectedArray = [
    {
      ip: '11.11.11.11',
      count: 6,
      data: { '3': [Object], '7': [Object], '8': [Object] }
    },
    {
      ip: '44.44.44.44',
      count: 3,
      data: { '3': [Object], '7': [Object], '14': [Object] }
    },
    { ip: '33.33.33.33', count: 1, data: { '8': [Object] } },
    { ip: '66.66.66.66', count: 1, data: { '8': [Object] } },
    {
      ip: '55.55.55.55',
      count: 10,
      data: {
        '14': [Object],
        '15': [Object],
        '16': [Object],
        '17': [Object],
        '18': [Object],
        '19': [Object]
      }
    }
  ]
  expect(clickCount.checkLength(inputArray)).not.toEqual(expectedArray)
})