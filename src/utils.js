// @flow
import assign from 'object-assign';

const m = function (...args: Array<Object>) {
  let res = {};
  for (let i = 0; i < args.length; ++i) {
    if (args[i]) assign(res, args[i]);
  }
  return res;
};

export default m;
