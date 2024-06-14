import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// eslint-disable-next-line fp/no-rest-parameters
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
