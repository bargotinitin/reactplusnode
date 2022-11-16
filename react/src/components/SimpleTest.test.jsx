import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'
import SimpleTest from './SimpleTest'

describe("Simple Test compoment", () => {

  test('simple hello world test', () => {
    render(<SimpleTest />)
    const simpleElement = screen.getByText('SimpleTest');
    expect(simpleElement).toBeInTheDocument();
  })

  test('Button not clicked test', () => {
    render(<SimpleTest />)
    const simpleElement = screen.getByText('Button not clicked');
    expect(simpleElement).toBeInTheDocument();
  })

  test('Button clicked test', () => {
    render(<SimpleTest />)

    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    const outputElement = screen.queryByText("Button Clicked")
    expect(outputElement).not.toBeNull();
  })

  test('Button clicked test 2', () => {
    render(<SimpleTest />)

    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    const simpleElement1 = screen.getByText('Button Clicked');
    expect(simpleElement1).toBeInTheDocument();
  })


})
