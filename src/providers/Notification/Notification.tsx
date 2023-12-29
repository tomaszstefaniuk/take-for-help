import { Snackbar, Alert } from "@mui/material";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";

type NotificationSeverity = "success" | "info" | "warning" | "error";

type Notification = {
  isOpen: boolean;
  message: string;
  severity: NotificationSeverity;
};

const NotificationContext = createContext<
  | {
      showNotification: (
        message: string,
        severity?: NotificationSeverity
      ) => void;
    }
  | undefined
>(undefined);

export const NotificationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notification, setNotification] = useState<Notification>({
    isOpen: false,
    message: "",
    severity: "info",
  });

  const showNotification = (
    message: string,
    severity: NotificationSeverity = "info"
  ) => {
    setNotification({
      isOpen: true,
      message,
      severity,
    });
  };

  const closeNotification = () => {
    setNotification((prevNotification) => ({
      ...prevNotification,
      isOpen: false,
    }));
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Snackbar
        open={notification.isOpen}
        autoHideDuration={6000}
        onClose={closeNotification}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert onClose={closeNotification} severity={notification.severity}>
          {notification.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }

  return context;
};
