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

export default function AddExpense() {
  let navigate=useNavigate()
  const {spendingId} = useParams();

  const [expense,setExpense]=useState({
    userId:"",
    spendingAmount:"",
    spendingType:"",
    taxRate:"",
    receiptDate:"",
    spendingDefinition:""
  })

  const {userId,spendingAmount,spendingType,taxRate,receiptDate,spendingDefinition} = expense;

  const onInputChange = (e) => {
    setExpense({...expense,[e.target.name]: e.target.value})
  };
  useEffect(()=>{
    loadExpense();
  },[]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/spending/${spendingId}`,expense);
    navigate("/");
  };
  const loadExpense = async () => {
  const result = await axios.get(`http://localhost:8080/spending/${spendingId}`);
  setExpense(result.data);
  }

  return <div className="container">
    <div className="row">
      <div className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Gider Kayit</h2>

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
                <label htmlFor = "spendingAmount" className="form-label">
                  Spending Amount
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Lutfen Harcama tutarini giriniz"
                  name="spendingAmount"
                  value={spendingAmount}
                  onChange = {(e) => onInputChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor = "startDate" className="form-label">
                  Harcama Tarihi
                </label>
                <input
                  type={"date"}
                  className="form-control"
                  placeholder="Lutfen Harcama Tarihini Giriniz"
                  name="receiptDate"
                  value={receiptDate}
                  onChange = {(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor = "role" className="form-label">
                  Harcama Tipi
                </label>
                <CFormSelect aria-label="Default select example" type={"text"}
                             className="form-control"
                             placeholder="Lutfen harcama tipi giriniz"
                             name="spendingType"
                             value={spendingType}
                             onChange = {(e) => onInputChange(e)}>
                  <option>Lutfen harcama tipi seciniz</option>
                  <option value="Business_Expenses">Business_Expenses</option>
                  <option value="Invoice">Invoice</option>
                  <option value="Education">Education</option>
                  <option value="Food_Drink">Food_Drink</option>
                  <option value="Other">Other</option>

                </CFormSelect>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor = "taxRate" className="form-label">
                  Vergi Orani
                </label>
                <CFormSelect aria-label="Default select example" type={"text"}
                             className="form-control"
                             placeholder="Lutfen vergi orani Giriniz"
                             name="taxRate"
                             value={taxRate}
                             onChange = {(e) => onInputChange(e)}>
                  <option>Lutfen vergi orani seciniz</option>
                  <option value="on_sekiz">%18</option>
                  <option value="sekiz">%8</option>
                </CFormSelect>
              </div>
            </div>
            <div className="col">
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor = "spendingDefinition" className="form-label">
              Harcama Aciklamasi
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Lutfen Harcama Aciklamasi Giriniz"
              name="spendingDefinition"
              value={spendingDefinition}
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
