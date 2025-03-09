import { getStatusColor, timeFormatter, dateFormatter } from '~/utils'
import type { GetAppointmentResponse } from '~/@types'

import { FaUserDoctor, FaUser, PiSealWarningFill, FaClock, FaCalendarAlt } from '~/assets'

interface AppointmentDetailProps {
	appointment?: GetAppointmentResponse
}

export const AppointmentById = ({ appointment }: AppointmentDetailProps) => {
	return (
		<div className="grid grid-cols-2 gap-y-4">
			<div className="flex flex-col">
				<strong className="flex items-center gap-1 font-semibold">
					<FaUserDoctor className="text-green9" /> Doutor(a):
				</strong>
				<span>{appointment?.doctor.name}</span>
			</div>

			<div className="flex flex-col">
				<strong className="flex items-center gap-1 font-semibold">
					<FaUser className="text-green9" /> Paciente:
				</strong>
				<span>{appointment?.patient.name}</span>
			</div>

			<div className="flex flex-col">
				<strong className="flex items-center gap-1 font-semibold">
					<PiSealWarningFill className={getStatusColor(appointment?.status.name as string)} size={19} /> Status:
				</strong>
				<span>{appointment?.status.name}</span>
			</div>

			<div className="flex flex-col">
				<strong className="flex items-center gap-1 font-semibold">
					<FaClock className={getStatusColor(appointment?.status.name as string)} /> Horário:
				</strong>
				<span>{timeFormatter.format(new Date(appointment?.appointment as Date))}</span>
			</div>

			<div className="flex flex-col">
				<strong className="flex items-center gap-1 font-semibold">
					<FaCalendarAlt className="text-green9" /> Data:
				</strong>
				<span>{dateFormatter.format(new Date(appointment?.appointment as Date))}</span>
			</div>
		</div>
	)
}
