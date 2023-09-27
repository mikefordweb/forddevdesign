import http from "../http-common";

const getAll = async () => {
  let getall = await http.get("/workitems");
  return getall;
};

const get = id => {
  return http.get(`/workitems/${id}`);
};

const create = data => {
  return http.post("/workitems", data);
};

const update = (id, data) => {
  return http.put(`/workitems/${id}`, data);
};

const remove = id => {
  return http.delete(`/workitems/${id}`);
};

const removeAll = () => {
  return http.delete(`/workitems`);
};

const findByTitle = title => {
  return http.get(`/workitems?title=${title}`);
};

const WorkitemService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default WorkitemService;
