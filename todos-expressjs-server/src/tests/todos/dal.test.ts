import { todosDal } from '../../modules/todos/dal';

describe('TodoDal Class Testing', () => {
  test('Get All Todos', async () => {
    expect(todosDal.getAll().length).toBeGreaterThanOrEqual(0);
  });

  test('Create Todo', async () => {
    const todo = {
      text: 'Test todo',
      completed: false,
    };
    const createdTodo = todosDal.create(todo);

    expect(createdTodo).toBeDefined();
  });

  test('Get Todo by id', async () => {
    const todo = {
      text: 'Test todo',
      completed: false,
    };
    const createdTodo = todosDal.create(todo);

    expect(createdTodo).toBeDefined();
    expect(todosDal.getOne(createdTodo._id)._id).toEqual(
      createdTodo._id,
    );
  });

  test('Edit Todo', async () => {
    const todo = {
      text: 'Test todo',
      completed: false,
    };
    const createdTodo = todosDal.create(todo);

    const editedTodo = todosDal.edit(
      {
        text: 'Test todo edited',
        completed: true,
      },
      createdTodo._id,
    );

    expect(editedTodo).toBeDefined();
    expect(editedTodo.completed).toEqual(true);
    expect(editedTodo.text).toEqual('Test todo edited');
  });

  test('Delete Todo', async () => {
    const todo = {
      text: 'Test todo',
      completed: false,
    };
    const createdTodo = todosDal.create(todo);

    todosDal.delete(createdTodo._id);

    expect(todosDal.getOne(createdTodo._id)).toBeUndefined();
  });

  test('Re-order Todo', async () => {
  
    let todos = todosDal.getAll();
    const [reorderedItem] = todos.splice(0, 1)
    todos.splice(2, 0, reorderedItem)


    todosDal.changeOrder(todos);

    expect(reorderedItem).toEqual(todos[2]);
  });
});
