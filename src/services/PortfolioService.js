import http from "../http-common";

const getAll = async () => {
  let getall = await http.get("/portfolios");
  return getall;
};

const get = id => {
  return http.get(`/portfolios/${id}`);
};

const create = data => {
  return http.post("/portfolios", data);
};

const update = (id, data) => {
  return http.put(`/portfolios/${id}`, data);
};

const remove = id => {
  return http.delete(`/portfolios/${id}`);
};

const removeAll = () => {
  return http.delete(`/portfolios`);
};

const findByTitle = title => {
  return http.get(`/portfolios?title=${title}`);
};

const PortfolioService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default PortfolioService;
