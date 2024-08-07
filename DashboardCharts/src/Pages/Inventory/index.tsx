import { useEffect, useState } from "react"
import { getProducts } from "../API";
import { Avatar, Card, Rate, Space, Typography } from "antd";
import { PageContainer, ProTable } from "@ant-design/pro-components";


const index = () => {
const [loading, setLoading] = useState<boolean>(false)
const [dataSource, setDataSource] = useState<any>([])

useEffect(() => {
  setLoading(true);
  getProducts ().then((res) => {
    console.log({ res });
    setDataSource(res?.products);
    setLoading(false);
  });
}, []);


  return (
    <PageContainer
    breadcrumbRender={false}
    fixedHeader
    header={{
      title: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card bordered={false}>
            <Typography.Title level={4} style={{ color: "blue" }}>
             Inventory Data
            </Typography.Title>
          </Card>
        </div>
      ),
    }}
  >
    <Space direction='vertical'>
    <Typography.Title level={2}>Inventory Updates</Typography.Title>
      <ProTable 
      search={false}
      dataSource={dataSource} 
      loading={loading}
      pagination={false}
      columns={[
        {
          title: "Title", 
          dataIndex: "title",
          key: "title",
          width: 300
        },
        {
          title: "Price", 
          dataIndex: "price",
          key: "price",
          width: 200,
          valueType: {
            type: "money",
            moneySymbol: false
          }
        },
       
        {
          title: "Stock", 
          dataIndex: "stock",
          key: "stock",
          width: 200
        },
       
        {
          title: "Brand", 
          dataIndex: "brand",
          key: "brand",
          width: 200
        },
        {
          title: "Category", 
          dataIndex: "category",
          key: "category",
          width: 200
        },
        {
          title: "Thumbnail", 
          dataIndex: "thumbnail",
          key: "thumbnail",
          width: 200,
          //ellipsis: true,
          render: (link)=> {
            return (
              <Avatar src={link} />
            )
          }
        },
        {
          title: "Rating", 
          dataIndex: "rating",
          key: "rating",
          width: 200,
          render: (rate: any) =>{
            return (
              <Rate value={rate} allowHalf disabled/>
  )
          }

        },
      ]}
      />
     
    </Space>
    </PageContainer>
  )
}

export default index