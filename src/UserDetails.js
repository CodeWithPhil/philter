import React from "react";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { PhleetOverview } from "./PhleetOverview";
import { users } from "./data/users";
import { phleets } from "./data/phleets";
import { Link, useParams } from "react-router-dom";

export const UserDetails = () => {
  let { userId } = useParams();
  const user = users.find((user) => user.id === parseInt(userId));
  const userPhleets = phleets.filter((phleet) => phleet.author_id === user.id);
  const { name, username, followers, following, id, bio } = user;
  return (
    <Container>
      <Row style={{ marginBottom: 25 }}>
        <Col>
          {user.avatar_url ? (
            <img src={user.avatar_url} stlye={{ maxWidth: 400 }} />
          ) : null}
          <h1>
            {name} (@{username})
          </h1>
          <p>
            {followers.length}{" "}
            {followers.length === 1 ? "Follower" : "Followers"} |{" "}
            {following.length} Following
          </p>
          <p>{bio}</p>
        </Col>
        <Col>
          {userPhleets.map((phleet) => (
            <PhleetOverview phleet={phleet} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
