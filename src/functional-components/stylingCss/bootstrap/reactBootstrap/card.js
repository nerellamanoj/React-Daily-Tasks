import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomSpinner from '../../../spinner/spinner';

function CustomCard({name,description,ImageUrl}) {
  return (
    <Card style={{ width: '15rem', height:"25rem"}}>
      <Card.Img variant="top" src={ImageUrl} width={150} height={150}/>
      <Card.Body>
        <CustomSpinner/>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;