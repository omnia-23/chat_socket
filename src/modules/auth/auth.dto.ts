import * as validators from "./auth.validation";
import { z } from "zod";

export type ISignupBodyInputDto = z.infer<typeof validators.signup.body>;
export type IConfirmEmailBodyInputDto = z.infer<
  typeof validators.confirmEmail.body
>;
export type ILoginBodyInputDto = z.infer<typeof validators.login.body>;
export type IForgotCodeBodyInputDto = z.infer<
  typeof validators.sendForgotPasswordCode.body
>;
export type IGmail = z.infer<typeof validators.signupWithGmail.body>;
export type IVerifyCodeBodyInputDto = z.infer<
  typeof validators.verifyForgotPassword.body
>;
export type IResetCodeBodyInputDto = z.infer<
  typeof validators.resetForgotPassword.body
>;
