import api from "./api.services";

export const getAllFruitsWithPagination = async (limit, page, sort) =>
  api().get(`/product/fruit?limit=${limit}&page=${page}&sort=${sort}`);
