const validate = (data, type) => {
  const errors = {};

  if (!data.email.trim()) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "invalid email";
  } else {
    delete errors.email;
  }

  if (!data.password.trim()) {
    errors.password = "password required";
  } else if (data.password.length < 6) {
    errors.password = "password need to be 6 character or more";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm the password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password do not match";
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Accept our regulations";
    }

    if (!data.name.trim()) {
      errors.name = "Username required";
    } else {
      delete errors.name;
    }
  }

  return errors;
};

export default validate;
