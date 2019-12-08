import {post} from "./utils";

export const registration = data => post('/registration', data);

export const confirmRegistration = (password, token) => post('/registration/confirm', {password, token});