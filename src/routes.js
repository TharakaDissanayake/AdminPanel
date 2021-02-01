import React from 'react'
import { Redirect } from 'react-router-dom'

// Layout Types
import { DefaultLayout } from './layouts'

// Route Views
import BlogOverview from './views/BlogOverview'
import UserProfileLite from './views/UserProfileLite'
import AddNewPost from './views/AddNewPost'
import Errors from './views/Errors'
import ComponentsOverview from './views/ComponentsOverview'
import Tables from './views/Tables'
import BlogPosts from './views/BlogPosts'
import AdminTable from './views/AdminTable'
import AdsTable from './views/AdsTable'
import ClientsTable from './views/UsersTable'
import EnhancedTable from './views/EnhancedTable'
import DataTable from './views/DataTable'
import PromotedsTable from './views/NewPromotedAdsTable'
import NonPublishedAds from './views/NonPublishedAds'
import CategoryTable from './views/CategoryTable'
import ReuseableForm from './components/FormParts/ReuseableForm'
import Usetable from './components/FormParts/Conrols/useTable'
import ShowTable from './components/ShowTable'
import AdminForm from './components/AllForms/AdminForm'
import NewAdminTable from './views/NewAdminTable'
import UsersTable from './views/UsersTable'

export default [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/admin-overview" />,
  },
  {
    path: '/admin-overview',
    layout: DefaultLayout,
    component: BlogOverview,
  },
  {
    path: '/category-table',
    layout: DefaultLayout,
    component: CategoryTable,
  },
  {
    path: '/published-adstable',
    layout: DefaultLayout,
    component: PromotedsTable,
  },
  {
    path: '/nonpublished-adstable',
    layout: DefaultLayout,
    component: NonPublishedAds,
  },
  {
    path: '/admin-table',
    layout: DefaultLayout,
    component: AdminTable,
  },
  {
    path: '/client-table',
    layout: DefaultLayout,
    component: UsersTable,
  },
  // {
  //   path: '/',
  //   exact: true,
  //   layout: DefaultLayout,
  //   component: () => <Redirect to="/blog-overview" />,
  // },
  // {
  //   path: '/blog-overview',
  //   layout: DefaultLayout,
  //   component: BlogOverview,
  // },
  // {
  //   path: '/user-profile-lite',
  //   layout: DefaultLayout,
  //   component: UserProfileLite,
  // },
  // {
  //   path: '/add-new-post',
  //   layout: DefaultLayout,
  //   component: AddNewPost,
  // },
  // {
  //   path: '/admin-table',
  //   layout: DefaultLayout,
  //   component: AdminTable,
  // },
  // {
  //   path: '/ads-table',
  //   layout: DefaultLayout,
  //   component: AdsTable,
  // },
  // {
  //   path: '/clients-table',
  //   layout: DefaultLayout,
  //   component: ClientsTable,
  // },
  // {
  //   path: '/errors',
  //   layout: DefaultLayout,
  //   component: Errors,
  // },
  // {
  //   path: '/components-overview',
  //   layout: DefaultLayout,
  //   component: ComponentsOverview,
  // },
  // {
  //   path: '/tables',
  //   layout: DefaultLayout,
  //   component: Tables,
  // },
  // {
  //   path: '/blog-posts',
  //   layout: DefaultLayout,
  //   component: BlogPosts,
  // },
  // {
  //   path: '/enhanced-table',
  //   layout: DefaultLayout,
  //   component: EnhancedTable,
  // },
  // {
  //   path: '/data-table',
  //   layout: DefaultLayout,
  //   component: DataTable,
  // },
  // {
  //   path: '/promoted-ads',
  //   layout: DefaultLayout,
  //   component: PromotedsTable,
  // },
  // {
  //   path: '/non-promoted-ads',
  //   layout: DefaultLayout,
  //   component: NonPromotedsTable,
  // },
  // {
  //   path: '/category-table',
  //   layout: DefaultLayout,
  //   component: CategoryTable,
  // },
  // {
  //   path: '/form',
  //   layout: DefaultLayout,
  //   component: ReuseableForm,
  // },
  // {
  //   path: '/admin-form',
  //   layout: DefaultLayout,
  //   component: AdminForm,
  // },
  // {
  //   path: '/table',
  //   layout: DefaultLayout,
  //   component: ShowTable,
  // },
]
