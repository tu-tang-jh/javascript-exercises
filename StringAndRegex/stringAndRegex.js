const isEmailValid = (email) => {
  const emailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  return emailRegex.test(email);
};

const isPasswordValid = (password) => {
  const passwordRegex = /(?=.*[0-9])(?=.*[A-Z])(?=.*\W).{8,}$/;
  return passwordRegex.test(password);
};
