import { queryAdvancedProfile, queryBasicProfile } from '@/services/api';
import { Effect } from 'dva';
import { Reducer } from 'redux';

export interface IProfileModelState {
  basicGoods: [];
  advancedOperation1: [];
  advancedOperation2: [];
  advancedOperation3: [];
  basicProgress: [];
  userInfo: any;
  application: any;
}

export interface IProfileModel {
  namespace: 'profile';
  state: IProfileModelState;
  effects: {
    fetchBasic: Effect;
    fetchAdvanced: Effect;
  };
  reducers: {
    show: Reducer<any>;
  };
}

const ProfileModel: IProfileModel = {
  namespace: 'profile',

  state: {
    basicGoods: [],
    advancedOperation1: [],
    advancedOperation2: [],
    advancedOperation3: [],
    basicProgress: [],
    userInfo: {},
    application: {},
  },

  effects: {
    *fetchBasic({ payload }, { call, put }) {
      const response = yield call(queryBasicProfile, payload);
      yield put({
        type: 'show',
        payload: response,
      });
    },
    *fetchAdvanced(_, { call, put }) {
      const response = yield call(queryAdvancedProfile);
      yield put({
        type: 'show',
        payload: response,
      });
    },
  },

  reducers: {
    show(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default ProfileModel;
