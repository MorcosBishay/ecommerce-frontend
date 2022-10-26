import api from "./api.services";

export const getAllVegetablesWithPagination = async (limit, page, sort) =>
  api().get(`/product/vegetable?limit=${limit}&page=${page}&sort=${sort}`);
