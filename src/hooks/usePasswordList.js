import { useEffect, useState } from "react";
import { getAllPasswords } from "../server/user";

export default function usePasswordList(userID) {
  const [passwordList, setPasswordList] = useState([]);
  function handleRefreshList() {
    getAllPasswords(userID).then((res) =>
      setPasswordList([...res.data.listPasswords.items])
    );
  }
  useEffect(() => {
    handleRefreshList();
  }, []);
  return [passwordList, () => handleRefreshList()];
}
