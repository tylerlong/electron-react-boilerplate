// @flow
import { PREVIEW } from '../actions/preview';

export default function counter(state: string = '', action: Object) {
  switch (action.type) {
    case PREVIEW:
      return action.markdown;
    default:
      return state;
  }
}
