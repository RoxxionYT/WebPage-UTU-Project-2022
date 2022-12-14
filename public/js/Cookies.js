class Cookies{

  static setCookie(cname, cvalue, exdays) {
    if(exdays == 0){
      document.cookie = cname + "=" + cvalue + ";path=/";
      return;
    }
    
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  static getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  static removeCookie(cname){
    if(this.getCookie(cname) == "") return;

    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
  }
}