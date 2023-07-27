import {
  CopyIcon,
  DeleteIcon,
  EditIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import {
  Button,
  HStack,
  IconButton,
  Link,
  Td,
  Tooltip,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React from "react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { mutationDeleteCredential } from "../server/user";

function Table_Item(props) {
  const { id, website, username, password, _version } = props.data;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();

  /* TODO create removePasswordMutation and clip it here */
  async function handleDelete() {
    console.log("trying to delete");
    try {
      await mutationDeleteCredential(id, _version);
    } catch (e) {
      console.log(e);
    }

    toast({
      title: `Deleted Successfully`,
      status: "success",
      duration: 2000,
      position: "top",
      variant: "subtle",
    });
    onClose();
  }

  return (
    <>
      <Tr>
        <Td>
          <Tooltip label={`go to ${website}`}>
            <Link
              href={
                website.substring(0, 4) == "http"
                  ? website
                  : "https://" + website
              }
              target="_blank"
              isExternal
            >
              {website} <ExternalLinkIcon mx="2px" />
            </Link>
          </Tooltip>
        </Td>
        <Td>
          {}
          {username}
          <CopyTextButton text={username} />
        </Td>
        <Td isNumeric>
          {password}

          <CopyTextButton text={password} />
        </Td>
        <Td>
          <HStack spacing="24px">
            <RouterLink
              to="/UpdatePassword"
              // TODO: add other Pareameters to lication
              state={{ id, website, username, password, _version }}
            >
              <IconButton
                variant="ghost"
                colorScheme="twitter"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<EditIcon />}
              />
            </RouterLink>

            <IconButton
              variant="ghost"
              colorScheme="twitter"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<DeleteIcon />}
              onClick={onOpen}
            />
          </HStack>
        </Td>
      </Tr>
      <>
        {/* Alatert dilog appears when delet button is clicked */}
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Customer
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    handleDelete();
                  }}
                  ml={3}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    </>
  );
}

function CopyTextButton({ text }) {
  const toast = useToast();
  function handleClick() {
    navigator.clipboard.writeText(text);
    toast({
      title: `Copied to clipboard`,
      status: "success",
      duration: 1000,
      position: "top",
      variant: "subtle",
    });
  }

  return (
    <IconButton
      variant="ghost"
      colorScheme="twitter"
      aria-label="Call Sage"
      fontSize="15px"
      marginLeft="20px"
      icon={<CopyIcon />}
      onClick={handleClick}
    />
  );
}

export default Table_Item;
