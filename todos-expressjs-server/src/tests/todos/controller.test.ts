import { todosController } from '../../modules/todos/controllers';

describe('TodoController Class Testing', () => {
  test('Get All Todos', async () => {
    expect(todosController.getAll().error).toBe(null);
    expect(todosController.getAll().data.length).toBeGreaterThanOrEqual(
      0,
    );
  });

  test('Create Todo', async () => {
    const todo = {
      text: 'Test todo',
      completed: false,
    };
    const createdTodo = todosController.create(todo);

    expect(createdTodo.error).toBe(null);
    expect(createdTodo.data).toBeDefined();
  });

  test('Edit Todo', async () => {
    const todo = {
      text: 'Test todo',
      completed: false,
    };
    const createdTodo = todosController.create(todo);

    const editedTodo = todosController.update(
      {
        text: 'Test todo edited',
        completed: true,
      },
      createdTodo.data._id,
    );

    expect(editedTodo.error).toBe(null);
    expect(editedTodo.data).toBeDefined();
    expect(editedTodo.data.completed).toEqual(true);
    expect(editedTodo.data.text).toEqual('Test todo edited');
  });

  test('Delete Todo', async () => {
    const todo = {
      text: 'Test todo',
      completed: false,
    };
    const createdTodo = todosController.create(todo);

    todosController.delete(createdTodo.data._id);

    expect(
      todosController.todosDal.getOne(createdTodo.data._id),
    ).toBeUndefined();
  });

  test('Reorder Todo', async () => {
    const todo = {
      text: 'Test todo',
      completed: false,
    };
    
    let items = Array.from(todosController.todosDal.getAll())
    const [reorderedItem] = items.splice(0, 1)
    items.splice(2, 0, reorderedItem)

    todosController.reOrder(items);    

    expect(
      reorderedItem,
    ).toEqual(items[2]);
  });
});
