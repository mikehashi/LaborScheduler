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
      console.log('loading here');
  };

  getInitialState = () => {
    return {
      selectedOption: 'A330PW'
    }
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
            <Jumbotron>
              <h3>Select ETOPS Needed Below</h3>
            </Jumbotron>
            <form>
              <div className = "radio">
                <label>
                  <input type="radio" value="A330PW" 
                  checked={this.state.selectedOption === 'A330PW' } 
                  onChange = {this.handleOptionChange} />
                  A330 PW
                </label>
              </div>
              <div className = "radio">
                <label>
                  <input type="radio" value="B737NG" 
                  checked={this.state.selectedOption === 'B737NG' } 
                  onChange = {this.handleOptionChange} />
                  B737 NG
                </label>
              </div>
              <div className = "radio">
                <label>
                  <input type="radio" value="B757" 
                  checked={this.state.selectedOption === 'B757' }
                  onChange = {this.handleOptionChange} />
                  B757
                </label>
              </div>
              <div className = "radio">
                <label>
                  <input type="radio" value="B767300" 
                  checked={this.state.selectedOption === 'B767300' }
                  onChange = {this.handleOptionChange} />
                  B767-300
                </label>
              </div>
              <div className = "radio">
                <label>
                  <input type="radio" value="B767400" 
                  checked={this.state.selectedOption === 'B767400' }
                  onChange = {this.handleOptionChange} />
                  B767-400
                </label>
              </div>
              <div className = "radio">
                <label>
                  <input type="radio" value="B777 ER" 
                  checked={this.state.selectedOption === 'B777ER' }
                  onChange = {this.handleOptionChange} />
                  B777 ER
                </label>
              </div>
              <div className = "radio">
                <label>
                  <input type="radio" value="B777LR" 
                  checked={this.state.selectedOption === 'B777LR' }
                  onChange = {this.handleOptionChange} />
                  B777 LR
                </label>
              </div>

            </form>
            
          </Col>
          <Col size="md-9">
            <Jumbotron>
              <h1>Employees</h1>
            </Jumbotron>
            {this.state.employees.length ? (
              <Table>
                {this.state.employees.map(employee => (
                  <TableItem key={employee.empNum}>
                    <td>{employee.Name}</td>
                    <td>{employee.EmpNum}</td>
                    <td>{employee.Title}</td>
                    <td>{employee.Crew}</td>
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
