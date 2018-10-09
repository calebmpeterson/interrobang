// Redux reducer test util

export function transition(description, options) {
    const { reducer, before, action, after } = options;
    it(description, () => {
	expect(reducer(before, action)).toMatchObject(after);
    });
}
