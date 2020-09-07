import React from "react";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { users } from "./data/users";
import { phleets } from "./data/phleets";
import { Link, useParams } from "react-router-dom";

export const PhleetDetails = () => {
  let { phleetId } = useParams();
  const phleet = phleets.find((phleet) => phleet.id === parseInt(phleetId));
  const { likers, content, author_id, posted_at } = phleet;
  console.log(likers);
  console.log(
    likers.map((liker) => users.find((user) => user.id === liker).name)
  );
  return (
    <Container>
      <Row style={{ marginBottom: 25 }}>
        <Col>
          <h1>"{content}"</h1>
          <h2>
            <Link to={`/users/${author_id}`}>
              {users.find((user) => user.id === author_id).name}
            </Link>
          </h2>
        </Col>
        <Col>
          <h2>
            {likers.length} {likers.length === 1 ? "Like" : "Likes"}
          </h2>
          <ul>
            {likers.map((liker) => (
              <li>
                <Link to={`/users/${liker}`}>
                  {users.find((user) => user.id === liker).name}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            variant="outline-secondary"
            style={{ marginRight: 10, marginLeft: 10 }}
          >
            Like
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
