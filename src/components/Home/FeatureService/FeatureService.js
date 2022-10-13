import React from 'react';
import feature from '../../../images/feature.png';

const FeatureService = () => {
    return (
        <section className='feature-service pb-0 pb-md-5 my-5 p-5 mb-5'>
            <div className='container mb-5'>
                <div className='row mb-5'>
                    <div className='col-md-5 mb-4 m-md-0'>
                        <img style={{height:'420px'}} className='img-fluid' src={feature} alt="feature images" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental<br/> Care, on your Term</h1>
                        <p className='text-secondary my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
                         doloremque perferendis vitae repellat consequuntur
                         quo nulla mollitia! Repudiandae quod reiciendis est culpa natus
                         tempore suscipit, corporis, voluptas impedit id cum.  doloremque perferendis vitae repellat consequuntur
                         quo nulla mollitia! Repudiandae quod reiciendis est culpa natus
                         tempore suscipit, corporis, voluptas impedit id cum.
                        </p>
                        <button className='btn btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;