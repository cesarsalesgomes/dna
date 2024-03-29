/**
 * Feature 0.4.0: Logging with Winston + Cloudwatch (https://www.npmjs.com/package/winston-cloudwatch)
 */

// Winston with AWS Cloudwatch on Nestjs (https://stackoverflow.com/questions/69433044/winston-with-aws-cloudwatch-on-nestjs)

import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import { LogEntry, transports, transport, format } from 'winston';
import * as CloudWatchTransport from 'winston-cloudwatch';

import { WINSTON_CLOUDWATCH_NAME, WINSTON_WARN_LEVEL } from './logger.contants';

const messageFormatter = () => (item: LogEntry) => `${item.level}: ${item.message} ${JSON.stringify(item.meta)}`;

const winstonTransport: transport = new transports.Console({
  format: format.combine(format.timestamp(), format.ms(), nestWinstonModuleUtilities.format.nestLike()),
});

const cloudWatchTransport: transport = new CloudWatchTransport({
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
  format: format.uncolorize(),
  transports: [winstonTransport, cloudWatchTransport],
});
