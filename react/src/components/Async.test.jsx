import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Async from './Async'

describe("API testing", () => {

  test('simple hello world test', async() => {
    render(<Async />)
    const listItems = await screen.findAllByRole('listitem')
    expect(listItems).not.toHaveLength(0)
  })

})
