import { act, React, useState } from 'react'
import TabContent from './tabContent'
import Button from './button';
import data from '../data/data.json'

const TabLayout = () => {

  const [activeTab, setActiveTab] = useState(0);
  const [showContent, setShowContent] = useState(true);

  return (
    <div className='w-[600px] min-h-42 p-5 bg-white rounded-md shadow-md'>
        <div className='flex space-x-2'>
            {data.map((_, index) => (
                <Button 
                    key={index}
                    num={index}
                    activeTab={activeTab}
                    onClick={() => setActiveTab(index)}/>
            ))}
        </div>
        <div>
            {showContent && 
                <TabContent 
                    key={data[activeTab].id}
                    data={data[activeTab]}/>
            }
        </div>
        <div>
            <span 
                onClick={() => setShowContent(!showContent)}
                className='text-sm text-blue-700 underline cursor-pointer'>
                {showContent ? 'Sembunyikan teks' : 'Tampilkan teks'}
            </span>
        </div>
    </div>
  )
}

export default TabLayout;
