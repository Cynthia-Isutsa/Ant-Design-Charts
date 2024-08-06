import React from 'react';
import { PageContainer, ProFormList, ProFormSelect } from "@ant-design/pro-components";
import { Button } from "antd";

const Index = () => {
  return (
    <PageContainer
      content="Welcome to the ProLayout component"
      tabList={[
        {
          tab: 'base information',
          key: 'base',
        },
        {
          tab: 'details',
          key: 'info',
        },
      ]}
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary Action
        </Button>,
      ]}
      footer={[
        <Button key="rest">Reset</Button>,
        <Button key="submit" type="primary">
          Submit
        </Button>,
      ]}
    >
      <ProFormList
        name="users"
        initialValue={[
          {
            useMode: 'chapter',
          },
        ]}
        creatorButtonProps={{
          position: 'top',
          creatorButtonText: 'Building a line',
        }}
        creatorRecord={{
          useMode: 'none',
        }}
      >
        <ProFormSelect
          key="useMode"
          options={[
            {
              value: 'chapter',
              label: 'Valid after stamping',
            },
            {
              value: 'none',
              label: 'Not effective',
            },
          ]}
          width="md"
          name="useMode"
          label="Contract agreement effective method"
        />
      </ProFormList>
    </PageContainer>
  );
};

export default Index;
