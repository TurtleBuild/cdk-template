import * as cdk from '@aws-cdk/core';
import { SynthUtils } from '@aws-cdk/assert';
import * as HogeHoge from '../lib/cdk-hogehoge-stack';

test('Empty Stack', () => {
  const app = new cdk.App();
  const stack = new HogeHoge.HogeHogeStack(app, 'HogeHoge', {
    env: {
      account: 'xxxxx',
      region: 'ap-northeast-1',
    },
    parameter: {
    },
  });
  expect(SynthUtils.toCloudFormation(stack))
    .toMatchSnapshot();
});
