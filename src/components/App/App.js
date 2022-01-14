import { Component, PropTypes } from 'common';

export default class App extends Component {
  static defaultProps = {
    feedback: { message: '' },
  };

  static propTypes = {
    feedback: PropTypes.object,
  };

  state = {
    value: 0,
  };

  render() {
    return <div></div>;
  }
}
