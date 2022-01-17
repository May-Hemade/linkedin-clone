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
            
           
            
            <Table bordered hover variant="dark" className="border-rounded ">{/* table-responsive */}
                <tbody>
                    <tr>
                        <td className="text-left"> <span className="font-weight-light text-primary display-4">169</span><br />Who viewed your profile</td>
                        <td className="text-left"> <span className="font-weight-light text-primary display-4">27</span><br />Post views</td>
                        <td className="text-left"> <span className="font-weight-light text-primary display-4">98</span><br />Search appearance</td>
                    </tr>    
                </tbody>
            </Table>
            
            
            
            
            
            
            <Table bordered hover variant="dark " className="border-rounded">
                
                <tbody>
                <tr>
                    <td className="text-left align-middle pr-0"><BsBroadcastPin/></td>
                    
                    <td className="text-left"> Creator Mode: <span> Off </span><br /><small> Get Discovered, showcase content on you profile, and get access to creator tools </small></td>
                </tr>
                <tr>
                    <td className="text-left align-middle pr-0"><BsPeopleFill/></td>
                    <td className="text-left"> My Network <br /> <small> Manage your conections, events and interest. </small></td>
                    
                </tr>
                <tr>
                    <td className="text-left align-middle pr-0"><BsBookmarkFill/></td>
                    <td className="text-left"> My items <br /> <small> Keep track of your jobs, courses and articles </small></td>
                    
                    
                </tr>
                </tbody>
            </Table>
            <br />
        </Container>  
    )
}

export default Dashboard