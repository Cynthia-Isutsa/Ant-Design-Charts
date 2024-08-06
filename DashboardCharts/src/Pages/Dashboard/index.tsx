import {
  DollarCircleOutlined,
  //EllipsisOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { PageContainer, ProTable, 
  //StatisticCard
 } from "@ant-design/pro-components";
import { Card, Divider, Space, Statistic, Typography } from "antd";
import { useEffect, useState } from "react";
import { getRecentOrders, getRevenue } from "../API";
//import RcResizeObserver from 'rc-resize-observer';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement, 
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import DashboardChart from "./components/DashboardChart";



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)


const index = () => {
 const [dataSource, setDataSource] = useState<any>([])
 const [loading, setLoading] = useState<any>(false)
 //const [responsive, setResponsive] = useState(false);

 useEffect(() => {
  setLoading(true)
  getRecentOrders().then(res =>{
    console.log({res})
    setDataSource(res?.products)
    setLoading(false)
  })
 }, [])

 useEffect(() => {
  //setLoading(true)   
  getRevenue().then(res =>{
    console.log({res})
    const labels = res?.carts?.map((item: any)=> {
        return `user -${item?.userId}`
    })

    const data = res?.carts?.map((disc: any) =>{
      return disc?.discountedTotal

    })

    console.log({labels, data})

   
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
        <Divider />
        {/* <StatisticCard
      title={
        <Space>
          <span> Ant Design Graph</span>
          <RightOutlined style={{ color: "lightblue" }} />
        </Space>
      }
      extra={<EllipsisOutlined />}
      statistic={{
        value: 1102893,
        prefix: 'Ksh.',
        description: (
          <Space>
            <Statistic title="Percentage" value="82.3%" />
            <Statistic title="Amount" value="6000" />
          </Space>
        ),
      }}
      chart={
        <>
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
            alt="chart"
            width="100%"
          />
        </>
      }
      style={{ width: 268 }}
    /> */}
     {/* <StatisticCard
      title="Example of Antd chart"
      tooltip="Sales"
      style={{ maxWidth: 480 }}
      extra={<EllipsisOutlined />}
      chart={
        <img
          src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
          alt="sales chart"
          width="100%"
        />
      }
      />
       <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
        <StatisticCard
          statistic={{
            title: '总流量(人次)',
            value: 601986875,
          }}
        />
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <StatisticCard
          statistic={{
            title: '付费流量',
            value: 3701928,
            description: <Statistic title="占比" value="61.5%" />,
          }}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"
              alt="百分比"
              width="100%"
            />
          }
          chartPlacement="left"
        />
        <StatisticCard
          statistic={{
            title: '免费流量',
            value: 1806062,
            description: <Statistic title="占比" value="38.5%" />,
          }}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg"
              alt="百分比"
              width="100%"
            />
          }
          chartPlacement="left"
        />
      </StatisticCard.Group>
    </RcResizeObserver>
     */}
        <Divider />
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
          <DashboardChart />
        </Space>
      </PageContainer>
    </div>
  );
};


export default index;
