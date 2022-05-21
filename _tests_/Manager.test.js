const Manager = require('../lib/Manager');

test('key in new Manager object equals what user actually puts in', () => {
    let newManager = new Manager('tess',12,'a@b.com',14);
    expect(newManager.name).toBe('tess');
    expect(newManager.id).toBe(12);
    expect(newManager.email).toBe('a@b.com');
    expect(newManager.office).toBe(14);
  });