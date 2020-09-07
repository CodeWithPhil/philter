import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { PhleetOverview } from "./PhleetOverview";

export const Timeline = ({ phleets }) => {
  phleets.sort((a, b) => a.posted_at < b.posted_at);
  return (
    <Container fluid>
      <h1>Timeline</h1>
      <Col>
        {phleets.map((phleet) => (
          <PhleetOverview phleet={phleet} />
        ))}
      </Col>
    </Container>
  );
};
