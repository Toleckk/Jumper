import {post} from "./utils";

export default (password, token) => post('/registration/confirm', {password, token});