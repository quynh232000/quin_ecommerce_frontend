import { FETCHDATA, POSTASYNC } from "../config/axiosConfig";
import {FormLogin } from "../interfaces/formData";
import { MFormAddress, MFormChangePassword } from "../models/AppModel";

// user
export const SLogin = async (data: FormLogin) =>await FETCHDATA('post',`auth/login`, data);
export const SMe = async () =>await FETCHDATA('get',`auth/me`);
export const sLoginWithGoogle = async (token: string) =>await FETCHDATA('post',`auth/withgoogle`, {id_token:token});
export const SAsynCart = async (data: number[],token:string) =>await POSTASYNC(`auth/login`, data,token);
export const SCheckEmail = async (email: string) =>await FETCHDATA('post',`auth/check-email`, {email:email});
export const SRegister = async (data: FormLogin) =>await FETCHDATA('post',`auth/register`, data);
export const SVerifyEmail = async (email: string) =>await FETCHDATA('post',`auth/verify-email`, {email});
export const SUserUpdate = async (data: FormData) =>await FETCHDATA('post',`auth/user/update-info`, data);
export const SChangePassword = async (data: MFormChangePassword) =>await FETCHDATA('post',`auth/user/change_password`, data);

export const SGetProvinceAll = async () =>await FETCHDATA('get',`common/address/provinces`);
export const SGetDistricts = async (province_id:number) =>await FETCHDATA('get',`common/address/districts/`+province_id);
export const SGetWards = async (district_id:number) =>await FETCHDATA('get',`common/address/wards/`+district_id);
export const SCreateAddress = async (data:MFormAddress) =>await FETCHDATA('post',`public/user/address`,data);
export const SEditAddress = async (id:number,data:MFormAddress) =>await FETCHDATA('patch',`public/user/address/`+id,data);
export const SGetMyAddresses = async () =>await FETCHDATA('get',`public/user/address`);
export const SSetAddressDefault = async (id:number) =>await FETCHDATA('patch',`public/user/address/set-default/`+id);
export const SDeleteAddress = async (id:number) =>await FETCHDATA('delete',`public/user/address/`+id);

export const SGetCoin = async (param?:string) =>await FETCHDATA('get',`public/user/coin`+param);
export const SGetMyVoucher = async (param?:string) =>await FETCHDATA('get',`auth/user/voucher`+param);

// home
export const SGetCategoryHome = async () =>await FETCHDATA('get',`public/home/category`);
export const SGetVoucherHome = async (params:string) =>await FETCHDATA('get',`public/home/voucher`+params);
export const SSaveVoucher = async (voucher_id:number) =>await FETCHDATA('post',`auth/user/voucher/save`,{voucher_id});
export const SGetBlog = async (params:string) =>await FETCHDATA('get',`public/post/blog`+params);
export const SGetPostBySlug = async (slug:string) =>await FETCHDATA('get',`public/post/detail/`+slug);





