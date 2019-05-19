import React from 'react';

import Eng from './Eng';

class TableScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemName: 'init',
    };
  }

  componentWillMount() {
    console.log('componentWillMount-TableScore', '1111');
  }

  componentDidMount() {
    console.log('componentDidMount-TableScore', '2222');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps-TableScore', '5555');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate-TableScore', '6666');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate-TableScore', '3333');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate-TableScore', '4444');
  }

  handleSelectedItemName = (text, record) => {
    console.log('2323232323', record);
    this.setState({ selectedItemName: text });
    console.log('eeeeeeeeeeee', text);
  };

  render() {
    const { selectedItemName } = this.state;
    console.log('eeeeeeeeeeeeFatherRender', selectedItemName);
    return (
      <div style={{ padding: '20px', backgroundColor: 'blue' }}>
        <span style={{ color: 'white' }}>{selectedItemName}</span>
        <Eng handleSelectedItem={this.handleSelectedItemName} />
      </div>
    );
  }
}

export default TableScore;
