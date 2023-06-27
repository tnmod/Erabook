import axios from "axios";
import { IPADDRESS } from "../../network.config";




const hanleCheckEmail = async (email) => {
    const result = await axios.post(IPADDRESS + '/api/user/find', { email });
    if (result.data.user == true) {
        return true;
    } else {
        return false;
    }
}

const hanleSendOTP = async (email) => {
    const sendOTP = await axios.post(IPADDRESS + '/api/user/email', { email });
    if (sendOTP.data) {
        return true;
    } else {
        return false;
    }
}
const hanleVeriOTPCode = async (OTPCode, email) => {
    const sendOTP = await axios.post(IPADDRESS + '/api/user/veriCode', { code: OTPCode, email });
    if (sendOTP.data) {
        return true;
    } else {
        return false;
    }
}

const hanleRegister = async (email, password, username) => {
    const result = await axios.post(IPADDRESS + '/api/user/register', { email, password, username });
    if (result.data.user) {
        return result.data.user;
    }
    else {
        return false;
    }
}

const hanleChangePassword = async (id, email, newpassword, oldpassword) => {
    const result = await axios.post(IPADDRESS + '/api/user/changepassword', { id, email, newpassword, oldpassword });
    if (result.data.result != true) {
        return false;
    } else {
        return true;
    }
}



export { hanleCheckEmail, hanleVeriOTPCode, hanleSendOTP, hanleRegister, hanleChangePassword }