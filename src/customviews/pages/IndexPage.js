/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card,
     CardHeader, 
     CardBody,
      CardTitle,
       Row, 
       Col,
       Modal,
       NavItem,
       NavLink,
       Nav,
       TabContent,
       TabPane,
       Button,
       Collapse,
       DropdownToggle,
       DropdownMenu,
       DropdownItem,
       UncontrolledDropdown,
       Input,
       InputGroup,
       NavbarBrand,
       Navbar,
       
       
        Container,
        
        UncontrolledTooltip
    } from "reactstrap";

    // import {
    //     Card,
    //     CardHeader,
    //     CardBody,
    //     CardTitle,
    //     Collapse,
    //     NavItem,
    //     NavLink,
    //     Nav,
    //     TabContent,
    //     TabPane,
    //     Row,
    //     Col
    //   } from "reactstrap";

    import {closeButton} from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";

import "../../assets/css/custom/index-page.css";

// core components
import SortingTable from "components/SortingTable/SortingTable.jsx";

class IndexPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          alert: null,
          modalShow:false,
          modalClose:true,
          horizontalTabs:'comments'
        };
      }

    inputAlert = () => {

        
        this.setState({
          alert: (
            <ReactBSAlert
              input
              showCancel
              style={{ display: "block", marginTop: "-100px" }}
              title="Input something"
              onConfirm={e => this.inputConfirmAlert(e)}
              onCancel={() => this.hideAlert()}
              confirmBtnBsStyle="success"
              cancelBtnBsStyle="danger"
              btnSize=""
            />
          )
          
        });
      };

      inputConfirmAlert = e => {
        this.setState({ alert: e });
        setTimeout(this.inputConfirmAlertNext, 200);
      };

      hideAlert = () => {
        this.setState({
          alert: null
        });
      };

    //    [show, setShow] = useState(false);

       handleClose = () => {
        this.setState({
            modalShow: false,
            modalClose:true
          });
       }
       handleShow = () => {
        this.setState({
            modalShow: true,
            modalClose:false
          });

        //   console.log('test', this.state.modalShow)
         
       }


       changeActiveTab = (e, tabState, tadName) => {
        e.preventDefault();
        this.setState({
          [tabState]: tadName
        });
      };

  render() {
    
    return (
      <>
        <div className="content">
        {this.state.alert}
        <Card>
          <Row  >
              <Col className="mb-5 ml-2" 
              md={{span: 2, order: 1}}
              sm={{span: 2, order: 1}}
              xs={{span: 2, order: 1}}
               
               >
              <CardHeader>
                  <CardTitle tag="h4">Index</CardTitle>
              </CardHeader>
              </Col>

              <Col className="mb-5 float-md-right float-sm-right"  
               lg={{span: 2, order: 2,offset:8}}
               md={{span: 2, order: 2,offset:8}} 
               sm={{span: 2, order: 2,offset:6}} 
               xs={{span: 2, order: 2,offset:3}}
                
                
                >
                <CardHeader>
                <CardTitle tag="h4" ><div className="ip_comment_button" onClick={this.handleShow}><i className="fa fa-comment " aria-hidden="true"></i></div></CardTitle>
                
                </CardHeader>
                
              </Col>

              <Col className="mb-5"  
               md={{span: 2,order: 3,offset:1}} 
               sm={{span: 2,order: 3,offset:1}} 
               xs={{span: 2,order: 3,offset:1}}
                >

               
                    
               
                <CardHeader>
                
                <UncontrolledDropdown>
                  <DropdownToggle
                    
                    color="default"
                    data-toggle="dropdown"
                    nav
                  >
                    
                    <h4 style={{marginTop:'-8px'}}><span className="in_dot">ooo</span></h4>
                    
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar" right tag="ul">
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                          
                        <i style={{fontSize:'12px'}} className='tim-icons icon-simple-add'></i>Add section
                      </DropdownItem>
                    </NavLink>
                    <DropdownItem divider tag="li" />
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i style={{fontSize:'12px'}} className='tim-icons icon-calendar-60'></i> Sort by date 
                      
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i style={{fontSize:'12px'}} className='tim-icons icon-check-2'></i> Sort by priority
                      </DropdownItem>
                    </NavLink>
                    
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i style={{fontSize:'12px'}} className='tim-icons icon-check-2'></i> Sort by name
                      </DropdownItem>
                    </NavLink>
                    <DropdownItem divider tag="li" />
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i className='fas fa-upload'></i> Import from template
                      </DropdownItem>
                    </NavLink>
                    
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i className='fas fa-download'></i> Export as a template
                      </DropdownItem>
                    </NavLink>
                    <DropdownItem divider tag="li" />
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i style={{fontSize:'12px'}} className='tim-icons icon-email-85'></i> Email tasks to this project
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i style={{fontSize:'12px'}} className='tim-icons icon-calendar-60'></i> Project calendar feed
                      </DropdownItem>
                    </NavLink>
                    
                    
                    <DropdownItem divider tag="li" />
                    <NavLink tag="li" style={{padding:0}}>
                      <DropdownItem className="nav-item">
                      <i style={{fontSize:'12px'}} className='tim-icons icon-bullet-list-67'></i> Show completed tasks
                      </DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                </CardHeader>
                

                










                <Modal isOpen={this.state.modalShow} size="lg">
                    
                   

                    <Card>
                        <CardHeader>
                        <table style={{width:'100%'}}>
                            <tbody>
                            <tr>
                                <td>Index</td>
                                <td style={{textAlign:'right'}}>
                                    <span className='in_cross_button' onClick={this.handleClose}>X</span>
                                </td>
                            </tr>
                            </tbody>
                            
                        </table>
                        <hr/>
                        </CardHeader>
                       
                        <CardBody>
                        <Nav className="nav-pills-info" pills>
                            <NavItem style={{width:'50%'}}>
                            <NavLink
                                data-toggle="tab"
                                href="#pablo"
                                className={
                                this.state.horizontalTabs === "comments"
                                    ? "active"
                                    : ""
                                }
                                onClick={e =>
                                this.changeActiveTab(e, "horizontalTabs", "comments")
                                }
                            >
                                Comments
                            </NavLink>
                            </NavItem>
                            <NavItem style={{width:'50%'}}>
                            <NavLink
                                data-toggle="tab"
                                href="#pablo"
                                className={
                                this.state.horizontalTabs === "activity"
                                    ? "active"
                                    : ""
                                }
                                onClick={e =>
                                this.changeActiveTab(e, "horizontalTabs", "activity")
                                }
                            >
                                Activity
                            </NavLink>
                            </NavItem>
                           
                        </Nav>
                        <TabContent
                            className="tab-space"
                            activeTab={this.state.horizontalTabs}
                        >
                            <TabPane tabId="comments">
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate B2C
                            users after installed base benefits. <br />
                            <br />
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI.
                            </TabPane>
                            <TabPane tabId="activity">
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely deliverables
                            for real-time schemas. <br />
                            <br />
                            Dramatically maintain clicks-and-mortar solutions without
                            functional solutions.
                            </TabPane>
                            
                        </TabContent>
                        </CardBody>
                    </Card>
                </Modal>

                {/* <CardBody className="text-center">
                    
                    
                      <h4><i onClick={this.inputAlert} className="tim-icons icon-user-run"></i></h4>
                    
                </CardBody> */}
                
                {/* <CardHeader>

                <CardTitle tag="h4"><i className="tim-icons icon-user-run"></i></CardTitle>
                </CardHeader> */}

                
              </Col>
          </Row>
          </Card>
          <Row>
            <Col className="mb-5" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4"><b>Index</b></CardTitle>
                </CardHeader>
                <CardBody>
                  <SortingTable
                    thead={[
                      { text: "Name" },
                      { text: "Country" },
                      { text: "City" },
                      { className: "text-center", text: "Salary" }
                    ]}
                    tbody={[
                      {
                        data: [
                          { text: "Dakota Rice" },
                          { text: "Niger" },
                          { text: "Oud-Turnhout" },
                          { className: "text-center", text: "$36,738" }
                        ]
                      },
                      {
                        data: [
                          { text: "Minerva Hooper" },
                          { text: "Curaçao" },
                          { text: "Sinaai-Waas" },
                          { className: "text-center", text: "$23,789" }
                        ]
                      },
                      {
                        data: [
                          { text: "Sage Rodriguez" },
                          { text: "Netherlands" },
                          { text: "Baileux" },
                          { className: "text-center", text: "$56,142" }
                        ]
                      },
                      {
                        data: [
                          { text: "Philip Chaney" },
                          { text: "Korea, South" },
                          { text: "Overland Park" },
                          { className: "text-center", text: "$38,735" }
                        ]
                      },
                      {
                        data: [
                          { text: "Doris Greene" },
                          { text: "Malawi" },
                          { text: "Feldkirchen in Kärnten" },
                          { className: "text-center", text: "$63,542" }
                        ]
                      },
                      {
                        data: [
                          { text: "Mason Porter" },
                          { text: "Chile" },
                          { text: "Gloucester" },
                          { className: "text-center", text: "$78,615" }
                        ]
                      },
                      {
                        data: [
                          { text: "Jon Porter" },
                          { text: "Portugal" },
                          { text: "Gloucester" },
                          { className: "text-center", text: "$98,615" }
                        ]
                      }
                    ]}
                  />
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </div>
      </>
    );
  }
}

export default IndexPage;
