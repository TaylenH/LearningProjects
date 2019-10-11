import arraySort from './arraySorter';

describe('suite of array tests', () => {
  it('just strings', () => {
    expect(arraySort(['hi', 'bye'])).toEqual({arr1: ['hi', 'bye'], arr2: []});
  });

  it('just numbers', () => {
    expect(arraySort([1, 2])).toEqual({arr1: [], arr2: [1, 2]});
  });

  it('both', () => {
    expect(arraySort(['hi', 'bye', 1, 2, 'last']))
    .toEqual({
      arr1: [
        'hi',
        'bye',
        'last'
      ],
      arr2: [
        1,
        2
      ]
    });
  });
});
