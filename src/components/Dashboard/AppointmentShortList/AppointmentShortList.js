import React from 'react';

const AppointmentShortList = ({appointments}) => {
    return (
        <table className='table table-borderless'>
            <thead>
                <tr>
                    <th className='text-secondary' scope='col'>Name</th>
                    <th className='text-secondary' scope='col'>Phone</th>
                    <th className='text-secondary' scope='col'>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appointments, index) =>
                    <tr>
                        <td className='bold'>{appointments.name}</td>
                        <td className='bold'>{appointments.phone}</td>
                        <td className='bold'>{appointments.email}</td>
                    </tr>
                    )
                }
            </tbody>    
        </table>
    );
};

export default AppointmentShortList;