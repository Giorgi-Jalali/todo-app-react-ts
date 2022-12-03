class TodoModel {
  id: string;
  text: string;
  complete: boolean;
  time: string;

  constructor(todoText: string, complete: boolean, time: string ) {
    this.text = todoText;
    this.id = new Date().toISOString();
    this.complete = complete;
    this.time = time;
  }
}

export default TodoModel;