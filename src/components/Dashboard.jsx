import { Container, Table} from "react-bootstrap"
import "./Dashboard.css"
import { BsStars, BsPeopleFill, BsBroadcastPin, BsBookmarkFill } from "react-icons/bs";

const Dashboard = () => {
    return (
        <Container className="dashboard-container">
            <div className="d-flex justify-content-between">
                <div>
                    <h5 className="text-light text-left pt-4">
                        Your Dashboard
                    </h5>
                    <p className="text-light text-left font-weight-light">
                        Private to you
                    </p>
                </div>
                <div className="align-self-center pr-3">
                    <p className="text-light align-middle font-weight-light">
                     <BsStars/> All Start
                    </p>

                </div>
            </div>
            
           
            
            <Table bordered hover variant="dark" className="table">{/* table-responsive */}
                <tbody>
                    <tr>
                        <td className="text-left"> <a href="" className="dashboard_link"> <span className="font-weight-light  display-4 dashboard_number">169</span><br /> <span className="text-secondary"> Who viewed your profile </span></a></td>
                        <td className="text-left"> <a href="" className="dashboard_link"><span className="font-weight-light  display-4 dashboard_number">27</span><br /><span className="text-secondary"> Post views&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></a></td>
                        <td className="text-left"> <a href="" className="dashboard_link"><span className="font-weight-light  display-4 dashboard_number">98</span><br /><span className="text-secondary"> Search appearance </span></a></td>
                    </tr>    
                </tbody>
            </Table>
            
            
            
            
            
            
            <Table bordered hover variant="dark " className="table">
                
                <tbody>
                <tr>
                    <td className="text-left align-middle pr-0 border-bottom-0 border-right-0" ><BsBroadcastPin/></td>
                    
                    <td className="text-left border-left-0"><a href="" className="dashboard_link text-light"> Creator Mode: <span> Off </span><br /><small className="text-secondary"> Get Discovered, showcase content on you profile, and get access to creator tools </small></a></td>
                </tr>
                <tr>
                    <td className="text-left align-middle pr-0 border-bottom-0 border-top-0 border-right-0"><BsPeopleFill/></td>
                    <td className="text-left border-left-0"><a href="" className="dashboard_link text-light"> My Network <br /> <small className="text-secondary"> Manage your conections, events and interest. </small></a></td>
                    
                </tr>
                <tr>
                    <td className="text-left align-middle pr-0 border-top-0 border-right-0"><BsBookmarkFill/></td>
                    <td className="text-left border-left-0"><a href="" className="dashboard_link text-light"> My items <br /> <small className="text-secondary"> Keep track of your jobs, courses and articles </small></a></td>
                    
                    
                </tr>
                </tbody>
            </Table>
            <br />
        </Container>  
    )
}

export default Dashboard