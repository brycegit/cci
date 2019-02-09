LinkedList = require("../src/linked-list");

describe("Linked List", () => {
  let LL;

  beforeEach(() => {
    LL = new LinkedList(1);
  });

  it("should create single head node", () => {
    expect(LL.head.val).toBe(1);
  });

  it("should have same tail node", () => {
    expect(LL.tail.val).toBe(1);
  });

  it("head should have next prop", () => {
    expect(LL.head.next).toEqual(expect.any(Object));
  });

  it("should be able to add", () => {
    LL.add(3);

    expect(LL.tail.val).toBe(3);
  });

  it("should be able to remove", () => {
    LL.add(3);
    LL.add(4);

    expect(LL.tail.val).toBe(4);

    LL.remove();

    expect(LL.tail.val).toBe(3);
  });

  it("should find value", () => {
    LL.add(3);
    LL.add(4);

    expect(LL.find(3).val).toBe(3);
  });

  it("should find after multiple adds/removes", () => {
    LL.add(3);
    LL.add(4);
    LL.remove();
    LL.remove();
    LL.add(7);
    LL.add(9);

    expect(LL.find(7).val).toBe(7);
    expect(LL.find(7).next.val).toBe(9);
  });

  it("should be able to delete root and re-add", () => {
    LL.add(3);
    LL.remove();
    LL.remove();

    expect(LL.find(3)).toEqual({});

    LL.add(3);

    expect(LL.find(3).val).toBe(3);
    expect(LL.find(3).next).toEqual({});
  });

  it("should be able to be instantiated without value", () => {
    LL = new LinkedList();

    LL.add(1);
    LL.add(2);
    LL.remove();
    LL.add(3);

    expect(LL.find(1).val).toBe(1);
    expect(LL.find(2).val).toBe(undefined);
    expect(LL.find(3).val).toBe(3);
  });
});
