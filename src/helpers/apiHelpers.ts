import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type GeneralApiError = {
  data: { message: string };
};

export function isErrorWithMessage(
  error: FetchBaseQueryError | SerializedError | GeneralApiError | undefined
): error is GeneralApiError {
  return (
    typeof error === "object" &&
    "data" in error &&
    typeof (error.data as { message?: string }).message === "string"
  );
}
