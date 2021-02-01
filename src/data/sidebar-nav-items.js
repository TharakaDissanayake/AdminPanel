export default function () {
  return [
    {
      title: 'Admin Dashboard',
      to: '/admin-overview',
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: '',
    },

    {
      title: 'Blog Posts',
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: '/admin-posts',
    },
    {
      title: 'Published Ads Table',
      htmlBefore: '<i class="material-icons">error</i>',
      to: '/published-adstable',
    },
    {
      title: 'Non Published Ads Table',
      htmlBefore: '<i class="material-icons">error</i>',
      to: '/nonpublished-adstable',
    },
    {
      title: 'Admin Details',
      htmlBefore: '<i class="material-icons">error</i>',
      to: '/admin-table',
    },
    {
      title: 'Clients Details',
      htmlBefore: '<i class="material-icons">error</i>',
      to: '/client-table',
    },
    {
      title: 'Categories Details',
      htmlBefore: '<i class="material-icons">error</i>',
      to: '/category-table',
    },

    // {
    //   title: 'Forms & Components',
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: '/components-overview',
    // },
    // {
    //   title: 'Published Ads Tables',
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: '/published-ads',
    // },
    // {
    //   title: 'Non Promoted Ads Tables',
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: '/non-promoted-ads',
    // },

    // {
    //   title: 'Admin deatils',
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: '/admin-table',
    // },
    // {
    //   title: 'Category deatils',
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: '/category-table',
    // },

    // {
    //   title: 'Clients deatils',
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: '/clients-table',
    // },
    // {
    //   title: 'Add New Admin',
    //   htmlBefore: '<i class="material-icons">note_add</i>',
    //   to: '/add-new-post',
    // },
    // {
    //   title: 'User Profile',
    //   htmlBefore: '<i class="material-icons">person</i>',
    //   to: '/user-profile-lite',
    // },
    // {
    //   title: 'Errors',
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: '/errors',
    // },
    // {
    //   title: 'Enhanced Table',
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: '/enhanced-table',
    // },
    // {
    //   title: 'Data Table',
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: '/data-table',
    // },
    // {
    //   title: 'Form',
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: '/form',
    // },
    // {
    //   title: 'AdminForm',
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: '/admin-form',
    // },
    // {
    //   title: 'TestTable',
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: 'paginate-table',
    // },
  ]
}
