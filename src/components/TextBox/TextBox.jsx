import { useState } from "react";
import styles from './TextBox.module.css'

function DigitInput() {
  const [value, setValue] = useState("");

  function handleChange(e) {

    let filtered = e.target.value.replace(/[^0-8]/g, "");

    if (filtered.length > 1) {
      filtered = filtered.slice(0, 1);
    }

    setValue(filtered);
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      maxLength={1}
      placeholder="0–8"
      className={styles.textBox}
    />
  );
}
export default DigitInput 