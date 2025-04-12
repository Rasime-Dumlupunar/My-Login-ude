// Aksiyon Türlerini Tanımla
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

// Kullanıcı Girişi (Login) Aksiyonunu Oluştur
export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});
console.log("login oldu", loginSuccess);
// Kullanıcı Çıkışı (Logout) Aksiyonunu Oluştur
export const logout = () => ({
  type: LOGOUT,
});
