import request from '../utils/request'

// 用户列表
export const getUserList = () => request.get('/getUserList')

// 用户详情
export const getUserDetail = (params) => request.get('/getUserDetail', { params })
