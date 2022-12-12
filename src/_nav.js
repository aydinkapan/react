import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'KOLAY IK',
  },
  {
    component: CNavGroup,
    name: 'USER',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add User',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Get All Users',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Update User',
        to: '/base/cards',
      },

    ],
  },
  {
    component: CNavGroup,
    name: 'EXPENSE',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Create Expense',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Get All Expenses',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Update Expense',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'PERMISSION',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Create Permission',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Get All Permissions',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Update Permission',
        to: '/forms/checks-radios',
      },
    ],
  },

]

export default _nav
