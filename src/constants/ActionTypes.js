/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import keyMirror from 'fbjs/lib/keyMirror';
import * as c from './constants';

export default keyMirror({

});

export function update(name, value) {
  return dispatch => dispatch({
    type: c.FORM_UPDATE_VALUE,
    name, value
  });
}

export function reset() {
  return dispatch => dispatch({
    type: c.FORM_RESET
  });
}
