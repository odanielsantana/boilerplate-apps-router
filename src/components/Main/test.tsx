import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('shoud render the heading', () => {
    // Renderiza o componente
    // Busca o elemento e verifica a existência

    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // Gerar Snapshots
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
