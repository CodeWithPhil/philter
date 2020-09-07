import React from "react";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { users } from "./data/users";
import { Link } from "react-router-dom";

export const PhleetOverview = ({ phleet }) => {
  const { likers, content, author_id, posted_at, id } = phleet;
  return (
    <Row style={{ marginBottom: 25 }}>
      <Card style={{ width: "100%" }}>
        <Card.Header>
          <h5>
            <Link to={`/users/${author_id}`}>
              {users.find((user) => user.id === author_id).name}
            </Link>
          </h5>
        </Card.Header>
        <Card.Body>
          <h4>{content}</h4>
        </Card.Body>
        <Card.Footer>
          {moment(posted_at).format("LL")}
          <Button
            variant="outline-secondary"
            style={{ marginRight: 10, marginLeft: 10 }}
          >
            {likers.length} {likers.length === 1 ? "Like" : "Likes"}
          </Button>
          <Link to={`/details/${id}`}>
            <Button variant="outline-primary">Details</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Row>
  );
};
