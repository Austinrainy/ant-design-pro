import { Button, Card, Spin } from 'antd';
import { connect } from 'dva';
import React, { PureComponent } from 'react';
import styles from './style.less';

interface ITriggerExceptionProps {
  isloading: boolean;
  dispatch: (args: any) => Promise<any>;
}

interface ITriggerExceptionState {
  isloading: boolean;
}

@connect(state => ({
  isloading: state.error.isloading,
}))
class TriggerException extends PureComponent<ITriggerExceptionProps, ITriggerExceptionState> {
  state = {
    isloading: false,
  };

  triggerError = code => {
    this.setState({
      isloading: true,
    });
    const { dispatch } = this.props;
    dispatch({
      type: 'error/query',
      payload: {
        code,
      },
    });
  };

  render() {
    const { isloading } = this.state;
    return (
      <Card>
        <Spin spinning={isloading} wrapperClassName={styles.trigger}>
          <Button type="danger" onClick={() => this.triggerError(401)}>
            触发401
          </Button>
          <Button type="danger" onClick={() => this.triggerError(403)}>
            触发403
          </Button>
          <Button type="danger" onClick={() => this.triggerError(500)}>
            触发500
          </Button>
          <Button type="danger" onClick={() => this.triggerError(404)}>
            触发404
          </Button>
        </Spin>
      </Card>
    );
  }
}

export default TriggerException;
