import { FaPhoneAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import css from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  const handleDeleteContact = () => {
    onDeleteContact(contact.id);
  };

  return (
    <li className={css.contact}>
      <div className={css.contactContainer}>
        <a href="" className={css.contactItem}>
          <MdPerson /> {contact.name}
        </a>
        <a href="" className={css.contactItem}>
          <FaPhoneAlt /> {contact.number}
        </a>
      </div>

      <button className={css.contactBtn} onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
