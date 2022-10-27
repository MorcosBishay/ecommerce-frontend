/* eslint-disable import/prefer-default-export */
import api from './api.services'

export const getAllElectronicsWithPagination = async (limit, page, sort) =>
  api().get(`/products/electronics?limit=${limit}&page=${page}&sort=${sort}`)
