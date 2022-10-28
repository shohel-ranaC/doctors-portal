import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const AppointmentForm = ({modalIsOpen, closeModal, appointmentOn, date}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();

    fetch('http://localhost:5000/addAppointment', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data) 
      
    })
    .then(res => res.json())
    .then(success => {
       if (success) {
        closeModal();
        alert('Appointment created successfully');
        console.log('create database successfully');
      }
     })
  }

    return (
        <div>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className='text-center text-header'>{appointmentOn}</h2>
       <p className='text-secondary text-center'><small>On {date.toDateString()}</small></p>
       <form className='p-5' onSubmit={handleSubmit(onSubmit)}>

       <div className='form-group'>
          <input {...register('name', {required: true})} type="text"  name='name' placeholder='Enter your name' className='form-control my-3'/>
          {errors.name && <span className="text-danger">This field is required</span>}
        </div>
        <div className='form-group'>
          <input {...register('phone', {required: true})} type="text" name='phone' placeholder='Enter your phone number' className='form-control my-3' />
          {errors.phone && <span className="text-danger">This field is required</span>}
        </div>
        <div className='form-group'>
          <input {...register('email', {required: true})} type="email" name='email' placeholder='Enter your email' className='form-control my-2'/>
          {errors.email && <span className="text-danger">This field is required</span>}
        </div>
        <div className='form-group row'>
          <div className='col-md-4'>
          <select className="form-control my-2" name='gender' {...register('gender', {required: true})}>
            <option disabled={true} value='Not Set'>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Not Set">Others</option>
         </select>
         {errors.gender && <span className="text-danger">This field is required</span>}
          </div>
          <div className='col-4'>
          <input {...register('age', {required: true})} type="number"  name='age' placeholder='Age' className='form-control my-2'/>
          {errors.age && <span className="text-danger">This field is required</span>}
        </div>
        <div className='col-4'>
          <input type="number" {...register('weight', {required: true})} name='weight' placeholder='Weight' className='form-control my-2' />
          {errors.weight && <span className="text-danger">This field is required</span>}
        </div>
    </div>
    <div className='form-group text-right'>
      <button type="submit" className='btn btn-brand'>SEND</button>
      </div>
    </form>
      </Modal>
            
        </div>
    );
};

export default AppointmentForm;