import { FC } from "react";
import { SignInFormComponent } from "./SignInFormComponent";
import { FormData } from "./types";

export const SignInFormContainer: FC = () => {
  const onSubmit = (data: FormData) => {
    console.log("data: ", data);
  };

  return <SignInFormComponent onSubmit={onSubmit} />;
};
