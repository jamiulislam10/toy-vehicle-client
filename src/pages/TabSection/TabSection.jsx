import { useEffect, useState } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import TabSection1 from './TabSection1';
import TabSection2 from './TabSection2';
import TabSection3 from './TabSection3';

const TabSection = () => {



    const [activeTab, setActiveTab] = useState('html');
    const [subCategory, setSubCategory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setSubCategory(data))
    }, []);
    const data = [
        {
            label: "Car",
            value: "Car",
        },
        {
            label: "Truck",
            value: "Truck",
        },
        {
            label: "Train",
            value: "Train",
        }
    ];
    return (

        <div>
            <div>
            </div>
            <Tabs value={activeTab}>
                <TabList
                    className="rounded-none border-b border-blue-gray-10 bg-purple-400 p-8 lg:pl-80 pl-10 lg:ml-36  grid grid-cols-3 lg:mr-36"

                >
                    {data.map(({ value, label }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "text-white" : ""}
                        >
                            <button className='text-lg font-bold'>{label}</button>
                        </Tab>
                    ))}
                </TabList>
                <TabPanel className="grid grid-cols-1 lg:grid-cols-2 ml-36 mr-36">

                    {
                        subCategory.slice(0, 2).map(toy => <TabSection1
                            key={toy._id}
                            toy={toy}
                        ></TabSection1>)
                    }
                </TabPanel>
                <TabPanel className="grid grid-cols-1 lg:grid-cols-2 ml-36 mr-36">
                    {
                        subCategory.slice(2, 4).map(toyTwo => <TabSection2
                            key={toyTwo._id}
                            toyTwo={toyTwo}
                        ></TabSection2>)
                    }
                </TabPanel>
                <TabPanel className="grid grid-cols-1 lg:grid-cols-2 ml-36 mr-36">

                    {
                        subCategory.slice(4, 6).map(toyThree => <TabSection3
                            key={toyThree._id}
                            toyThree={toyThree}
                        ></TabSection3>)
                    }
                </TabPanel>
            </Tabs>
        </div>








    );
};

export default TabSection;