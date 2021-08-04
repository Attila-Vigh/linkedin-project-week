import { Container, Card, Row, ListGroup, ListGroupItem, Image, } from "react-bootstrap";
import "./ProfileBox.css";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import CheckForErrorAndPending from "../../../util/CheckForErrorAndPending";

const ProfileBox = ({ dataList, isPending, isError }) => {

  const profile = dataList

  return (
    <div id='profilebox'>
      <Container>
        <CheckForErrorAndPending isPending={isPending} isError={isError} />
        {profile && (
          <Row>
            <Card>
              <div className="wrapper rounded-top">
                <Image src={profile.image} roundedCircle className="profile-img"/>
              </div>
              <Card.Body className="mt-5 text-center">
                <Card.Title>{profile.name} {profile.surname}</Card.Title>
                <Card.Text>{profile.title}</Card.Text>
              </Card.Body>

              <ListGroup className="list-group-flush">
                <ListGroupItem className="hover">
                  <div>
                    <span>Connections</span>
                    <span className="four">4</span>
                  </div>
                  <p className="font-weight-bold">Grow your network</p>
                </ListGroupItem>

                <ListGroupItem className="hover">
                  <RiCheckboxBlankFill className="mr-1" />
                  show all Premium features
                </ListGroupItem>
                <ListGroupItem className="hover">
                  <BsFillBookmarkFill className="mr-1" />
                  My items
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProfileBox;
