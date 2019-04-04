const quickSort = require("../quick-sort");

describe("Quick sort", () => {
  it("should sort small unsorted array of unique vals", () => {
    const array = [3, 1, 2];

    expect(quickSort(array)).toEqual(array.sort());
  });

  it("should sort medium unsorted array of unique vals", () => {
    const array = [3, 1, 2, 4, 7, 5, 6];

    expect(quickSort(array)).toEqual(array.sort());
  });

  it("should sort medium unsorted array of vals", () => {
    const array = [3, 1, 2, 4, 7, 5, 6, 5, 6, 4, 3];

    expect(quickSort(array)).toEqual(array.sort());
  });

  it("should sort large unsorted array of vals", () => {
    const array = [
      3,
      1,
      2,
      4,
      7,
      5,
      6,
      5,
      6,
      4,
      3,
      4,
      10,
      11,
      123455,
      23,
      4,
      4,
      5,
      444,
      4,
      4,
      456,
      67,
      1,
      1,
      1,
      0
    ];

    expect(quickSort(array)).toEqual(array.sort((a, b) => a - b));
  });

  it("should return presorted array", () => {
    expect(quickSort([4, 5, 6, 7])).toEqual([4, 5, 6, 7]);
  });

  it("should return partially presorted array", () => {
    expect(quickSort([1, 3, 2, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("should work with empty array", () => {
    const array = [];

    expect(quickSort(array)).toEqual(array.sort((a, b) => a - b));
  });

  it("all together now", () => {
    const array = [
      10000,
      22,
      1,
      2,
      3,
      4,
      0.01,
      1235,
      356734,
      125,
      5,
      5,
      3,
      3,
      4,
      4,
      4,
      39393.03,
      4
    ];

    expect(quickSort(array)).toEqual(array.sort((a, b) => a - b));
  });
});
