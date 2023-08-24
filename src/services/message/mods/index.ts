import * as boUserMessageInterface from './boUserMessage';
import * as cycleMessageConfigInterface from './cycleMessageConfig';
import * as emailMessageInterface from './emailMessage';
import * as sateMessageInterface from './sateMessage';
import * as smsMessageInterface from './smsMessage';
import * as smsReplyConfigInterface from './smsReplyConfig';
import * as testApiInterface from './testApi';
import * as twilioApiInterface from './twilioApi';

export const message = {
  boUserMessage: boUserMessageInterface,
  cycleMessageConfig: cycleMessageConfigInterface,
  emailMessage: emailMessageInterface,
  sateMessage: sateMessageInterface,
  smsMessage: smsMessageInterface,
  smsReplyConfig: smsReplyConfigInterface,
  testApi: testApiInterface,
  twilioApi: twilioApiInterface,
};
