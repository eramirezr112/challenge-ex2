import axios from "axios";

export const getAllContacts = () => {
  const url = ["http://localhost:8080/data/contacts.json"];

  return axios.get(url);
};
