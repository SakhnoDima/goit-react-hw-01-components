import { Component } from 'react';

export class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = evt => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));

    console.log('Increment button was clicked!', evt); // работает
    console.log('this.props: ', this.props); // Error: cannot read props of undefined
  };

  handleDecrement = evt => {
    this.setState((state, props) => ({
      value: state.value - props.step,
    }));
    console.log('Decrement button was clicked!', evt); // работает
    console.log('this.props: ', this.props); // Error: cannot read props of undefined
  };
  render() {
    const { step } = this.props;

    return (
      <div>
        <button type="button" onClick={this.handleIncrement.bind(this)}>
          Increment by {step}
        </button>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleDecrement.bind(this)}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}
