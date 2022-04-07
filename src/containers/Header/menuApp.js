export const adminMenu = [
  {
    //quản lí người dùng
    name: "menu.admin.manage-user",
    menus: [
      { name: "menu.admin.crud", link: "/system/user-manage" },
      { name: "menu.admin.crud-redux", link: "/system/user-redux" },
      {
        name: "menu.admin.manage-doctor",
        link: "/system/manage-doctor",
        // subMenus: [
        //   {
        //     name: "menu.system.system-administrator.user-m",
        //     link: "/system/user-manage",
        //   },
        //   {
        //     name: "menu.system.system-administrator.user-redux",
        //     link: "/system/user-redux",
        //   },
        // ],
      },
      // { name: "menu.admin.manage-admin", link: "/system/user-admin" },
      {
        name: "menu.doctor.manage-schedule",
        link: "/doctor/manage-schedule",
      },
    ],
  },
  {
    //quản lí phòng khám
    name: "menu.admin.clinic",
    menus: [
      { name: "menu.admin.manage-clinic", link: "/system/manage-clinic" },
    ],
  },
  {
    //quản lí chuyên khoa
    name: "menu.admin.specialty",
    menus: [
      { name: "menu.admin.manage-specialty", link: "/system/manage-specialty" },
    ],
  },
  {
    //quản lí cẩm nan
    name: "menu.admin.handbook",
    menus: [
      { name: "menu.admin.manage-handbook", link: "/system/manage-handbook" },
    ],
  },
];

export const doctorMenu = [
  {
    name: "menu.admin.manage-user",
    menus: [
      { name: "menu.doctor.manage-schedule", link: "/doctor/manage-schedule" },
    ],
  },
];
