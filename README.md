# Learning Unit Test with Jest

## Using Matchers

### toEqual
```sh
test('object assignment', () => {
    const data = { one: 1 }
    data['two'] = 2
    expect(data).toEqual({ one: 1, two: 2 })
});
```

### toBe
```sh
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
```

## Truthiness

* toBeNull matches only null
* toBeUndefined matches only undefined
* toBeDefined is the opposite of toBeUndefined
* toBeTruthy matches anything that an if statement treats as true
* toBeFalsy matches anything that an if statement treats as false

```sh
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
```