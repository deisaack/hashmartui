import React  from "react";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody,  MDBCardHeader, MDBIcon } from "mdbreact";
import {ArrowRoundedLeft6x9Svg} from "../../svg";
import {Link} from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

class FilterCategComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapseID:"",
            collID:"",
            innerNestID:"",
        }
    }

    toggleCollapse = (collapseID) => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }
    toggleCollapseNest = (collID) => {
        this.setState(prevState => ({
            collID: prevState.collID !== collID ? collID : ""
        }));
    }
    toggleCollapseInnerNest = (innerNestID) => {
        this.setState(prevState => ({
            innerNestID: prevState.innerNestID !== innerNestID ? innerNestID : ""
        }));
    }


    render() {
        const { collapseID } = this.state;
        const {collID} = this.state;
        const {innerNestID} = this.state;
        return (
            <MDBContainer>
                <MDBContainer className='md-accordion mt-5'>
                    <MDBCard className='mt-3'>
                        <MDBCardHeader
                            tagClassName='d-flex justify-content-between'
                            onClick={() => this.toggleCollapse('collapse1')}
                        >
                         Category
                            <MDBIcon className="fa-pull-right"
                                icon={collapseID === 'collapse1' ? 'angle-up' : 'angle-down'}
                            />
                        </MDBCardHeader>

                        <MDBCollapse id='collapse1' isOpen={collapseID}>
                            <ul className="mainCategory">
                                <List>
                                    <ListItem
                                        tagClassName='d-flex justify-content-betwee'
                                        onClick={() => this.toggleCollapseNest('collapse4')}
                                    >
                                      Phones &amp; Tables
                                        <MDBIcon className="text-pull-right"
                                            icon={collID === 'collapse4' ? 'angle-up' : 'angle-down'}
                                        />
                                        <Divider/>
                                    </ListItem>
                                    <MDBCollapse id='collapse4' isOpen={collID}>
                                        <ul className="subCategoryBody">
                                            <ListItem divider
                                                tagClassName='d-flex justify-content-between'
                                                onClick={() => this.toggleCollapseInnerNest('collapse5')}
                                            >
                                               Mobile Phones
                                                <MDBIcon
                                                    icon={innerNestID === 'collapse5' ? 'angle-up' : 'angle-down'}
                                                />
                                            </ListItem>
                                            <MDBCollapse id='collapse5' isOpen={innerNestID}>
                                                <ul className="innerNestBody">
                                                    <List component="nav" aria-label="mailbox folders">
                                                     <ListItem button >
                                                          <ListItemText primary="Smartphones"  />
                                                        </ListItem>
                                                        <Divider />
                                                        <ListItem button divider>
                                                            <ListItemText primary="Blu Phones" />
                                                        </ListItem>
                                                        <ListItem button>
                                                            <ListItemText primary="Feauture Phones" />
                                                        </ListItem>
                                                        <Divider light />
                                                        <ListItem button divider>
                                                            <ListItemText primary="iPhones" />
                                                        </ListItem>
                                                        <ListItem button divider>
                                                            <ListItemText primary="Google Phones" />
                                                        </ListItem>
                                                    </List>

                                                </ul>
                                            </MDBCollapse>

                                        </ul>
                                    </MDBCollapse>

                                <MDBCollapse id='collapse4' isOpen={collID}>
                                        <ul className="subCategoryBody">
                                            <ListItem divider
                                                tagClassName='d-flex justify-content-between'
                                                onClick={() => this.toggleCollapseInnerNest('collapse6')}
                                            >
                                              Accessories
                                                <MDBIcon className=" "
                                                    icon={innerNestID === 'collapse6' ? 'angle-up' : 'angle-down'}
                                                />

                                            </ListItem>
                                            <MDBCollapse id='collapse6' isOpen={innerNestID}>
                                                <ul className="innerNestBody">

                                                        <List component="nav">
                                                            <ListItem button >
                                                                <ListItemText primary="Batteries"  />
                                                            </ListItem>
                                                            <Divider />
                                                            <ListItem button divider>
                                                                <ListItemText primary="Cables" />
                                                            </ListItem>
                                                            <ListItem button>
                                                                <ListItemText primary="Chargers" />
                                                            </ListItem>
                                                            <Divider light />
                                                            <ListItem button divider>
                                                                <ListItemText primary="Covers" />
                                                            </ListItem>
                                                            <ListItem button divider>
                                                                <ListItemText primary="Powerbanks" />
                                                            </ListItem>
                                                        </List>

                                                </ul>
                                            </MDBCollapse>

                                        </ul>
                                    </MDBCollapse>
                                <MDBCollapse id='collapse4' isOpen={collID}>
                                        <ul className="subCategoryBody">
                                            <ListItem divider
                                                tagClassName='d-flex justify-content-between'
                                                onClick={() => this.toggleCollapseInnerNest('collapse8')}
                                            >
                                             Tablets
                                                <MDBIcon
                                                    icon={innerNestID === 'collapse8' ? 'angle-up' : 'angle-down'}
                                                />
                                            </ListItem>
                                            <MDBCollapse id='collapse8' isOpen={innerNestID}>
                                                <ul className="innerNestBody">
                                                    <List component="nav" aria-label="mailbox folders">
                                                        <ListItem button >
                                                            <ListItemText primary="iPad"  />
                                                        </ListItem>
                                                        <Divider />
                                                        <ListItem button divider>
                                                            <ListItemText primary="Kids Tablet" />
                                                        </ListItem>
                                                        <ListItem button>
                                                            <ListItemText primary="Tablet Accessories" />
                                                        </ListItem>
                                                        <Divider light />
                                                        <ListItem button divider>
                                                            <ListItemText primary="Featured Tablets" />
                                                        </ListItem>
                                                    </List>

                                                </ul>
                                            </MDBCollapse>
                                        </ul>
                                    </MDBCollapse>


                                    <ListItem
                                        tagClassName='d-flex justify-content-betwee'
                                        onClick={() => this.toggleCollapseNest('elect1')}
                                    >
                                      Electronics
                                        <MDBIcon className="text-pull-right"
                                            icon={collID === 'elect1' ? 'angle-up' : 'angle-down'}
                                        />
                                        <Divider/>
                                    </ListItem>
                                    <MDBCollapse id='elect1' isOpen={collID}>
                                        <ul className="subCategoryBody">
                                            <ListItem divider
                                                tagClassName='d-flex justify-content-between'
                                                onClick={() => this.toggleCollapseInnerNest('coll5')}
                                            >
                                              Television
                                                <MDBIcon
                                                    icon={innerNestID === 'coll5' ? 'angle-up' : 'angle-down'}
                                                />
                                            </ListItem>
                                            <MDBCollapse id='coll5' isOpen={innerNestID}>
                                                <ul className="innerNestBody">
                                                    <List component="nav" aria-label="mailbox folders">
                                                     <ListItem button >
                                                          <ListItemText primary="Smart Tvs"  />
                                                        </ListItem>
                                                        <Divider />
                                                        <ListItem button divider>
                                                            <ListItemText primary="Curved Tvs" />
                                                        </ListItem>
                                                        <ListItem button>
                                                            <ListItemText primary="Digital Tvs" />
                                                        </ListItem>
                                                        <Divider light />
                                                    </List>

                                                </ul>
                                            </MDBCollapse>

                                        </ul>
                                    </MDBCollapse>

                                <MDBCollapse id='elect1' isOpen={collID}>
                                        <ul className="subCategoryBody">
                                            <ListItem divider
                                                tagClassName='d-flex justify-content-between'
                                                onClick={() => this.toggleCollapseInnerNest('coll6')}
                                            >
                                              Audio &amp; Speakers
                                                <MDBIcon className=" "
                                                    icon={innerNestID === 'coll6' ? 'angle-up' : 'angle-down'}
                                                />

                                            </ListItem>
                                            <MDBCollapse id='coll6' isOpen={innerNestID}>
                                                <ul className="innerNestBody">

                                                        <List component="nav">
                                                            <ListItem button >
                                                                <ListItemText primary="Bluetooth Speakers"  />
                                                            </ListItem>
                                                            <Divider />
                                                            <ListItem button divider>
                                                                <ListItemText primary="DVD Players" />
                                                            </ListItem>
                                                            <ListItem button>
                                                                <ListItemText primary="Sound Bars" />
                                                            </ListItem>
                                                            <Divider light />
                                                            <ListItem button divider>
                                                                <ListItemText primary="Subwoofers" />
                                                            </ListItem>
                                                            <ListItem button divider>
                                                                <ListItemText primary="Home Theaters" />
                                                            </ListItem>
                                                        </List>

                                                </ul>
                                            </MDBCollapse>

                                        </ul>
                                    </MDBCollapse>
                                <MDBCollapse id='elect1' isOpen={collID}>
                                        <ul className="subCategoryBody">
                                            <ListItem divider
                                                tagClassName='d-flex justify-content-between'
                                                onClick={() => this.toggleCollapseInnerNest('coll8')}
                                            >
                                             Audio Devices
                                                <MDBIcon
                                                    icon={innerNestID === 'coll8' ? 'angle-up' : 'angle-down'}
                                                />
                                            </ListItem>
                                            <MDBCollapse id='coll8' isOpen={innerNestID}>
                                                <ul className="innerNestBody">
                                                    <List component="nav" aria-label="mailbox folders">
                                                        <ListItem button >
                                                            <ListItemText primary="Earphones"  />
                                                        </ListItem>
                                                        <Divider />
                                                        <ListItem button divider>
                                                            <ListItemText primary="HeadPhones" />
                                                        </ListItem>
                                                        <ListItem button>
                                                            <ListItemText primary="Tablet Accessories" />
                                                        </ListItem>
                                                        <Divider light />
                                                        <ListItem button divider>
                                                            <ListItemText primary="Featured Tablets" />
                                                        </ListItem>
                                                    </List>

                                                </ul>
                                            </MDBCollapse>
                                        </ul>
                                    </MDBCollapse>



                                    <ListItem
                                        tagClassName='d-flex justify-content-betwee'
                                        onClick={() => this.toggleCollapseNest('elect2')}
                                    >
                                        Home &amp; Living
                                        <MDBIcon className="text-pull-right"
                                                 icon={collID === 'elect2' ? 'angle-up' : 'angle-down'}
                                        />
                                        <Divider/>
                                    </ListItem>
                                    <MDBCollapse id='elect2' isOpen={collID}>
                                        <ul className="subCategoryBody">
                                            <ListItem divider
                                                      tagClassName='d-flex justify-content-between'
                                                      onClick={() => this.toggleCollapseInnerNest('col5')}
                                            >
                                                Household Appliances
                                                <MDBIcon
                                                    icon={innerNestID === 'col5' ? 'angle-up' : 'angle-down'}
                                                />
                                            </ListItem>
                                            <MDBCollapse id='col5' isOpen={innerNestID}>
                                                <ul className="innerNestBody">
                                                    <List component="nav" aria-label="Dispensers">
                                                        <ListItem button >
                                                            <ListItemText primary="Fans &amp; Heaters"  />
                                                        </ListItem>
                                                        <Divider />
                                                        <ListItem button divider>
                                                            <ListItemText primary="Hair Driers" />
                                                        </ListItem>
                                                        <ListItem button>
                                                            <ListItemText primary="Shavers" />
                                                        </ListItem>
                                                        <Divider light />
                                                        <ListItem button>
                                                            <ListItemText primary="Weighing Machine" />
                                                        </ListItem>
                                                        <Divider light />
                                                    </List>

                                                </ul>
                                            </MDBCollapse>

                                        </ul>
                                    </MDBCollapse>

                                    <MDBCollapse id='elect2' isOpen={collID}>
                                        <ul className="subCategoryBody">
                                            <ListItem divider
                                                      tagClassName='d-flex justify-content-between'
                                                      onClick={() => this.toggleCollapseInnerNest('col6')}
                                            >
                                                Kitchen &amp; Dining
                                                <MDBIcon className=" "
                                                         icon={innerNestID === 'col6' ? 'angle-up' : 'angle-down'}
                                                />

                                            </ListItem>
                                            <MDBCollapse id='col6' isOpen={innerNestID}>
                                                <ul className="innerNestBody">

                                                    <List component="nav">
                                                        <ListItem button >
                                                            <ListItemText primary="Fridge"  />
                                                        </ListItem>
                                                        <Divider />
                                                        <ListItem button divider>
                                                            <ListItemText primary="Cookers" />
                                                        </ListItem>
                                                        <ListItem button>
                                                            <ListItemText primary="Freezers " />
                                                        </ListItem>
                                                        <Divider light />
                                                        <ListItem button divider>
                                                            <ListItemText primary="Microwave" />
                                                        </ListItem>
                                                    </List>

                                                </ul>
                                            </MDBCollapse>

                                        </ul>
                                    </MDBCollapse>
                                    <MDBCollapse id='elect2' isOpen={collID}>
                                        <ul className="subCategoryBody">
                                            <ListItem divider
                                                      tagClassName='d-flex justify-content-between'
                                                      onClick={() => this.toggleCollapseInnerNest('col8')}
                                            >
                                               Small Appliances
                                                <MDBIcon
                                                    icon={innerNestID === 'col8' ? 'angle-up' : 'angle-down'}
                                                />
                                            </ListItem>
                                            <MDBCollapse id='col8' isOpen={innerNestID}>
                                                <ul className="innerNestBody">
                                                    <List component="nav" aria-label="mailbox folders">
                                                        <ListItem button >
                                                            <ListItemText primary="Blenders"  />
                                                        </ListItem>
                                                        <Divider />
                                                        <ListItem button divider>
                                                            <ListItemText primary="Coffee" />
                                                        </ListItem>
                                                        <ListItem button>
                                                            <ListItemText primary="Kettle" />
                                                        </ListItem>
                                                        <Divider light />
                                                        <ListItem button divider>
                                                            <ListItemText primary="Utensils" />
                                                        </ListItem>
                                                        <ListItem button divider>
                                                            <ListItemText primary="Iron Boxes" />
                                                        </ListItem>
                                                    </List>

                                                </ul>
                                            </MDBCollapse>
                                        </ul>
                                    </MDBCollapse>
                                    <MDBCollapse id='elect2' isOpen={collID}>
                                        <ul className="subCategoryBody">
                                            <ListItem divider
                                                      tagClassName='d-flex justify-content-between'
                                                      onClick={() => this.toggleCollapseInnerNest('col9')}
                                            >
                                               Cleaning Appliances
                                                <MDBIcon
                                                    icon={innerNestID === 'col9' ? 'angle-up' : 'angle-down'}
                                                />
                                            </ListItem>
                                            <MDBCollapse id='col9' isOpen={innerNestID}>
                                                <ul className="innerNestBody">
                                                    <List component="nav" aria-label="mailbox folders">
                                                        <ListItem button >
                                                            <ListItemText primary="Washing Machines"  />
                                                        </ListItem>
                                                        <Divider />
                                                        <ListItem button divider>
                                                            <ListItemText primary="Vacuum Cleaners" />
                                                        </ListItem>
                                                        <ListItem button>
                                                            <ListItemText primary="Steam Cleaners" />
                                                        </ListItem>
                                                        <Divider light />
                                                        <ListItem button divider>
                                                            <ListItemText primary="Cleaners Accessories" />
                                                        </ListItem>
                                                    </List>

                                                </ul>
                                            </MDBCollapse>
                                        </ul>
                                    </MDBCollapse>







                                </List>
                            </ul>
                        </MDBCollapse>
                    </MDBCard>


                    <MDBCard>
                        <MDBCardHeader
                            tagClassName='d-flex justify-content-between'
                            onClick={() => this.toggleCollapse('collapse2')}
                        >
                            Collapsible Group Item #2
                            <MDBIcon
                                icon={collapseID === 'collapse2' ? 'angle-up' : 'angle-down'}
                            />
                        </MDBCardHeader>
                        <MDBCollapse id='collapse2' isOpen={collapseID}>
                            <MDBCardBody>

                            </MDBCardBody>
                        </MDBCollapse>
                    </MDBCard>

                    <MDBCard>
                        <MDBCardHeader
                            tagClassName='d-flex justify-content-between'
                            onClick={() => this.toggleCollapse('collapse3')}
                        >
                            Collapsible Group Item #3
                            <MDBIcon
                                icon={collapseID === 'collapse3' ? 'angle-up' : 'angle-down'}
                            />
                        </MDBCardHeader>
                        <MDBCollapse id='collapse3' isOpen={collapseID}>
                            <MDBCardBody>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa

                            </MDBCardBody>
                        </MDBCollapse>
                    </MDBCard>
                </MDBContainer>
            </MDBContainer>

        );
    }
}

export default FilterCategComponent;
