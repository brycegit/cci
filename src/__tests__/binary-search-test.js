const binarySearch = require("../binary-search");

describe("binary search", () => {
  it("should find item in array - middle", () => {
    expect(binarySearch([1, 2, 3], 2)).toBe(2);
  });

  it("should find item in array - beginning", () => {
    expect(binarySearch([1, 2, 3], 1)).toBe(1);
  });

  it("should find item in array - end", () => {
    expect(binarySearch([1, 2, 3], 3)).toBe(3);
  });

  it("should return undefined for missing item", () => {
    expect(binarySearch([1, 2, 3], 4)).toBe(undefined);
  });

  it("should find in large array", () => {
    expect(
      binarySearch(
        [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 10, 11, 343, 2343, 3423],
        343
      )
    ).toBe(343);
  });
});
