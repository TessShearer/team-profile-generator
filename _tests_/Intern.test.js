const Intern = require('../lib/Intern');

test('key in new Engineer object equals what user actually puts in', () => {
    let newIntern = new Intern('tess',12,'a@b.com','school');
    expect(newIntern.name).toBe('tess');
    expect(newIntern.id).toBe(12);
    expect(newIntern.email).toBe('a@b.com');
    expect(newIntern.school).toBe('school');
  });