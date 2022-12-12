import React, {useEffect, useState} from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import {Link, useNavigate, useParams} from "react-router-dom";
import expense from "../../forms/expense/Expense";
import axios from "axios";

export default function AddPermission() {
  let navigate=useNavigate()
  const {permissionId} = useParams();


  const [permission,setPermission]=useState({
    userId:"",
    permissionType:"",
    totalDay:"",
    permissionStartDate:"",
    permissionEndDate:"",
    permissionDefinition:"",
    permissionReturnDate:""
  })

  const {userId,permissionType,totalDay,permissionStartDate,permissionEndDate,permissionDefinition,permissionReturnDate} = permission;

  const onInputChange = (e) => {
    setPermission({...permission,[e.target.name]: e.target.value})
  };
  useEffect(()=>{
    loadPermission();
  },[])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/permission/${permissionId}`,permission);
    navigate("/");
  };
  const loadPermission = async () => {
    const result = await axios.get(`http://localhost:8080/permission/${permissionId}`);
    setPermission(result.data);
  }
  return <div className="container">
    <div className="row">
      <div className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Izin Kayit</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor = "userId" className="form-label">
                  User Id
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Lutfen User id giriniz"
                  name="userId"
                  value={userId}
                  onChange = {(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor = "totalDay" className="form-label">
                  Total Day
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Lutfen Toplam Izin gununu giriniz"
                  name="totalDay"
                  value={totalDay}
                  onChange = {(e) => onInputChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor = "startDate" className="form-label">
                  Izin Baslama Tarihi
                </label>
                <input
                  type={"date"}
                  className="form-control"
                  placeholder="Lutfen Izin Baslama Tarihini Giriniz"
                  name="permissionStartDate"
                  value={permissionStartDate}
                  onChange = {(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor = "endDate" className="form-label">
                  Izin Bitis Tarihi
                </label>
                <input
                  type={"date"}
                  className="form-control"
                  placeholder="Lutfen Izin Bitis Tarihini Giriniz"
                  name="permissionEndDate"
                  value={permissionEndDate}
                  onChange = {(e) => onInputChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor = "izin" className="form-label">
                  Izin Tipi
                </label>
                <CFormSelect aria-label="Default select example" type={"text"}
                             className="form-control"
                             placeholder="Lutfen izin tipi giriniz"
                             name="permissionType"
                             value={permissionType}
                             onChange = {(e) => onInputChange(e)}>
                  <option>Lutfen izin tipi seciniz</option>
                  <option value="Illness">Illness</option>
                  <option value="Death">Death</option>
                  <option value="Marriage">Marriage</option>
                  <option value="Unpaid_Vacation">Unpaid_Vacation</option>
                  <option value="Other">Other</option>

                </CFormSelect>
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor = "startDate" className="form-label">
                  Izin Bitis Tarihi
                </label>
                <input
                  type={"date"}
                  className="form-control"
                  placeholder="Lutfen Donus Tarihini Giriniz"
                  name="permissionReturnDate"
                  value={permissionReturnDate}
                  onChange = {(e) => onInputChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor = "permissionDefinition" className="form-label">
              Izin Aciklamasi
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Lutfen Izin Aciklamasi Giriniz"
              name="permissionDefinition"
              value={permissionDefinition}
              onChange = {(e) => onInputChange(e)}
            />

          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-outline-primary" color="primary">SAVE</button>
          </div>        </form>
      </div>
    </div>
  </div>
}
