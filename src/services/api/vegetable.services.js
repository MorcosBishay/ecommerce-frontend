import api from "./api.services";

export const getAllVegetablesWithPagination = async (limit, page, sort) =>
  api().get(`/products/vegetables?limit=${limit}&page=${page}&sort=${sort}`);
