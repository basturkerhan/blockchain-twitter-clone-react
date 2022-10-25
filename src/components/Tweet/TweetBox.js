import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Modal, Form } from "react-bootstrap";
import { useTwitterContract } from "../../hooks/useTwitterContract";
import { useDispatch } from "react-redux";
import { addTweet } from "../../store/slices/data";

export const TweetBox = ({setModalShow, show, onHide, allTweets}) => {
  const [tweetSending, setTweetSending] = useState(false);
  const twitterContract = useTwitterContract();
  const [text,setText] = useState("");
  const dispatch = useDispatch();

  const addTweetEvent = async (e) => {
    e.preventDefault();
    setTweetSending(true);
    try {
      const transaction = await twitterContract
        .addTweet(text, false);
      await transaction.wait();
      setTweetSending(false);
    } catch (error) {
      console.log(error);
      setTweetSending(false);
    }
  };

  useEffect(()=>{
    twitterContract?.on("AddTweet", listener);

    return () => {
      twitterContract?.off("AddTweet", listener);
    }
  }, [twitterContract]);

  const listener = (ownerAddress, tweetId) => {
    const tweet = {
      id: tweetId,
      username: ownerAddress,
      tweetText: document.getElementById("tweetInput")?.value,
      isDeleted: false,
      likeCount: 0,
      commentCount: 0,
    };

    dispatch(addTweet(tweet));
    setTweetSending(false);
    setText("");
    setModalShow(false);
  }

  return (
    <Modal show={show} onHide={onHide} size="md" centered>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              id="tweetInput"
              style={{ border: "none" }}
              onChange={(e) => {setText(e.target.value)}}
              value={text}
              type="text"
              placeholder="tweet..."
            />
          </Form.Group>
          <Button
            size="sm"
            disabled={tweetSending}
            onClick={(e) => addTweetEvent(e)}
            variant="info"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
