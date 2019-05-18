import React from 'react';

class Eng extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }

  componentDidMount() {
    console.log(11);
  }

  handleClick = () => {
    const { flag } = this.state;
    this.setState({ flag: !flag }, () => {
      console.log('inside', flag);
    });
    console.log(flag);
  };

  render() {
    console.log(222);
    return (
      <div>
        child Props
        <a onClick={this.handleClick}>aaa</a>
      </div>
    );
  }
}

export default Eng;
