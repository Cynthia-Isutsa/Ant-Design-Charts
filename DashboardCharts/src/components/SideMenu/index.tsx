import { AppstoreAddOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const index = () => {
  return (
    <div className="sidemenu">
      <Menu
      onClick={(item) => {
        //item.key
      }}
        items={[
          {
            label: "Dashboard",
            key: "/",
            icon: <AppstoreAddOutlined />,
          },
          {
            label: "Inventory",
            key: "/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Orders",
            key: "/orders",
            icon: <ShoppingCartOutlined />
          },
          {
            label: "Customers",
            key: "/customers",
            icon: <UserOutlined />
          },
        ]}
      ></Menu>
    </div>
  );
};

export default index;
