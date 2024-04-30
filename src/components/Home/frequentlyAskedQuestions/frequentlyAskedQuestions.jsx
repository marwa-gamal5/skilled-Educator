    import React from 'react';
    import { CaretRightOutlined } from '@ant-design/icons';
    import { MdOutlineAppRegistration } from "react-icons/md";
    import { TbMessageQuestion } from "react-icons/tb";
    import { Collapse, theme } from 'antd';
    import { LuSchool } from "react-icons/lu";
    import { GiMoneyStack } from "react-icons/gi";
    import { AiOutlineFileDone } from "react-icons/ai";
    import { FaGraduationCap } from "react-icons/fa";
    import { FaPlus } from "react-icons/fa";
    import { FaMinus } from "react-icons/fa";

    const { Panel } = Collapse;

    const getItems = (panelStyle) => [

        {
            key: '1',
            header: 'School System',
            style: panelStyle,
            icon: <LuSchool />,
            iconColor: '#3782BB',
            children: [
                {
                    key: '1-1',
                    header: 'Nested Panel 1',
                    content: <p>Nested panel content 1</p>,
                    style: panelStyle,
                    icon: <FaPlus />,
                    iconColor: 'transparent'
                },
                {
                    key: '1-2',
                    header: 'Nested Panel 2',
                    content: <p>Nested panel content 2</p>,
                    style: panelStyle,
                    icon: <FaPlus />,
                    iconColor: 'transparent'
                }
            ]
        },

        {
            key: '2',
            header: 'Registration Requirements And Conditions',
            style: panelStyle,
            icon: <MdOutlineAppRegistration />,
            iconColor: '#3782BB',
            children: [
                {
                    key: '2-1',
                    header: 'hi',
                    content: <p>dddd</p>,
                    style: panelStyle,
                    icon: <FaPlus />,
                    iconColor: 'transparent'
                },
                {
                    key: '2-2',
                    header: 'Nested Panel 2',
                    content: <p>Nested panel content 2</p>,
                    style: panelStyle,
                    icon: <FaPlus />,
                    iconColor: 'transparent'
                }
            ]
        },
        {
            key: '3',
            header: 'Frequently Asked Questions',
            style: panelStyle,
            icon: <TbMessageQuestion />,
            iconColor: '#3782BB',
            children: [
                {
                    key: '3-1',
                    header: 'Nested Panel 1',
                    content: <p>Nested panel content 1</p>,
                    style: panelStyle,
                    icon: <FaPlus />,
                    iconColor: 'transparent'
                },
                {
                    key: '3-2',
                    header: 'Nested Panel 2',
                    content: <p>Nested panel content 2</p>,
                    style: panelStyle,
                    icon: <FaPlus />,
                    iconColor: 'transparent'
                }
            ]
        },
        {
            key: '4',
            header: 'The Cost',
            style: panelStyle,
            icon: <GiMoneyStack />,
            iconColor: '#3782BB',
            children: [
                {
                    key: '4-1',
                    header: 'Nested Panel 1',
                    content: <p>Nested panel content 1</p>,
                    style: panelStyle,
                    iconColor: 'transparent'
                },
                {
                    key: '4-2',
                    header: 'Nested Panel 2',
                    content: <p>Nested panel content 2</p>,
                    style: panelStyle,
                    icon: <FaPlus />,
                    iconColor: 'transparent'
                }
            ]
        },
        {
            key: '5',
            header: 'Diploma Outcomes',
            style: panelStyle,
            icon: <AiOutlineFileDone />,
            iconColor: '#3782BB',
            children: [
                {
                    key: '5-1',
                    header: 'Nested Panel 1',
                    content: <p>Nested panel content 1</p>,
                    style: panelStyle,
                    iconColor: 'transparent'
                },
                {
                    key: '5-2',
                    header: 'Nested Panel 2',
                    content: <p>Nested panel content 2</p>,
                    style: panelStyle,
                    icon: <FaPlus />,
                    iconColor: 'transparent'
                }
            ]
        },
        {
            key: '6',
            header: 'Academic Accreditations',
            style: panelStyle,
            icon: <FaGraduationCap />,
            iconColor: '#3782BB',
            children: [
                {
                    key: '6-1',
                    header: 'Nested Panel 1',
                    content: <p>Nested panel content 1</p>,
                    style: panelStyle,
                    icon: <FaPlus />,
                    iconColor: 'transparent'
                },
                {
                    key: '6-2',
                    header: 'Nested Panel 2',
                    content: <p>Nested panel content 2</p>,
                    style: panelStyle,
                    icon: <FaPlus />,
                    iconColor: 'transparent'
                }
            ]
        },



    ];


    const CustomPanelHeader = ({ header, isParent, icon  }) => (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ marginRight: '10px' }} className='text-[#3782BB] text-lg font-medium'>{header}</span>
            {isParent ? (
                <div className='bg-[#fff] w-[40px] h-[40px] rounded-full flex justify-center items-center text-center'>
                    {React.cloneElement(icon, { style: { fontSize: '24px', color: '#3782BB'  ,marginTop:'4px'} })}

                </div>
            ) : null}
        </div>
    );

    // <MdOutlineAppRegistration />
    const FrequentlyAskedQuestions = () => {
        const { token } = theme.useToken();

        const panelStyle = {
            marginBottom: 24,
            background: ['#DEF1FF'],
            borderRadius: token.borderRadiusLG,
            border: 'none',
        };


        const renderPanel = (item) => {
            if (item.children) {
                return (
                    <Panel
                        key={item.key}
                        header={<CustomPanelHeader header={item.header} isParent={!!item.icon} icon={item.icon} />}

                        style={item.style}
                    >
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['1']}

                            expandIcon={({isActive})=> isActive ? <FaMinus style={{ color: '#3782BB', fontSize: '20px', marginTop: '4px' }} /> : <FaPlus style={{ color: '#3782BB', fontSize: '20px', marginTop: '4px' }}/>}

                        >
                            {item.children.map((childItem) => (
                                <>

                                <Panel
                                    key={childItem.key}
                                    header={<CustomPanelHeader header={childItem.header} isParent={false} />}
                                    style={{ borderBottom: '1px solid #3782BB' }}
                                    // style={childItem.style}
                                >
                                    {childItem.content}
                                </Panel>

                                </>


                            ))


                            }
                        </Collapse>
                    </Panel>
                );
            } else {
                return (
                    <Panel
                        key={item.key}
                        header={<CustomPanelHeader header={item.header} icon={item.icon} iconColor={item.iconColor} />}
                        style={item.style}
                    >
                        {item.content}
                    </Panel>
                );
            }
        };

        return (
            <div className='p-10'>
                <div className='text-[#00112B] md:text-5xl text-3xl font-semibold text-center'>Frequently Asked Questions</div>
                <div className='mt-16'>
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0}  style={{ color: '#3782BB', fontSize: '20px', marginTop: '20px' }} />}
                        style={{ background: token.colorBgContainer }}
                    >
                        {getItems(panelStyle).map((item) => renderPanel(item))}
                    </Collapse>
                </div>
            </div>
        );
    };


    export default FrequentlyAskedQuestions;