// credentials
const auth = {
  email: "taka@bank.com",
  password: "taka_dey",
};

// form-wrapper
document.getElementById("login-submit").addEventListener("click", (e) => {
  const userEmail = document.getElementById("user-email");
  const userPassword = document.getElementById("user-password");

  redirectToBanking(userEmail.value, userPassword.value);

  // clear input field
  userEmail.value = "";
  userPassword.value = "";
});

function redirectToBanking(email, password) {
  const url = window.location.origin;
  // const url = window.location.pathname;

  if (email == auth.email && password == auth.password) {
    window.location.href = `${
      url.includes("hasanthebest.github.io")
        ? url + "/bank-deposit-withdraw"
        : "/banking.html"
    }`;
  } else {
    alert(
      "Password or email doesn't match.\nFollowing are the valid credentials \nEmail: taka@bank.com\nPassword: taka_dey"
    );
  }
}
