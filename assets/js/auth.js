// assets/js/auth.js

const AUTH_KEY = "site_access_ok";
const PASSWORD = "test1234"; // ← 好きな文字列に変更

// index.html 用：未認証なら login.html へ
export function requireAuth() {
  if (localStorage.getItem(AUTH_KEY) !== "1") {
    location.replace("./login.html");
  }
}

// login.html 用：パスワードチェック
export function login(pw) {
  if (pw === PASSWORD) {
    localStorage.setItem(AUTH_KEY, "1");
    location.href = "./index.html";
  } else {
    return false;
  }
}

// 共通：ログアウト
export function logout() {
  localStorage.removeItem(AUTH_KEY);
  location.href = "./login.html";
}
