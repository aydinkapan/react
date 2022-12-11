import React, {useEffect, useState} from 'react'
import axios from "axios";
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
import {Link, useParams} from "react-router-dom";

export default function Home() {
  const [users,setUsers]=useState([]);
  const { id }=useParams()
  useEffect(()=>{
    loadUsers();
  },[]);
  const loadUsers=async()=>{
    const result =await axios.get("http://localhost:8080/user");
    setUsers(result.data);
    console.log(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <CRow>
      <CCol xs={12}>
        <h2 className="text-center m-4">Kullanici Listesi</h2>
        <CCard className="mb-2">
          <CCardBody>
            <DocsExample href="components/table#variants">
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Sira</CTableHeaderCell>
                    <CTableHeaderCell scope="col">firstName</CTableHeaderCell>
                    <CTableHeaderCell scope="col">lastName</CTableHeaderCell>
                    <CTableHeaderCell scope="col">email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">salary</CTableHeaderCell>
                    <CTableHeaderCell scope="col">startDate</CTableHeaderCell>
                    <CTableHeaderCell scope="col">title</CTableHeaderCell>
                    <CTableHeaderCell scope="col">role</CTableHeaderCell>
                    <CTableHeaderCell scope="col">department</CTableHeaderCell>
                    <CTableHeaderCell scope="col">address</CTableHeaderCell>
                    <CTableHeaderCell scope="col">phoneNumber</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Sil</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {
                    users.map((user,index)=>(
                      <tr>
                        <th key={index}>{index+1}</th>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.salary}</td>
                        <td>{user.startDate}</td>
                        <td>{user.title}</td>
                        <td>{user.role}</td>
                        <td>{user.department}</td>
                        <td>{user.address}</td>
                        <td>{user.phoneNumber}</td>
                        <Link
                          className="btn btn-outline-primary mx-2"
                          to={`/base/cards/${user.userId}`}
                        >
                          Edit
                        </Link>
                        <td>
                          <button className="btn btn-primary mx-2" onClick={()=>deleteUser(user.userId)}>
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

