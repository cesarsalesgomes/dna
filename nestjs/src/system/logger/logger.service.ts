/**
 * Feature 0.4.0: Logging with Winston + Cloudwatch (https://www.npmjs.com/package/winston-cloudwatch)
 */

// Winston with AWS Cloudwatch on Nestjs (https://stackoverflow.com/questions/69433044/winston-with-aws-cloudwatch-on-nestjs)

import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as CloudWatchTransport from 'winston-cloudwatch';

import { WINSTON_CLOUDWATCH_NAME, WINSTON_WARN_LEVEL } from './logger.contants';

const messageFormatter = () => (item: winston.LogEntry) => `${item.level}: ${item.message} ${JSON.stringify(item.meta)}`;

const winstonTransport: winston.transport = new winston.transports.Console({
  format: winston.format.combine(winston.format.timestamp(), winston.format.ms(), nestWinstonModuleUtilities.format.nestLike()),
});

const cloudWatchTransport: winston.transport = new CloudWatchTransport({
  name: WINSTON_CLOUDWATCH_NAME,
  level: WINSTON_WARN_LEVEL,
  logGroupName: process.env.CLOUDWATCH_GROUP_NAME,
  logStreamName: process.env.CLOUDWATCH_STREAM_NAME,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY,
  awsSecretKey: process.env.AWS_KEY_SECRET,
  awsRegion: process.env.AWS_REGION,
  messageFormatter: messageFormatter(),
});

export default WinstonModule.createLogger({
  format: winston.format.uncolorize(),
  transports: [winstonTransport, cloudWatchTransport],
});
