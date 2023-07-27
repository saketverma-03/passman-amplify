import React from "react";
import Table_Item from "./TableItem";

import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const Table_body = ({ list }) => {
  return (
    <TableContainer>
      {/* <Button onClick={() => console.log(list)}>lol</Button> */}
      <Table
        colorScheme={"dark"}
        position={"absolute"}
        zIndex={"9"}
        backgroundColor={"#130f40"}
        color={"whatsapp.100"}
        variant="simple"
        size={"sm"}
      >
        <TableCaption>All Saved Credentials will show here</TableCaption>
        <Thead>
          <Tr>
            <Th>Website</Th>
            <Th>Username</Th>
            <Th>Password</Th>
            <Th>Options</Th>
          </Tr>
        </Thead>
        <Tbody>
          {list.map((item, i) => {
            return (
              <Table_Item
                key={crypto.randomUUID()}
                data={{
                  id: item.id,
                  website: item.website,
                  username: item.username,
                  password: item.password,
                  // userId: item.userId,
                  _version: item._version,
                }}
              />
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Table_body;
