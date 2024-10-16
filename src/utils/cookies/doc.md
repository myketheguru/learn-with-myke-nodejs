# CookieManager Class

Utility class for managing cookies in the browser.

## Constructor

This class does not have a constructor.

## Methods

### `createCookie(name: string, value: string, domain: string, secure?: boolean, samesite?: string, expirationHours?: number): void`

Creates a new cookie with the specified name, value, domain, and optional parameters.

- `name`: The name of the cookie.
- `value`: The value of the cookie.
- `domain`: The domain for which the cookie is valid.
- `secure`: (Optional) Whether the cookie should only be sent over secure connections. Defaults to `true`.
- `samesite`: (Optional) The SameSite attribute for the cookie. Defaults to `"Lax"`.
- `expirationHours`: (Optional) The expiration time of the cookie in hours.

### `getCookie(name: string): string`

Retrieves the value of the cookie with the specified name.

- `name`: The name of the cookie.

Returns the value of the cookie, or an empty string if the cookie doesn't exist.

### `updateCookie(name: string, value: string, domain: string, secure?: boolean, samesite?: string): void`

Updates the value of the cookie with the specified name.

- `name`: The name of the cookie.
- `value`: The new value of the cookie.
- `domain`: The domain for which the cookie is valid.
- `secure`: (Optional) Whether the cookie should only be sent over secure connections. Defaults to `true`.
- `samesite`: (Optional) The SameSite attribute for the cookie. Defaults to `"Lax"`.

### `deleteCookie(name: string): void`

Deletes the cookie with the specified name.

- `name`: The name of the cookie to delete.

### `deleteCookies(cookies: string[]): void`

Deletes multiple cookies.

- `cookies`: An array of cookie names to delete.

### `updateCookies(cookieList: { name: string; value: string }[], domain: string, secure?: boolean, samesite?: string): void`

Updates multiple cookies with the specified values.

- `cookieList`: An array of objects containing cookie information. Each object should have `name` and `value` properties.
- `domain`: The domain for which the cookies are valid.
- `secure`: (Optional) Whether the cookies should only be sent over secure connections. Defaults to `true`.
- `samesite`: (Optional) The SameSite attribute for the cookies. Defaults to `"Lax"`.

### `getAllCookies(): string[]`

Retrieves the names of all cookies.

Returns an array containing the names of all cookies.

### `getDomainCookies(domain: string): string[]`

Retrieves the names of cookies for the specified domain.

- `domain`: The domain for which to retrieve cookies.

Returns an array containing the names of cookies for the specified domain.
