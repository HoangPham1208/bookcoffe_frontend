import Cookie from "universal-cookie"
export const useAuth = () => {
    const cookie = new Cookie();
    const user = cookie.get("accessToken");    
    //checking whether token is preset or not
    if (user) {
        return true;
    } else {
        return false
    }
};