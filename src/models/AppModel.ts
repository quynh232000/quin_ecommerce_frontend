export class MFormAddress {
  receiver_name: string;
  phone_number: string;
  address_detail: string;
  province_id: number;
  district_id: number;
  ward_id: number;
  is_default: boolean;
  constructor() {
    this.receiver_name = "";
    this.phone_number = "";
    this.address_detail = "";
    this.province_id = 0;
    this.district_id = 0;
    this.ward_id = 0;
    this.is_default = false;
  }
}
export class MFormProfile{
  full_name:string;
  phone_number:string;
  address:string;
  birthday:string;
  bio:string 
  avatar_url?: File|string;
  constructor(){
    this.full_name = "";
    this.phone_number = "";
    this.address = "";
    this.birthday = "";
    this.bio = "";
  }
}
export class MFormChangePassword{
  password_old:string;
  password_new:string;
  password_confirm:string;
  constructor(){
    this.password_old = "";
    this.password_new = "";
    this.password_confirm = "";
  }
}
export class MFormRegister{
  full_name:string
  email:string
  code:string 
  password:string
  constructor(){
      this.full_name=''
      this.email=''
      this.code=''
      this.password=''
  }
}