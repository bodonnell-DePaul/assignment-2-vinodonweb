import ListGroup from 'react-bootstrap/ListGroup';


function TodoTitleShow({ items, onSelectTodo }) {

  function setColor(dueDate) {
    const currentDate = new Date();
    const targetDate = new Date(dueDate);

    currentDate.setHours(0,0,0);
    targetDate.setHours(0,0,0)

    const timeDiff = targetDate - currentDate;
    const dayLeft = Math.ceil(timeDiff / (1000 * 60 * 60 *24))

    console.log(`Current Date: ${currentDate}, TargetDate: ${targetDate}, Difference in Days: ${dayLeft}`)
   

    if(dayLeft > 7){
      return 'primary'
    } else if(dayLeft <= 7 && dayLeft > 3){
      return 'success'
    } else if(dayLeft <= 3 && dayLeft >= 2){
      return 'warning'
    } else if(dayLeft < 2 && dayLeft >= 0){
      return 'danger'
    } else {
      return 'primary'
    }



  }

  return (
    <ListGroup>
      {items.map((TodoItem, index) => (
        <ListGroup.Item
          action
          href={`#link${index}`}
          key={index}
          onClick={() => onSelectTodo(index)}
          variant={setColor(TodoItem.dueDate)}
        >
          {TodoItem.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoTitleShow;