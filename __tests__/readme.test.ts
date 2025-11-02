import fs from 'fs'
import path from 'path'

describe('README smoke', () => {
  it('contains project name', () => {
    const readme = fs.readFileSync(path.join(__dirname, '..', 'README.md'), 'utf8')
    expect(readme).toMatch(/FlySafe/)
  })
})
