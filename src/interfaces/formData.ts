
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