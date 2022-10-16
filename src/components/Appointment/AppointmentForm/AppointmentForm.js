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

const AppointmentForm = ({modalIsOpen, closeModal, appointmentOn }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

    return (
        <div>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className='text-center text-header'>{appointmentOn}</h2>
       <form className='p-5' onSubmit={handleSubmit(onSubmit)}>

       <div className='form-group'>
          <input type="text"  name='name' placeholder='Enter your name' className='form-control my-3' />
          {errors.name && <span className="text-danger">This field is required</span>}
        </div>
        <div className='form-group'>
          <input type="text" name='phone' placeholder='Enter your phone number' className='form-control my-3' />
          {errors.phone && <span className="text-danger">This field is required</span>}
        </div>
        <div className='form-group'>
          <input type="email" name='email' placeholder='Enter your email' className='form-control my-2' />
          {errors.email && <span className="text-danger">This field is required</span>}
        </div>
        <div className='form-group row'>
          <div className='col-md-4'>
          <select className="form-control my-2" name='gender' >
            <option disabled={true} value='Not Set'>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Not Set">Others</option>
         </select>
         {errors.gender && <span className="text-danger">This field is required</span>}
          </div>
          <div className='col-4'>
          <input type="number"  name='age' placeholder='Enter your age' className='form-control my-2' />
          {errors.age && <span className="text-danger">This field is required</span>}
        </div>
        <div className='col-4'>
          <input type="number"  name='weight' placeholder='Enter your weight' className='form-control my-2' />
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