import {post} from "./utils";

export const login = data => post('/login', data);

export const logout = () => post('/logout', {});