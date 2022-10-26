import api from "./api.services";

export const getAllElectronicsWithPagination = async (limit, page, sort) =>
  api().get(`/product/electronics?limit=${limit}&page=${page}&sort=${sort}`);
