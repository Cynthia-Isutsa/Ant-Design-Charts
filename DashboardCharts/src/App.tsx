import { Space } from "antd"
import "./App.css"
import AppFooter from "./components/AppFooter"
import AppHeader from "./components/AppHeader"
import PageContent from "./components/PageContent"
import SideMenu from "./components/SideMenu"

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Space>
      <PageContent />
      <SideMenu />
      </Space>
      <AppFooter />
      </div>
  )
}

export default App