import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        name: '',
        password: '',
        address: '',
    });

    const InputEvent = (e) => {
        const { name, value } = e.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })

    }

    const FormSubmit = () => {
        // E.preventDefault();
        alert(`Your Email is ${data.email} and Your Password is ${data.password} , Your Comments is Here...${data.address}`)
    }

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-center'>Contacts Form</h1>

                <form onSubmit={FormSubmit}>


                    <div class="mb-3 row">
                        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name='name' value={data.name} onChange={InputEvent} placeholder='Enter Your Email' />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name='password' value={data.password} onChange={InputEvent} placeholder='Enter Your Password' />
                        </div>
                    </div>
                    
                    <div class="mb-3 row">
                        <label for="inputAddress" class="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-10">
                            <textarea class="col-sm-12" name='address'  value={data.address} onChange={InputEvent} placeholder='Comments Here...' />
                        </div>
                    </div>
                    <div className='col-12'>
                        <button className='btn btn-primary'>Submit</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Contact
