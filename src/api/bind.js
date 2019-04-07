import http from '@/utils/http';

export const getInfoByCode = (params = {}) => {
  return http.get('/service/authorization', params);
}

export const getInfoByToken = (params = {}) => {
  return http.get('/service/user', params);
}

export const bindInfo = (data = {}, header) => {
  return http.post('/service/user', data, null, header)
}

export const getCollege = () => {
  return http.get('/college');
}

export const getDormitory = () => {
  return http.get('/dormitory');
}