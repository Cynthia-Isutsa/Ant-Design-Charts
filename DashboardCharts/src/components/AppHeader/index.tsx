import { BellFilled, MailOutlined } from "@ant-design/icons"
import { Badge, Image, Space, Typography } from "antd"


const index = () => {
  return (
    <div className='header'>
      <Image
      width={40}
       src="https://www.hubspot.com/hs-fs/hubfs/Pepsi_logo_2014.svg.png?width=450&height=458&name=Pepsi_logo_2014.svg.png" />
      <Typography.Title> Cynthia's Dashboard</Typography.Title>
      <Space>
        <Badge count = {50} dot>
        <MailOutlined style={{fontSize: 24}} />
        </Badge>
        <Badge count = {50}>
        <BellFilled style={{fontSize: 24}}/>
        </Badge>
      </Space>

    </div>
  )
}

export default index