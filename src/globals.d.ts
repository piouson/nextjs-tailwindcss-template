import { ComponentPropsWithRef, FC } from 'react'

export declare global {
  module '*.svg' {
    const Svg: FC<ComponentPropsWithRef<'svg'>>
    export default Svg
  }
  interface ClassNameProps {
    className?: string
  }
}
