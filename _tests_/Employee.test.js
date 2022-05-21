const Employee = require('../lib/Employee');

test('key in new Employee object equals what user actually puts in', () => {
    let newEmployee = new Employee('tess',12,'a@b.com');
    expect(newEmployee.name).toBe('tess');
    expect(newEmployee.id).toBe(12);
    expect(newEmployee.email).toBe('a@b.com');
  });