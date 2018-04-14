const Appointment = (props) =>
  <div className='appointment'>
    <h3>{props.appointment.title}</h3>
    <p>{formatDate(props.appointment.appt_time)}</p>
  </div>


// the above method can also be written as

// const Appointment = ({appointment}) => {
//   return (
//     <div className='appointment'>
//       <h3>{appointment.title}</h3>
//       <p>{formatDate(appointment.appt_time)}</p>
//     </div>
//   )
// }
