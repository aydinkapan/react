import React from 'react'

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

const Layout = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Kullanici Bilgileri</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/layout#form-grid">
              <CRow>
                <CCol xs>
                  <CFormLabel htmlFor="firstName">First Name</CFormLabel>
                  <CFormInput placeholder="First name" aria-label="First name" />
                </CCol>
                <CCol xs>
                  <CFormLabel htmlFor="lastName">Last Name</CFormLabel>
                  <CFormInput placeholder="Last name" aria-label="Last name" />
                </CCol>
              </CRow>
              <CRow>
                <CCol xs>
                  <CFormLabel htmlFor="email">Email</CFormLabel>
                  <CFormInput placeholder="Email" aria-label="email" />
                </CCol>
                <CCol xs>
                  <CFormLabel htmlFor="identityNo">Identity no</CFormLabel>
                  <CFormInput placeholder="Identity No" aria-label="Identity no" />
                </CCol>
              </CRow>
              <CRow>
                <CCol xs>
                  <CFormLabel htmlFor="email">Salary</CFormLabel>
                  <CFormInput placeholder="salary" aria-label="salary" />
                </CCol>
                <CCol xs>
                  <CFormLabel htmlFor="title">Title</CFormLabel>
                  <CFormInput placeholder="title" aria-label="title" />
                </CCol>
              </CRow>
              <CRow>
                <CCol xs>
                  <CFormLabel htmlFor="role">Role</CFormLabel>
                  <CFormInput placeholder="role" aria-label="role" />
                </CCol>
                <CCol xs>
                  <CFormLabel htmlFor="email">Level</CFormLabel>
                  <CFormSelect aria-label="Default select example">
                    <option>Lutfen Seviye seciniz</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs>
                  <CFormLabel htmlFor="department">Department</CFormLabel>
                  <CFormSelect aria-label="Default select example">
                    <option>Lutfen Departman seciniz</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs>
                  <CFormLabel htmlFor="sdate">Start date of work</CFormLabel>
                  <input type="date"></input>
                </CCol>
                <CCol xs>
                  <CFormLabel htmlFor="bdate">Start date of work</CFormLabel>
                  <input type="date"></input>
                </CCol>
              </CRow>
              <DocsExample href="components/buttons#block-buttons">
                <div className="d-grid gap-2 col-6 mx-auto">
                  <CButton color="primary">Save</CButton>
                </div>
              </DocsExample>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Layout
