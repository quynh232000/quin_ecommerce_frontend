import { FETCHDATA, POSTASYNC } from "../config/axiosConfig";
import {FormLogin } from "../interfaces/formData";


export const SLogin = async (data: FormLogin) =>await FETCHDATA('post',`auth/login`, data);
export const SMe = async () =>await FETCHDATA('get',`auth/me`);
export const sLoginWithGoogle = async (data: string) =>await FETCHDATA('post',`auth/login`, data);
export const SAsynCart = async (data: FormLogin,token:string) =>await POSTASYNC(`auth/login`, data,token);
