// @flow
import assign from 'object-assign';

const m = function () {
  let res = {};
  for (let i = 0; i < arguments.length; ++i) {
    if (arguments[i]) assign(res, arguments[i]);
  }
  return res;
};

export default m;
