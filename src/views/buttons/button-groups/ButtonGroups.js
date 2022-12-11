import React, {useEffect, useState} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const Tables = () => {
  const [expenses,setExpenses]=useState([]);
  const {spendId}=useParams()
  useEffect(()=>{
    loadExpenses();
  },[]);
  const loadExpenses=async ()=>{
    const result = await axios.get("http://localhost:8080/spending");
    setExpenses(result.data);
    console.log(result.data);
  };
  const deleteExpense = async (spendId) => {
    await axios.delete(`http://localhost:8080/spending/${spendId}`);
    loadExpenses();
  };
  return (
    <CRow>
      <CCol xs={12}>
        <h2 className="text-center m-4">Harcama Listesi</h2>
        <CCard className="mb-4">
          <CCardBody>
            <DocsExample href="components/table#variants">
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Sira</CTableHeaderCell>
                    <CTableHeaderCell scope="col">userId</CTableHeaderCell>
                    <CTableHeaderCell scope="col">spendingType</CTableHeaderCell>
                    <CTableHeaderCell scope="col">spendingAmount</CTableHeaderCell>
                    <CTableHeaderCell scope="col">taxRate</CTableHeaderCell>
                    <CTableHeaderCell scope="col">receiptDate</CTableHeaderCell>
                    <CTableHeaderCell scope="col">spendingDefinition</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {
                    expenses.map((expense,index)=>(
                      <tr>
                        <th key={index}>{index+1}</th>
                        <td>{expense.userId}</td>
                        <td>{expense.spendingType}</td>
                        <td>{expense.spendingAmount}</td>
                        <td>{expense.receiptDate}</td>
                        <td>{expense.taxRate}</td>
                        <td>{expense.spendingDefinition}</td>
                        <Link
                          className="btn btn-outline-primary mx-2"
                          to={`/buttons/buttons/${expense.spendId}`}
                        >
                          Edit
                        </Link>
                        <td>
                          <button className="btn btn-primary mx-2" onClick={()=>deleteExpense(expense.spendId)}>
                            Delete
                          </button>
                        </td>
                      </tr>))
                  }
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
