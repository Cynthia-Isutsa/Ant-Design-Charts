import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { PageContainer, ProTable } from "@ant-design/pro-components";
import { Card, Space, Statistic, Typography } from "antd";
import { useEffect, useState } from "react";
import { getRecentOrders } from "../API";


const index = () => {
 const [dataSource, setDataSource] = useState<any>([])
 const [loading, setLoading] = useState<any>(false)

 useEffect(() => {
  setLoading(true)
  getRecentOrders().then(res =>{
    console.log({res})
    setDataSource(res?.products)
    setLoading(false)
  })
 }, [])


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
        <br />
        <Space direction="vertical">
          <Typography.Title level={2}>Recent Orders</Typography.Title>
          <ProTable
          search={false}
          dataSource={dataSource}
          options={false}
          loading={loading}
            columns={[
              {
                title: "Id",
                dataIndex: "id",
                key: "id",
                width: 150,
                
              },
              {
                title: "Product",
                dataIndex: "title",
                key: "product",
                width: 350,
              },
              {
                title: "Price",
                dataIndex: "price",
                key: "price",
                width: 150,
                valueType: {
                  type: "money",
                  moneySymbol: false
                }
              },
              {
                title: "Quantity",
                dataIndex: "quantity",
                key: "quantity",
                width: 150,
              },
              {
                title: "Total",
                dataIndex: "total",
                key: "total",
                width: 150,
                valueType: {
                  type: "money",
                  moneySymbol: false
                }
              },
              {
                title: "Discounted Total",
                dataIndex: "discountedTotal",
                key: "discounted",
                width: 150,
                valueType: {
                  type: "money",
                  moneySymbol: false
                }
              },
            ]}
            pagination={false}
          />
        </Space>
      </PageContainer>
    </div>
  );
};



export default index;
