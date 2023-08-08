
import axios from 'axios';
import Cookies from 'js-cookie';
import { TFormatResponse, TGenerateOptions } from './types';

const formatResponse = (response: any = {}): any => ({
  data: response.data || {},
  status: response.status || 418,
  statusText: response.statusText || '',
  headers: response.headers || {},
});

const generateOptions = ({
  method, url, data, params,
}: any) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const token = Cookies.get('userToken');

  const authHeaders = {
    'token': token,
  }

  return {
    method,
    url,
    data,
    params,
    headers: token
      ? {
        ...defaultHeaders,
        ...authHeaders
    }
    : {
        ...defaultHeaders
      },
  };
};

const sendRequest = async ({
  method, url, data = undefined, params = undefined
}: TGenerateOptions): Promise<TFormatResponse> => {

  const requestData = data instanceof FormData ? data : { ...data, platform: 'web' }

  const OPTIONS = generateOptions({
    method, url, data: requestData, params,
  });

  try {
    const response = await axios(OPTIONS);
    return formatResponse(response);
  } catch (error: any) {
    throw formatResponse(error.response);
  }
};

export const httpPost = (url: string, data: any, params: any): Promise<TFormatResponse> => sendRequest({
  method: 'POST', url, data, params,
});
export const httpGet = (url: string, params: any): Promise<TFormatResponse> => sendRequest({ method: 'GET', url, params });
export const httpDelete = (url: string, data: any): Promise<TFormatResponse> => sendRequest({ method: 'DELETE', url, data });
export const httpPut = (url: string, data: any): Promise<TFormatResponse> => sendRequest({ method: 'PUT', url, data });
