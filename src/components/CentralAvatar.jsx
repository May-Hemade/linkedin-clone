import { Container, Image, Button } from "react-bootstrap"
import "./CentralAvatar.css"
/* import { BsFillLockFill } from "react-icons/bs"; */

const CentralAvatar = (/* { profile } */) => {
    return (
        <Container className="central_avatar p-0">
            <div className="imagess">
            <Image src="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png" rounded  className="background_avatar"/>
            <Image src="https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg" roundedCircle alt="" className="avatar"/>
            </div>
            <div className="central_avatar_info text-left  ml-4">
                <h4 className="text-white">
                    Pablo Villegas Martin
                </h4>
                <h6 className="text-white">
                    Data Science
                </h6>
                <span className="central_avatar_city mr-1">
                    <small>Barcelona, Cataluña, España</small>
                </span>
                <span className="central_avatar_city_dot align-top text-light">
                 &bull;
                </span>
                <span>
                    <small><a href="" className="ml-1">Contact information</a></small>
                </span>
                <p className="contacts_central mt-3">
                    <small><b>182</b> contacts</small>
                </p>
            </div>
            <div className="central_avatar_options text-left ml-4 pb-4">
                <Button variant="primary text-dark mr-3">Open to</Button>
                <Button variant="outline-light mr-3">{/* <BsFillLockFill/> */}Add Section</Button>    
                <Button variant="outline-light mr-3">More</Button>
                
            </div>



        </Container>
    )
}

export default CentralAvatar