import {Component, Types} from "/web_modules/ecsy.js";
export class Animation extends Component {
}
Animation.schema = {
  animations: {
    default: [],
    type: Types.Array
  },
  duration: {
    default: -1,
    type: Types.Number
  }
};
