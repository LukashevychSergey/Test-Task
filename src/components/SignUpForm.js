import React, { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { request } from '../api/request';

function SignUpForm({ getUsers, formRef }) {
  const [file, setFile] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [positions, setPositions] = useState([]);
  const { handleSubmit, register } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  //Using callback to use request functions
  const getPositions = useCallback(async () => {
    const data = await request.getPositions();
    setPositions(data.positions);
  }, []);

  //For getting positions in hook function
  useEffect(() => {
    getPositions();
  }, []);
  //Select file
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  // Function generate formData and sending it to registration
  const onSubmit = async (value) => {
    const formData = new FormData();
    formData.append('photo', file);
    formData.append('position_id', currentPosition);
    formData.append('name', value.name);
    formData.append('email', value.email);
    formData.append('phone', value.phone);
    request.registerUser(formData, request.getToken).then((success) => {
      if (success) {
        getUsers();
        document.getElementById('register-form').reset(); //Reseting form after submit
        setFile(null);
        setCurrentPosition(null);
      }
    });
  };
  return (
    <div ref={formRef}>
      <div className="h1_wrap">
        <h1>Working with POST request</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('name')}
          className="form_input"
          placeholder=" Your Name"
        />
        <input
          type="text"
          {...register('email')}
          className="form_input"
          placeholder="Email"
        />
        <input
          type="text"
          {...register('phone')}
          className="form_input"
          placeholder="Phone"
        />

        <div className="radio_container">
          <p className="form_p">Select your position</p>
          <ul>
            {positions &&
              positions.length > 0 &&
              positions.map((pos) => (
                <li key={pos.id}>
                  <label className="container_radio">
                    <input
                      type="radio"
                      name="radio"
                      onChange={(e) =>
                        e.target.checked && setCurrentPosition(pos.id)
                      }
                      checked={currentPosition === pos.id}
                    />
                    <span className="custom_radio"></span>
                    {pos.name}
                  </label>
                </li>
              ))}
          </ul>
        </div>

        <div className="container_file">
          <input type="file" id="file-input" onChange={onFileChange} />
          <label htmlFor="file-input">Upload</label>
          <span className="custom_file">
            {file ? file.name : 'Upload your photo'}
          </span>
        </div>
        <button type="submit" className="button_submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
