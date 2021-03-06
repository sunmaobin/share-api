import { Request } from 'utils'

export const requestSwagger = <T>(item: any): Promise<T> => {
  const opts = {
    url: '/api/getapi',
    method: 'POST',
    notBasePath: true,
    params: {
      urls: item.url
    }
  };
  return Request(opts);
};

export const getSwaggerApiConfig = <T>(): Promise<T> => {
  const opts = {
    url: '/api/list',
    params: {
      password: sessionStorage.getItem('password') || ''
    },
    notBasePath: true
  };
  return Request(opts);
}

export const updateSwaggerApiConfig = <T>(params: any): Promise<T> => {
  const opts = {
    url: '/api/update',
    method: 'POST',
    params,
    notBasePath: true
  };
  return Request(opts);
}