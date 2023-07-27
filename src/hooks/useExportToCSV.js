import { getAllPasswords } from "../server/user";

export default function useExportsToCSV(passwordList) {
  getAllPasswords();
  const headers = [
    { label: "Website", key: "website" },
    { label: "Username", key: "username" },
    { label: "Password", key: "password" },
  ];
  const data = [...passwordList];
  return [headers, data];
}
