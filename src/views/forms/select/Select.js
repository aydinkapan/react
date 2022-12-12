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

const Tables = () => {
  const [permissions,setPermissions]=useState([]);
  const {permissionId}=useParams()

  useEffect(()=>{
    loadPermissions();
  },[]);
  const loadPermissions=async()=>{
    const result =await axios.get("http://localhost:8080/permission");
    setPermissions(result.data);
    console.log(result.data);
  };
  const deletePermission = async (permissionId) => {
    await axios.delete(`http://localhost:8080/permission/${permissionId}`);
    loadPermissions();
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
                        <Link
                          className="btn btn-outline-primary mx-2"
                          to={`/forms/checks-radios/${permission.permissionId}`}
                        >
                          Edit
                        </Link>
                        <td>
                          <button className="btn btn-primary mx-2" onClick={()=>deletePermission(permission.permissionId)}>
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
