import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {
  todoListSelector,
  searchSelector,
  todoRemaining,
} from "../../redux/selector";
import toDoListSlice from './toDoListSlice'

export default function TodoList() {
  const dispatch = useDispatch();
  const todo = useSelector(todoRemaining);
  const [addName, setAddName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleAdd = () => {
    dispatch(
      toDoListSlice.actions.Add({
        id: uuidv4(),
        name: addName,
        priority: priority,
        completed: false,
      })
    );
    setAddName("");
    setPriority("Medium");
  };

  const handleChange = (e) => {
    setAddName(e.target.value);
  };

  const handleChangePriority = (value) => {
    setPriority(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todo &&
          todo.map((item) => (
            <Todo
              key={item.id}
              id={item.id}
              name={item.name}
              prioriry={item.priority}
              completed={item.completed}
            />
          ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={addName} onChange={handleChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleChangePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
