import React from 'react';
import { Table, Divider, Tag } from 'antd';

class Eng extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text, record) => (
            /* eslint-disable-next-line */
            <span onClick={this.props.handleSelectedItem.bind(this, text, record)}>{text}</span>
          ),
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <span>
              {tags.map(tag => {
                let color = tag.length > 2 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <span>
              <a>Invite {record.name}</a>
              <Divider type="vertical" />
              <a>Delete</a>
            </span>
          ),
        },
      ],

      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['sb', 'sd', 'sg'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ],
    };
  }

  componentWillMount() {
    console.log('componentWillMount-Eng', '1111');
  }

  componentDidMount() {
    console.log('componentDidMount-Eng', '2222');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps-Eng', '5555');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate-Eng', '6666');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate-Eng', '3333');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate-Eng', '4444');
  }

  render() {
    // const { handleSelectedItemName } = this.props;
    const { columns, data } = this.state;
    console.log('Eng', '1212121212');
    return (
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f2f2f2' }}>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default Eng;
