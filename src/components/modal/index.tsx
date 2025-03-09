import { useCallback, useEffect, useRef, type ReactNode } from 'react'

import { Button, Title } from '~/components'

interface ModalProps {
	title: string
	children: ReactNode
	onClose: () => void
}

export const Modal = ({ title, children, onClose }: ModalProps) => {
	const modalRef = useRef<HTMLDivElement>(null)

	const handleClickOutside = useCallback(
		(event: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
				onClose()
			}
		},
		[onClose],
	)

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose()
		}
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [handleClickOutside, onClose])

	return (
		<div className="w-full h-full flex justify-center items-center fixed top-0 left-0 z-10 bg-black9 bg-opacity-80">
			<div ref={modalRef} className="flex flex-col bg-white9">
				<Title title={title} />
				{children}

				<Button type="button" onClick={onClose} className="self-end">
					Fechar
				</Button>
			</div>
		</div>
	)
}
