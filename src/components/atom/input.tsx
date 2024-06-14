import * as React from 'react'
import { cn } from '../../lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  // eslint-disable-next-line fp/no-rest-parameters
  ({ className, type, ...props }, ref) => (
    <input
      data-testid='input-field'
      type={type}
      className={cn(
        'placeholder:text-muted-foreground flex h-10 w-full rounded-md border border-input border-stone-950 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white',
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
// eslint-disable-next-line functional/immutable-data
Input.displayName = 'Input'

export { Input }
