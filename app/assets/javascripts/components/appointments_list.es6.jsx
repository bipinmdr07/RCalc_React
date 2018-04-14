const AppointmentList = (props) => {
  return (
    <div>
      {props.appointments.map(function(appointment){
        return (
          <Appointment appointment = {appointment} key={appointment.id} />
        )
      })}
    </div>
  )
}
