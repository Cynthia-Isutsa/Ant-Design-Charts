import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-components";
import { Card, Space, Statistic, Typography } from "antd";

const index = () => {
  return (
    <div>
      <PageContainer
        breadcrumbRender={false}
        fixedHeader
        header={{
          title: (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Card bordered={false}>
                <Typography.Title level={3} style={{ color: "blue" }}>
                  Welcome to Cynthia's Sales Dashboard, Home to Everything Good
                </Typography.Title>
              </Card>
            </div>
          ),
        }}
      >
        <Space direction="horizontal">
          <Card>
            <Space direction="horizontal">
              <ShoppingCartOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0, 255,0,0.25)",
                  borderRadius: 20,
                  padding: 8,
                  fontSize: 24,
                }}
              />
              <Statistic title="Total Sales" value={1782893} />
            </Space>
          </Card>
          <Card>
            <Space direction="horizontal">
              <ShoppingOutlined 
               style={{
                color: "purple",
                backgroundColor: "rgba(0, 255,255,0.25)",
                borderRadius: 20,
                padding: 8,
                fontSize: 24,
              }}
              
              />
              <Statistic title="Inventory" value={1236} />
            </Space>
          </Card>
          <Card>
            <Space direction="horizontal">
              <UserOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0, 0, 255,0.25)",
                  borderRadius: 20,
                  padding: 8,
                  fontSize: 24,
                }} 
                />
              <Statistic title="Customer" value={34576} />
            </Space>
          </Card>
          <Card>
            <Space direction="horizontal">
              <DollarCircleOutlined 
              style={{
                color: "red",
                backgroundColor: "rgba( 255,0, 0,0.25)",
                  borderRadius: 20,
                  padding: 8,
                  fontSize: 24,
                }}
                 />
              <Statistic title="Revenue" value={1236000} />
            </Space>
          </Card>
        </Space>
      </PageContainer>
    </div>
  );
};

export default index;
