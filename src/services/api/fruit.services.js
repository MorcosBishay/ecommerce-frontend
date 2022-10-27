/* eslint-disable import/prefer-default-export */
import api from './api.services'

export const getAllFruitsWithPagination = async (limit, page, sort) =>
  api().get(`/products/fruits?limit=${limit}&page=${page}&sort=${sort}`)
