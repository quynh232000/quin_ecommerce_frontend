export interface IUser {
  id: number;
  uuid: string;
  full_name: string;
  username: string;
  email: string;
  phone_number: string;
  avatar_url: string;
  thumbnail_url: string;
  birthday: string;
  address: string;
  is_blocked: number;
  bio: string;
  failed_attempts: number;
  blocked_until: Date;
  email_verified_at: Date;
  created_at: Date;
  updated_at: string;
  total_coin: number;
}
export interface IProvince {
  id: number;
  name: string;
}
export interface IDistrict {
  id: number;
  name: string;
}
export interface IWard {
  id: number;
  name: string;
  code: string;
}
export interface ICustomData{
  [key:string]:string|number|null|boolean;
}
export interface IResponseMessage{
  status:boolean;
  message: string;
}
export interface IAddress {
  receiver_name: string
  user_id: number
  province_id: number
  district_id: number
  ward_id: number
  phone_number: string
  address_detail: string
  updated_at: string
  created_at: string
  id: number
  is_default: boolean
  province: IProvince
  district: IDistrict
  ward:IWard
}
export interface IToastMessage{
  title :string,
  message:string,
  type : "success" | "info" | "warning" | "error",
  duration?: number;
}
export interface ICategory {
  id: number
  name: string
  slug: string
  icon_url: string
  parent_id: number
  level: number
  path: string
  description: string
  is_show: number
  commission_fee: number
}
export interface ICoin {
  id: number
  user_id: number
  name: string
  amount: number
  balance_before: number
  balance_after: number
  reference_id: number
  description: string
  status: string
  created_at: string
  updated_at: string
}
export interface IPagination {
  current_page: number
  last_page: number
  per_page: number
  total: number
  next_page_url: string
  prev_page_url: string
}
export interface IVoucher {
  id: number
  code: string
  name: string
  date_start: string
  date_end: string
  discount_amount: number
  minimum_price: number
  quantity: number
  max_usage_per_user: number
  used_quantity: number
  from: string
  shop_id: number
  created_at: string
  updated_at: string
  shop: IShop
  is_save:boolean
}

export interface IShop {
  id: number
  name: string
  slug: string
  logo: string
  bio: string
  phone_number: string
  address_detail: string
  email: string
  shop_code: string
  ward_code: string
  district_id: number
  deleted_at: number
  created_at: string
  updated_at: string
  user_id: number
}
export interface IUserVoucher {
  id: number
  user_id: number
  voucher_id: number
  is_used: number
  created_at: string
  updated_at: string
  count: number
  voucher: IVoucher
}
export interface IPost {
  id: number
  thumbnail: string
  title: string
  content: string
  comment: string
  view: number
  archive: number
  slug: string
  is_show: number
  is_published: number
  published_at: string
  author_id: number
  category_post_id: number
  deleted_at: string
  created_at: string
  updated_at: string
  author:IUser 
  category:IPostCategory
  tags:ITag[]
}
export interface IPostCategory {
  id: number
  post_type_id: number
  name: string
  slug: string
  icon: string
  is_show: number
  description: string
  parent_id: number
}
export interface ITag {
  id: number
  tag_name: string
  slug: string
}