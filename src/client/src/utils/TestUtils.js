// Redux reducer test util

export const harness = (reducer) => (description, options) => {
  const { before, action, after } = options;
  it(description, () => {
    expect(reducer(before, action)).toMatchObject(after);
  });
}
