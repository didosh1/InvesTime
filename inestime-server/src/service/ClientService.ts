import { Client } from "../entities/Client";
import { AppDataSource } from "../data-source";
import CryptoJS from "crypto-js";

const ClientRepository = AppDataSource.getRepository(Client);


export const findByEmail = (email) => {
  return ClientRepository.findOne({
    where: {
      email: email,
    },
  });
};

export const save = async (regClient) => {
  let client = new Client();
  client = {
    ...regClient,
    password: CryptoJS.AES.encrypt(regClient.password, "jhfycghdbndhfjhweiru").toString(),
  };
  return ClientRepository.save(client);
};
