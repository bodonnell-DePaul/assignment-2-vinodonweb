import React from "react";
import { Container, Row, Button, Form, Col } from "react-bootstrap";
import '../App.css';

function AddNoteForm() {
    return (
        <Container>
            <Form className="formCustom">
                <Row className="mb-3">
                    <Form.Group as={Col} md={12} className="mb-3">
                        <Form.Label>ToDo Item</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Add todo item"
                            className="w-100"
                        />
                    </Form.Group>
                    
                    <Form.Group as={Col} md={12} className="mb-3">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Select due date"
                            required
                            className="w-100"
                        />
                    </Form.Group>
                </Row>

                <div className="d-grid mx-auto mt-4">
                    <Button variant="primary" size="lg">
                        Add Todo
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default AddNoteForm;
