#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HogeHogeStack } from '../lib/cdk-hogehoge-stack';

const app = new cdk.App();

new HogeHogeStack(app, 'hogehoge', {
  parameter: app.node.tryGetContext('parameter'),
});
