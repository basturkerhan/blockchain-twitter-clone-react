import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useName } from "../../hooks/useName";
import { useUserName } from "../../hooks/useUserName";
import { useBio } from "../../hooks/useBio";
import { useTwitterContract } from "../../hooks/useTwitterContract";
import { useSigner } from "../../hooks/useSigner";
import { batch, useDispatch } from "react-redux";
import { setName, setUsername, setBio } from "../../store/slices/user";

export const EditProfile = ({setModalShow, show, onHide}) => {
  const [name, setStateName] = useState(useName());
  const [username, setStateUsername] = useState(useUserName());
  const [bio, setStateBio] = useState(useBio());
  const twitterContract = useTwitterContract();
  const signer = useSigner();
  const [profileSending, setProfileSending] = useState(false);
  const dispatch = useDispatch();

  const editProfile = async (e) => {
    e.preventDefault();
    setProfileSending(true);
    const transaction = await twitterContract.connect(signer).uploadProfile(username, name, bio);
    await transaction.wait();
    setProfileSending(false);
    batch(() => {
      dispatch(setName(name));
      dispatch(setUsername(username));
      dispatch(setBio(bio));
    })
    setModalShow(false);
  }

  return (
    <Modal show={show} onHide={onHide} size="md" centered>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              style={{ border: "none" }}
              onChange={(e) => setStateName(e.target.value)}
              type="text"
              placeholder="name"
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              style={{ border: "none" }}
              onChange={(e) => setStateUsername(e.target.value)}
              type="text"
              placeholder="username"
              value={username}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              style={{ border: "none" }}
              onChange={(e) => setStateBio(e.target.value)}
              type="text"
              placeholder="bio"
              value={bio}
            />
          </Form.Group>
          <Button
            size="sm"
            onClick={(e)=>editProfile(e)}
            disabled={profileSending}
            variant="info"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
