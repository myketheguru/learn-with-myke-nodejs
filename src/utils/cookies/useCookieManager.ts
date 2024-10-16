import { useEffect, useState } from "react";
import CookieManager from "./CookieManager";

const useCookieManager = (key?: string) => {
  const [cookieManager] = useState(new CookieManager());
  const [cookieValue, setCookieValue] = useState<any>(null);

  useEffect(() => {
    if (key) {
      const value = cookieManager.getCookie(key);
      setCookieValue(value);
      console.log(cookieManager.getAllCookies())
    }
  }, [cookieManager, key]);

  const getAllCookies = () => cookieManager.getAllCookies();
  const getDomainCookies = (domain: any) => cookieManager.getDomainCookies(domain);

  return key
    ? cookieValue
    : { ...cookieManager, getAllCookies, getDomainCookies };
};

export default useCookieManager;
