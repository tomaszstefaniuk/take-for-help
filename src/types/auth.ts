/* Register */
export type RegisterUserPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  acceptTerms: boolean;
};

export type RegisterUserResponse = {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  token: string;
};

/* Login */
export type LoginUserPayload = {
  email: string;
  password: string;
};

export type LoginUserResponse = {
  access_token: string;
  status: string;
};

/* Forgot Password */
export type ForgotPasswordPayload = {
  email: string;
};

/* Reset Password */
export type ResetPasswordPayload = {
  password: string;
  passwordConfirm: string;
  resetToken: string;
};

/* User */
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  provider: string | null;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
};

/* Generic */
export type GenericResponse = {
  status: string;
  message: string;
};
