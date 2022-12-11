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

const Tables = () => {
  const [permissions,setPermissions]=useState([]);
  useEffect(()=>{
    loadPermissions();
  },[]);
  const loadPermissions=async()=>{
    const result =await axios.get("http://localhost:8080/permission");
    setPermissions(result.data);
    console.log(result.data);


  };

  return (
    <CRow>
      <CCol xs={12}>
        <h2 className="text-center m-4">Izin Listesi</h2>
        <CCard className="mb-4">
          <CCardBody>
            <DocsExample href="components/table#variants">
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Sira</CTableHeaderCell>
                    <CTableHeaderCell scope="col">userId</CTableHeaderCell>
                    <CTableHeaderCell scope="col">permissionType</CTableHeaderCell>
                    <CTableHeaderCell scope="col">totalDay</CTableHeaderCell>
                    <CTableHeaderCell scope="col">permissionStartDate</CTableHeaderCell>
                    <CTableHeaderCell scope="col">permissionEndDate</CTableHeaderCell>
                    <CTableHeaderCell scope="col">permissionDefinition</CTableHeaderCell>
                    <CTableHeaderCell scope="col">permissionReturnDate</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {
                    permissions.map((permission,index)=>(
                      <tr>
                        <th key={index}>{index+1}</th>
                        <td>{permission.userId}</td>
                        <td>{permission.permissionType}</td>
                        <td>{permission.totalDay}</td>
                        <td>{permission.permissionStartDate}</td>
                        <td>{permission.permissionEndDate}</td>
                        <td>{permission.permissionDefinition}</td>
                        <td>{permission.permissionReturnDate}</td>
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
