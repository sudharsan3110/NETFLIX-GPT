import OpenAI from 'openai';
import { NETFLIX_API } from './constants';
const client = new OpenAI({
  apiKey: NETFLIX_API,
  dangerouslyAllowBrowser:true// This is the default and can be omitted
});

export default client;

