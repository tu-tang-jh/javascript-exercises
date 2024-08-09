const isEmailValid = (email) => {
  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return emailRegex.test(email);
};

const isPasswordValid = (password) => {
  const passwordRegex = /(?=.*[0-9])(?=.*[A-Z])(?=.*\W).{8,}$/;
  return passwordRegex.test(password);
};
