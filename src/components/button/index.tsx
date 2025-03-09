import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type CustomButtonProps = ComponentProps<'button'>

export const Button = ({ className, ...props }: CustomButtonProps) => {
	const combinedClassName = twMerge(
		'flex justify-center items-center gap-[2px] font-medium whitespace-nowrap bg-green9 py-2 px-8 rounded hover:brightness-150 duration-150',
		className,
	)
	return <button className={combinedClassName} {...props} />
}
