export const validateFormData = (email, password) => {
  const emailValidate =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const passwordValidate =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (!emailValidate) return "Email is invalid";
  if (!passwordValidate) return "Password is invalid";

  return null;
};
