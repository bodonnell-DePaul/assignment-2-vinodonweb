import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoTitleShow from './components/TodoTitleShow';
import AddNoteForm from './components/AddNoteForm';
import { useState } from 'react';
import Todotab from './components/TodoTab';
import TodoItems from './components/TodoItems';

function App() {

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
    <h1 className='text-center'>Assignment 2: Vinod's ToDo List</h1>
      <Container className='mt-5'>
      <Row>
        <Col>{<AddNoteForm />}</Col>
        <Col><TodoTitleShow items={TodoItems} onSelectTodo= {setActiveIndex}/></Col>
        <Col><Todotab items={TodoItems}activeIndex={activeIndex} /></Col>
      </Row>
    </Container>
  );
    </>
  );
}

export default App;
