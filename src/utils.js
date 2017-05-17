import assign from 'object-assign';

export const m = function() {
  let res = {};
  for (let i = 0; i < arguments.length; ++i) {
    if (arguments[i]) assign(res, arguments[i]);
  }
  return res;
};
