import forEach from 'lodash/forEach';
import flatten from 'lodash/flatten';
import includes from 'lodash/includes';
import isFunction from 'lodash/isFunction';
import defer from 'lodash/defer';

var _chronicles = [];

export class Chronicle {
  constructor(props) {
    _chronicles.push(this);
    this.name = props.name;
    this.when = flatten([props.when]);
    this.then = props.then;
  }
}

const chronicle = store => next => action => {
  forEach(_chronicles, (chronicle) => {
    if (includes(chronicle.when, action.type)) {
      if (isFunction(chronicle.then)) {
        console.log(`[Chronicle] ${chronicle.name}`);
        defer(() => chronicle.then(store.getState(), action, store.dispatch));
      }
    }
  });

  return next(action);
};

export default chronicle;
