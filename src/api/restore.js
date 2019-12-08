import {post} from "./utils";

export const restore = data => post('/restore', data);

export const confirmRestoring = data => post('/restore/confirm', data);