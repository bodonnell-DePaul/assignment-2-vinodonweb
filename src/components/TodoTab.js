import React from "react";
import { Form } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';

function Todotab({items, activeIndex}) {
    return (
        <>
            <Tab.Container>
            <Tab.Content>
                {items.map((TodoItem, index) => (
                    <Tab.Pane eventKey={`#link${index}`} key={index} active={index === activeIndex}>
                        <p className="border" contentEditable={true}>{TodoItem.description}</p>
                        <Form.Group>
                        <Form.Control
                                type="date"
                                value={TodoItem.dueDate}
                            />
                        </Form.Group>
                    </Tab.Pane>
                ))}
            </Tab.Content>
            </Tab.Container>
        </>
    )
}

export default Todotab;