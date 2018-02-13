import * as React from 'react';

interface Props {
  startingValue?: number;
  interval: number;
}

interface State {
  count: number;
}

class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: this.props.startingValue || 0
    };
  }

  increment = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      count: this.state.count + this.props.interval
    });
  }

  decrement = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      count: this.state.count - this.props.interval
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
