import { FaCheck } from '~/assets'

interface ProgressHeaderProps {
	currentStep: number
	totalSteps: number
}

export const FormProgress: React.FC<ProgressHeaderProps> = ({ currentStep, totalSteps }) => {
	const steps = Array.from({ length: totalSteps }, (_, index) => index + 1)

	return (
		<div className="flex justify-center items-center mb-6">
			{steps.map((step, index) => (
				<div key={step} className="flex items-center">
					<div
						className={`w-8 h-8 rounded-full flex justify-center items-center text-white9 font-semibold
              ${step === currentStep ? 'bg-blue8' : step < currentStep ? 'bg-green9' : 'bg-gray7'}`}
					>
						{step < currentStep ? (
							<FaCheck className="w-5 h-5 text-white9" />
						) : step === currentStep ? (
							<div className="text-white9 font-semibold select-none">{step}</div>
						) : (
							<div className="text-gray9 font-semibold select-none">{step}</div>
						)}
					</div>

					{index < steps.length - 1 && (
						<div
							className={`w-8 h-[4px] rounded-sm mx-2 ${step < currentStep ? 'bg-green9' : step === currentStep ? 'bg-blue8' : 'bg-gray7'}`}
						/>
					)}
				</div>
			))}
		</div>
	)
}
