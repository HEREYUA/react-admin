import {observable,action} from 'mobx'
class LoginStore{
@observable isLogin=false
@observable userInfo={}
@action setUserInfo(info){
    this.userInfo=info
    this.isLogin=true
}
@action logout(){
    this.userInfo={}
    this.isLogin=false
}
}

const loginStore = new LoginStore()
export default loginStore