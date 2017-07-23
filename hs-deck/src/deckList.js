import { List, ListItem } from "material-ui/List";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentSend from "material-ui/svg-icons/content/send";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import Divider from "material-ui/Divider";
import ActionInfo from "material-ui/svg-icons/action/info";
import TextField from "material-ui/TextField";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import Avatar from "material-ui/Avatar";
import { red500, yellow500, blue500 } from "material-ui/styles/colors";

import React, { Component } from "react";

var topStyle = {
  textAlign: "left",
  marginLeft: "30px"
};
export default class DeckList extends Component {
  render() {
    return (
      <div>
        <div class="top" style={topStyle}>
          <TextField hintText="Hint Text" type="email" />
          <IconButton>
            <FontIcon className="material-icons">search</FontIcon>
          </IconButton>
        </div>
      </div>
    );
  }
}
