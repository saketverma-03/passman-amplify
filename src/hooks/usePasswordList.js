import { useEffect, useState } from "react";
import { getAllPasswords } from "../server/user";

export default function usePasswordList(userID) {
  const [passwordList, setPasswordList] = useState([]);
  useEffect(() => {
    getAllPasswords(userID).then((res) =>
      setPasswordList([...res.data.listPasswords.items])
    );
  }, []);

  return [passwordList];
}
