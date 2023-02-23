
import React, { useState } from "react";
import styles from "./App.module.css";

import Modal from "./Modal";

const Apps = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </main>
  );
};

export default Apps;