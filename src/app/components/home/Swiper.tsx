'use client';
import React from 'react'
import { Carousel, Typography, Space } from '@douyinfe/semi-ui';
import { IconArrowLeft, IconArrowRight } from "@douyinfe/semi-icons";

export default function Swiper() {
    const { Title, Paragraph } = Typography;

    const style = {
        width: '100%',
        height: '400px',
    };

    const titleStyle = { 
        position: 'absolute', 
        top: '100px', 
        left: '100px'
    };

    const colorStyle = {
        color: '#1C1F23'
    };
    const arrowProps = {
        leftArrow: { children: <IconArrowLeft size='large'/> },
        rightArrow: { children: <IconArrowRight size='large'/> },
    };

    const renderLogo = () => {
        return (
            <img src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/semi_logo.svg' alt='semi_logo' style={{ width: 87, height: 31 }}/>
        );
    };

    const imgList = [
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-1.png',
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-2.png',
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-3.png',
    ];

    const textList = [
        ['Semi 设计管理系统', '从 Semi Design，到 Any Design', '快速定制你的设计系统，并应用在设计稿和代码中'],
        ['Semi 物料市场', '面向业务场景的定制化组件，支持线上预览和调试', '内容由 Semi Design 用户共建'],
        ['Semi 设计/代码模板', '高效的 Design2Code 设计稿转代码', '海量 Figma 设计模板一键转为真实前端代码'],
    ];


  return (
     <div>
            <Carousel style={style} arrowProps={arrowProps} speed={1000} arrowType="hover" theme="dark" autoPlay={true}>
                {
                    imgList.map((src, index) => {
                        return (
                            <div key={index} style={{ backgroundSize: 'cover', backgroundImage: `url('${src}')` }}>
                                <Space vertical align='start' spacing='medium' style={titleStyle}>
                                    {renderLogo()}
                                    <Title heading={2} style={colorStyle}>{textList[index][0]}</Title>
                                    <Space vertical align='start'>
                                        <Paragraph style={colorStyle}>{textList[index][1]}</Paragraph>
                                        <Paragraph style={colorStyle}>{textList[index][2]}</Paragraph>
                                    </Space>
                                </Space>
                            </div>
                        );
                    })
                }
            </Carousel>
        </div>
  )
}
