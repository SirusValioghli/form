import { toast } from "react-toastify";

const notify = (text, type) => {
  if (type === "success") {
    toast.success(text, { theme: "colored" });
  } else {
    toast.error(text, { theme: "colored" });
  }
};

export default notify;
