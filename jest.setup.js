import '@testing-library/jest-dom/extend-expect'

const SvgMock = () => <svg />

jest.mock('src/svgs/*.svg', () => SvgMock)
