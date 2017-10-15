import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { Table, TableItem } from "../../components/Table";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Employees extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    this.loadEmps();
    console.log(this.props.empData);
    console.log(this.state.empData);
  }

  loadEmps = () => {
    API.getEmps()
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
            <Jumbotron>
              <h3>Select Qualifications Needed Below</h3>
            </Jumbotron>
            
          </Col>
          <Col size="md-9">
            <Jumbotron>
              <h1>Employees</h1>
            </Jumbotron>
            {this.state.employees.length ? (
              <Table>
                {this.state.employees.map(employee => (
                  <TableItem key={employee.empNum}>
                    <td>{employee.name}</td>
                    <td>{employee.empNum}</td>
                    <td>{employee.title}</td>
                    <td>{employee.crew}</td>
                  </TableItem>
                ))}
              </Table>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Employees;
