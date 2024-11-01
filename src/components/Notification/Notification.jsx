import { GrJava } from "react-icons/gr";
import css from "./Notification.module.css";

function Notification() {
  return (
    <div>
      <p className={css.textNotif}>No feedback yet</p>
      <GrJava size={30} color="chocolate" />
    </div>
  );
}

export default Notification;
