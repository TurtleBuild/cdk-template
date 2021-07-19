import * as cdk from '@aws-cdk/core';

export interface HogeHogeParameter {
}

export interface HogeHogeProps extends cdk.StackProps {
  readonly parameter: HogeHogeParameter;
}

export class HogeHogeStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: HogeHogeProps) {
    super(scope, id, props);
  }
}
