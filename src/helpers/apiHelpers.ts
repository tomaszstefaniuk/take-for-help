import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { FieldError } from "@/types/error";

type GeneralApiError = {
  data: { message: string };
};

type ZodError = {
  code: string;
  exact: boolean;
  inclusive: boolean;
  message: string;
  minimum: number;
  path: [string, string];
  type: string;
};

type ZodErrors = {
  data: { error: ZodError[]; status: "fail" };
  status: number;
};

const isZodError = (x: unknown): x is ZodErrors => {
  if (
    typeof x === "object" &&
    x !== null &&
    "data" in x &&
    typeof (x as ZodErrors).data === "object" &&
    "error" in (x as ZodErrors).data &&
    Array.isArray((x as ZodErrors).data.error)
  ) {
    return true;
  }

  return false;
};

export const isErrorWithMessage = (
  error:
    | FetchBaseQueryError
    | SerializedError
    | GeneralApiError
    | ZodError
    | undefined
): error is GeneralApiError => {
  return (
    typeof error === "object" &&
    "data" in error &&
    typeof (error.data as { message?: string }).message === "string"
  );
};

export const getErrors = (
  error:
    | FetchBaseQueryError
    | SerializedError
    | GeneralApiError
    | ZodError
    | undefined
) => {
  if (isErrorWithMessage(error)) {
    return error.data.message;
  }

  if (typeof error === "string") {
    return error;
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (isZodError(error)) {
    const errorsArr: FieldError[] = error.data.error.map((err) => ({
      field: err.path[1],
      message: err.message,
    }));

    return errorsArr;
  }

  return "Unknown error";
};
