import React, { useState, useEffect, useContext, useRef } from "react";
import withWidth from "@material-ui/core/withWidth";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import CancelIcon from "@material-ui/icons/Cancel";

import { ReplyMessageContext } from "../../context/ReplyingMessage/ReplyingMessageContext";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    backgroundColor: theme.palette.bordabox,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
  },
  newMessageBox: {
    backgroundColor: theme.palette.newmessagebox,
    width: "100%",
    display: "flex",
    padding: "7px",
    alignItems: "center",
    position: "relative",
  },
  sendMessageIcons: {
    color: "grey",
  },
}));

const MessageInputCustom = (props) => {
  const { ticketStatus, ticketId } = props;
  const classes = useStyles();
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const { setReplyingMessage, replyingMessage } = useContext(ReplyMessageContext);
  const { user } = useContext(AuthContext);
  const [signMessage, setSignMessage] = useLocalStorage("signOption", true);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;
    setLoading(true);
    console.log("Sending message:", inputMessage);
    setInputMessage("");
    setLoading(false);
    setReplyingMessage(null);
  };

  const disableOption = () => {
    return loading || ticketStatus !== "open";
  };

  return (
    <Paper square elevation={0} className={classes.mainWrapper}>
      {replyingMessage && <div>Replying to message</div>}

      <div className={classes.newMessageBox}>
        <input
          ref={inputRef}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
          disabled={disableOption()}
          style={{ flex: 1, padding: "10px", border: "none" }}
        />

        <IconButton
          aria-label="sendMessage"
          component="span"
          onClick={handleSendMessage}
          disabled={loading}
        >
          <SendIcon className={classes.sendMessageIcons} />
        </IconButton>
      </div>
    </Paper>
  );
};

export default withWidth()(MessageInputCustom);
