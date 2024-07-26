import { ElMessage } from 'element-plus'
const fetch = async <T>(url: string, options: any, customHeader?: Object): Promise<T> => {
  const { public: { proxyUrl } } = useRuntimeConfig()
  return new Promise((resolve, reject) => {
    useFetch(proxyUrl + url, {
      headers: {
        ...customHeader
      },
      ...options,
    }).then((res: any) => {
      if (res.status.value == 'error') {
        console.error('网络请求失败 :>> ', res.error?.value || '网络请求失败');
        if (import.meta.client) ElMessage.error(res.error?.value?.message || res.error?.value?.statusMessage || '网络请求失败')
        reject(res.error.value)
      } else {
        resolve(res.data.value as T)
      }
    }).catch((err: any) => {
      console.error('服务器请求错误 :>> ', err);
      reject(err)
    })
  })
}

export default class Http {

  get<T>(url: string, params?: any, headers?: Object): Promise<T> {
    return fetch<T>(url, { method: 'get', params }, headers)
  }

  post<T>(url: string, body?: any, headers?: Object): Promise<T> {
    return fetch(url, { method: 'post', body }, headers)
  }

  put<T>(url: string, body?: T, headers?: Object): Promise<any> {
    return fetch(url, { method: 'put', body }, headers)
  }

  delete<T>(url: string, params?: T, headers?: Object): Promise<any> {
    return fetch(url, { method: 'delete', params }, headers)
  }
}
