export const checkValidate = (email, password) => {
  const isemailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const ispasswordvalid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isemailvalid) return "Please enter a valid email address";
  if (!ispasswordvalid) return "Please enter a valid password";

  return null;
};
