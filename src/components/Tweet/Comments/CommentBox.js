import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useAddress } from "../../../hooks/useAddress";
import { useSigner } from "../../../hooks/useSigner";
import { useTwitterContract } from "../../../hooks/useTwitterContract";

const CommentBox = ({ tweetId, addNewComment }) => {
  const [commentSending, setCommentSending] = useState(false);
  const twitterContract = useTwitterContract();
  const [text, setText] = useState("");
  const address = useAddress();
  const signer = useSigner();

  const addComment = async (e) => {
    e.preventDefault();
    setCommentSending(true);
    try {
      setCommentSending(true);
      const transaction = await twitterContract
        .connect(signer)
        .commentTweet(tweetId, text);
      await transaction.wait();
    } catch (error) {
      console.log(error);
      setCommentSending(false);
    }
  };

  useEffect(()=>{
    twitterContract?.on("CommentTweet", listener);

    return () => {
      twitterContract?.off("CommentTweet", listener);
    }
  }, [twitterContract]);

  const listener = (tweetId, commentText, commentId) => {
    const comment = {
      id: commentId,
      commentOwner: address,
      commentText: commentText,
      isDeleted: false,
      tweetId: tweetId
    };
    addNewComment(comment);
    setCommentSending(false);
    setText("");
  }

  return (
    <Row>
      <Col xs={10}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control className="comment-form"
              onChange={(e) => setText(e.target.value)}
              value={text}
              type="text"
              placeholder="comment..."
              //   onKeyDown={(event) => pressKey(event)}
              disabled={commentSending}
            />
          </Form.Group>
        </Form>
      </Col>
      
      <Col xs={2}>
        <Button
        className="comment-button"
        variant="success" 
        onClick={e => addComment(e)}
        disabled={commentSending}>
            Comment
        </Button>
      </Col>
    </Row>
  );
};

export default CommentBox;
