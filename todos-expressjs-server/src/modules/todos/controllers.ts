import {
  IControllerResult,
  newControllerData,
  newControllerError,
} from '../../utils/controller-result.model';
import { todosDal, TodosDal } from './dal';
import { ITodoPayload, Todo } from './model';
import { validateTodoCreatePayload } from './validator';

export class TodosController {
  todosDal: TodosDal;
  constructor(todosDal: TodosDal) {
    this.todosDal = todosDal;
  }

  create(payload: ITodoPayload): IControllerResult<Todo> {
    const { error, value } = validateTodoCreatePayload(payload);
    if (error) {
      return newControllerError(error.details[0].message, 400);
    }

    return newControllerData(this.todosDal.create(value));
  }

  getAll(): IControllerResult<Todo[]> {
    return {
      data: todosDal.getAll(),
      error: null
    };
  }

  update(payload: ITodoPayload, id: string): IControllerResult<Todo> {
    return {
      data: todosDal.edit(payload, id),
      error: null
    };
  }
  
  reOrder(payload: Todo[]): IControllerResult<Todo[]> {
    todosDal.changeOrder(payload)
    return {
      data: null,
      error: null
    }
  }

  delete(id: string): IControllerResult<String> {
    todosDal.delete(id);
    return {
      data: null,
      error: null
    };
  }
}

export const todosController = new TodosController(todosDal);
