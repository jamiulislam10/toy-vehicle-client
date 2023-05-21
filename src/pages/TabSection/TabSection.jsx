import { useEffect, useState } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import TabSection1 from './TabSection1';
import TabSection2 from './TabSection2';
import TabSection3 from './TabSection3';

const TabSection = () => {



    const [activeTab, setActiveTab] = useState('html');
    const [subCategory, setSubCategory] = useState([]);
    useEffect(() => {
        fetch('https://toy-vehicle-server.vercel.app/category')
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
            <div>    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                    
                      <span className="relative">The</span>
                    </span>{' '}
                    Subcategory of toy vehicle
                  </h2>
            </div>
            <Tabs value={activeTab}>
                <TabList
                    className="rounded-none  border-b border-blue-gray-10 bg-purple-400 p-8 lg:pl-56 pl-10 lg:ml-44  grid grid-cols-3 lg:mr-44"

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
                <TabPanel className="grid grid-cols-1 lg:grid-cols-2 lg:ml-36 lg:mr-36 -mt-10">

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