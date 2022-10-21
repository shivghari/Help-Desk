import { toast } from "react-toastify";
class Notification {
  // Handle the Notification showing in Project.

  static warningNotification = (text) => {
    toast.warning(text, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  static errorNotification = (text) => {
    toast.error(text, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  static successNotification = (text) => {
    toast.success(text, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
}

export default Notification;
