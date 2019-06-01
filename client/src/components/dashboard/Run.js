import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteRun, getRun } from "../../actions";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

import "./Run.scss";

class Run extends Component {
  render() {
    return (
      <Card className="run">
        {/* <CardImg
          src="https://cdn.runningshoesguru.com/wp-content/uploads/2018/11/Best-Nike-Running-Shoes.jpg"
          alt="Image"
          className="runImg"
        /> */}
        <CardBody>
          <CardTitle>Date: {this.props.date}</CardTitle>
          <CardTitle>Distance: {this.props.distance}mi</CardTitle>
          <CardTitle>Duration: {this.props.duration}</CardTitle>
          <CardTitle>Location: {this.props.location}</CardTitle>
          <CardText>Description: {this.props.description}</CardText>
          <Link to={"/editrun"}>
            <Button
              color="warning"
              onClick={e => localStorage.setItem("currentRunID", this.props.id)}
            >
              Edit
            </Button>{" "}
          </Link>
          <Button
            color="danger"
            onClick={e => this.props.deleteRun(this.props.id)}
          >
            Delete
          </Button>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  run: state.run
});

export default connect(
  mapStateToProps,
  { deleteRun, getRun }
)(Run);
