export class FormRegister{
    first_name:string
    last_name:string
    email:string
    code:string 
    password:string
    constructor(){
        this.first_name=''
        this.last_name=''
        this.email=''
        this.code=''
        this.password=''
    }
}
export class FormLogin{
    email:string;
    password:string;
    constructor(){
        this.email=''
        this.password=''
    }
}

  export class AsyncCart{
    id:number;
    constructor(){
        this.id=0
    }
    
  }
export class ChangePasswordObj{
    password_old:string
    password_new:string
    password_confirm:string
    constructor(){
        this.password_old=''
        this.password_new=''
        this.password_confirm=''
    }
}