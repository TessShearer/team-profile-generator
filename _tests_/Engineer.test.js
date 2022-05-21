const Engineer = require('../lib/Engineer');

test('key in new Engineer object equals what user actually puts in', () => {
    let newEngineer = new Engineer('tess',12,'a@b.com','github.com');
    expect(newEngineer.name).toBe('tess');
    expect(newEngineer.id).toBe(12);
    expect(newEngineer.email).toBe('a@b.com');
    expect(newEngineer.github).toBe('github.com');
  });