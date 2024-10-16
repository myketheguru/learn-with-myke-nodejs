/**
 * Utility class for managing cookies in the browser.
 */
export default class CookieManager {
  /**
   * Creates a new cookie.
   * @param {string} name - The name of the cookie.
   * @param {string} value - The value of the cookie.
   * @param {string} domain - The domain for which the cookie is valid.
   * @param {boolean} [secure=true] - Whether the cookie should only be sent over secure connections.
   * @param {string} [samesite="Lax"] - The SameSite attribute for the cookie.
   * @param {number} [expirationHours] - The expiration time of the cookie in hours.
   */
  createCookie(
    name: string,
    value: string,
    domain: string,
    secure: boolean = true,
    samesite: string = "Lax",
    expirationHours?: number
  ): void {
    const expires = new Date();
    if (expirationHours) {
      expires.setTime(expires.getTime() + expirationHours * 60 * 60 * 1000); // Set expiration time in milliseconds
    }

    let cookieString = `${name}=${value};`;

    if (domain && window?.location?.protocol === "https:") {
      cookieString += ` domain=${domain};`;
    }
    if (secure) {
      cookieString += ` secure;`;
    }
    if (samesite) {
      cookieString += ` samesite=${samesite};`;
    }
    if (expirationHours) {
      cookieString += ` expires=${expires.toUTCString()};`;
    }

    document.cookie = cookieString;
  }

  /**
   * Retrieves the value of a cookie.
   * @param {string} cname - The name of the cookie.
   * @returns {string} The value of the cookie, or an empty string if the cookie doesn't exist.
   */
  getCookie(cname: string): string {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        const cookieString = c.substring(name.length, c.length);
        return cookieString;
      }
    }
    return "";
  }

  /**
   * Updates the value of a cookie.
   * @param {string} name - The name of the cookie.
   * @param {string} value - The new value of the cookie.
   * @param {string} domain - The domain for which the cookie is valid.
   * @param {boolean} [secure=true] - Whether the cookie should only be sent over secure connections.
   * @param {string} [samesite="Lax"] - The SameSite attribute for the cookie.
   */
  updateCookie(
    name: string,
    value: string,
    domain: string,
    secure: boolean = true,
    samesite: string = "Lax"
  ): void {
    if (this.getCookie(name)) {
      this.createCookie(name, value, domain, secure, samesite);
    } else {
      console.error(`Cookie ${name} does not exist.`);
    }
  }

  /**
   * Deletes a cookie.
   * @param {string} name - The name of the cookie to delete.
   */
  deleteCookie(name: string): void {
    this.createCookie(name, "", "", true, "Lax", -1); // Set expiration date in the past to delete the cookie
  }

  /**
   * Deletes multiple cookies.
   * @param {string[]} cookies - An array of cookie names to delete.
   */
  deleteCookies(cookies: string[]): void {
    cookies.forEach((cookie) => this.deleteCookie(cookie));
  }

  /**
   * Updates multiple cookies.
   * @param {Object[]} cookieList - An array of objects containing cookie information.
   * @param {string} cookieList[].name - The name of the cookie.
   * @param {string} cookieList[].value - The value of the cookie.
   * @param {string} domain - The domain for which the cookies are valid.
   * @param {boolean} [secure=true] - Whether the cookies should only be sent over secure connections.
   * @param {string} [samesite="Lax"] - The SameSite attribute for the cookies.
   */
  updateCookies(
    cookieList: { name: string; value: string }[],
    domain: string,
    secure: boolean = true,
    samesite: string = "Lax"
  ): void {
    cookieList.forEach((cookie) => {
      const { name, value } = cookie;
      this.updateCookie(name, value, domain, secure, samesite);
    });
  }

  /**
   * Retrieves all cookies.
   * @returns {string[]} An array containing the names of all cookies.
   */
  getAllCookies(): string[] {
    return document.cookie.split(";").map((cookie) => cookie.trim());
  }

  /**
   * Retrieves cookies for a specific domain.
   * @param {string} domain - The domain for which to retrieve cookies.
   * @returns {string[]} An array containing the names of cookies for the specified domain.
   */
  getDomainCookies(domain: string): string[] {
    return document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .filter((cookie) => cookie.includes(domain));
  }
}
