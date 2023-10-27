import * as ClientService from "../service/ClientService";
import CryptoJS from "crypto-js";

export const registration = async (req, res) => {
  if (await ClientService.findByEmail(req.body.email)) {
    return res.status(409).send("Пользователь уже существует!");
  } else {
    await ClientService.save(req.body);
    return res.send("Пользователь успешно добавлен!");
  }
};

export const login = async (req, res) => {
  let client = await ClientService.findByEmail(req.body.email);
  if (client) {
    let isPasswordCorrect =
      req.body.password ===
      CryptoJS.AES.decrypt(client.password, "jhfycghdbndhfjhweiru").toString(
        CryptoJS.enc.Utf8
      );

    if (!isPasswordCorrect) {
      return res.status(404).send("Неверный пароль!");
    }
    return res.send({role:"Клиент", email: client.email, fio: client.fio});
  }

  return res.status(404).send("Пользователь не найден!");
};

export const authCheck = async (req, res) => {
  try {
    let client = await ClientService.findByEmail(req.body.email);
    if (client) {
      return res.send({ fio: client.fio, email: client.email });
    } else {
      return res.status(401).send("Пользователь не авторизирован!");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Произошла ошибка на сервере");
  }
};
 