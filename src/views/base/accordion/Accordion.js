import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {CFormSelect} from "@coreui/react";

export default function AddEmployee() {

  let navigate=useNavigate()

  const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    identityNo:"",
    salary:"",
    startDate:"",
    title:"",
    role:"",
    level:"",
    department:"",
    birthDate:"",
    address:"",
    city:"",
    country:"",
    postCode:"",
    phoneNumber:"",

  })

  const { firstName, lastName, email, identityNo, salary, startDate, title,role,level, department, birthDate, address, city, phoneNumber, country, postCode } = user;

  const onInputChange = (e) => {

    setUser({...user,[e.target.name]: e.target.value})

  };

  const onSubmit =async (e) => {

    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return <div className="container">
    <div className="row">
      <div className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Calisan Kayit</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="row">
            <div className="col">
            <div className="mb-3">
            <label htmlFor = "Name" className="form-label">
              Isim
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Lutfen Isim Giriniz"
              name="firstName"
              value={firstName}
              onChange = {(e) => onInputChange(e)}
            />
              </div>
          </div>
            <div className="col">
          <div className="mb-3">
            <label htmlFor = "lastName" className="form-label">
              Soy Isim
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Lutfen Soy Isim Giriniz"
              name="lastName"
              value={lastName}
              onChange = {(e) => onInputChange(e)}
            />
          </div>
          </div>
          </div>
          <div className="row">
            <div className="col">
          <div className="mb-3">
            <label htmlFor = "email" className="form-label">
              E-Mail
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Lutfen E-Mail Giriniz"
              name="email"
              value={email}
              onChange = {(e) => onInputChange(e)}
            />
          </div>
            </div>
            <div className="col">

            <div className="mb-3">
            <label htmlFor = "identityNo" className="form-label">
              Turkiye Cumhuriyeti Kimlik Numarasi
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Lutfen Turkiye Cumhuriyeti Kimlik Numarasi Giriniz"
              name="identityNo"
              value={identityNo}
              onChange = {(e) => onInputChange(e)}
            />
          </div>
          </div>
      </div>
          <div className="row">
            <div className="col">
          <div className="mb-3">
            <label htmlFor = "salary" className="form-label">
              Maas
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Lutfen Maas Giriniz"
              name="salary"
              value={salary}
              onChange = {(e) => onInputChange(e)}
            />
          </div>
            </div>
              <div className="col">
              <div className="mb-3">
            <label htmlFor = "startDate" className="form-label">
              Katilma Tarihi
            </label>
            <input
              type={"date"}
              className="form-control"
              placeholder="Lutfen Katilma Tarihini Giriniz"
              name="startDate"
              value={startDate}
              onChange = {(e) => onInputChange(e)}
            />
              </div>
              </div>
              </div>
          <div className="row">
            <div className="col">
          <div className="mb-3">
            <label htmlFor = "title" className="form-label">
              Unvan
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Lutfen Unvan Giriniz"
              name="title"
              value={title}
              onChange = {(e) => onInputChange(e)}
            />
          </div>
            </div>
            <div className="col">
            <div className="mb-3">
            <label htmlFor = "role" className="form-label">
              role
            </label>
            <CFormSelect aria-label="Default select example" type={"text"}
                         className="form-control"
                         placeholder="Lutfen role Giriniz"
                         name="role"
                         value={role}
                         onChange = {(e) => onInputChange(e)}>
              <option>Lutfen role seciniz</option>
              <option value="Manager">Manager</option>
              <option value="Senior">Senior</option>
              <option value="Junior">Junior</option>
            </CFormSelect>
          </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <div className="mb-3">
            <label htmlFor = "level" className="form-label">
              level
            </label>
            <CFormSelect aria-label="Default select example" type={"text"}
                         className="form-control"
                         placeholder="Lutfen departman Giriniz"
                         name="level"
                         value={level}
                         onChange = {(e) => onInputChange(e)}>
              <option>Lutfen level seciniz</option>
              <option value="J1">J1</option>
              <option value="J2">J2</option>
              <option value="S1">S1</option>
              <option value="S2">S2</option>
            </CFormSelect>
          </div>
            </div>
            <div className="col">
            <div className="mb-3">
            <label htmlFor = "department" className="form-label">
              Departman
            </label>
            <CFormSelect aria-label="Default select example" type={"text"}
                         className="form-control"
                         placeholder="Lutfen departman Giriniz"
                         name="department"
                         value={department}
                         onChange = {(e) => onInputChange(e)}>
              <option>Lutfen Departman seciniz</option>
              <option value="Koordination">Koordination</option>
              <option value="Finance">Finance</option>
              <option value="Security">Security</option>
              <option value="Software">Software</option>
            </CFormSelect>
          </div>
            </div>
          </div>
            <div className="mb-3">
            <label htmlFor = "birthDate" className="form-label">
              Dogum Tarihi
            </label>
            <input
              type={"date"}
              className="form-control"
              placeholder="Lutfen Dogum Tarihi Giriniz"
              name="birthDate"
              value={birthDate}
              onChange = {(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor = "address" className="form-label">
              Adres Tarifi
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Lutfen Adres Tarifini Giriniz"
              name="address"
              value={address}
              onChange = {(e) => onInputChange(e)}
            />
          </div>
          <div className="row">
            <div className="col">
          <div className="mb-3">
            <label htmlFor = "city" className="form-label">
              Sehir
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Lutfen Sehri Giriniz"
              name="city"
              value={city}
              onChange = {(e) => onInputChange(e)}
            />
          </div>
            </div>
                <div className="col">
          <div className="mb-3">
            <label htmlFor = "country" className="form-label">
              Ulke
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Lutfen Ulke Giriniz"
              name="country"
              value={country}
              onChange = {(e) => onInputChange(e)}
            />
          </div>
                </div>
          </div>
          <div className="row">
            <div className="col">
          <div className="mb-3">
            <label htmlFor = "postalCode" className="form-label">
              Posta Kodu
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Lutfen Posta Kodu Giriniz"
              name="postCode"
              value={postCode}
              onChange = {(e) => onInputChange(e)}
            />
          </div>
            </div>
            <div className="col">
            <div className="mb-3">
              <label htmlFor = "phoneNumber" className="form-label">
                Telefon Numarasi
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Lutfen Telefon Numarasini Giriniz"
                name="phoneNumber"
                value={phoneNumber}
                onChange = {(e) => onInputChange(e)}
              />
            </div>
            </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-outline-primary" color="primary">SAVE</button>
            </div>
        </form>
      </div>
    </div>
  </div>
}
